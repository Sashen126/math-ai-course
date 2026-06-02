rm(list = ls())

if (!requireNamespace("BiocManager", quietly = TRUE)) {
  install.packages("BiocManager")
}

# make sure Bioconductor is on the correct version
BiocManager::install(version = "3.22", ask = FALSE)

# install required Bioconductor packages
bioc_pkgs <- c(
  "curatedMetagenomicData",
  "rbiom",
  "microbiome",
  "ALDEx2",
  "mia",
  "SummarizedExperiment",
  "phyloseq",
  "HMP"
)

for (pkg in bioc_pkgs) {
  if (!requireNamespace(pkg, quietly = TRUE)) {
    BiocManager::install(pkg, ask = FALSE, update = FALSE, force = TRUE)
  }
}

# install CRAN packages
cran_pkgs <- c("dplyr", "stringr", "Matrix", "tibble")
for (pkg in cran_pkgs) {
  if (!requireNamespace(pkg, quietly = TRUE)) {
    install.packages(pkg)
  }
}

library(curatedMetagenomicData)
library(microbiome)
library(ALDEx2)
library(mia)
library(SummarizedExperiment)

library(dplyr)
library(stringr)
library(Matrix)
library(tibble)
library(phyloseq)
library(HMP)

curatedMetagenomicData("FerrettiP_2018*", dryrun = TRUE)

se <- sampleMetadata |>
  dplyr::filter(study_name == "FerrettiP_2018") |>
  returnSamples("relative_abundance", counts = TRUE)

meta_df <- as.data.frame(colData(se)) %>%
  tibble::rownames_to_column(var = "sample_id")

sample.id.list <- str_split(meta_df$sample_id, "_")
sample.id.timepoints <- lapply(sample.id.list, "[[", 3)

meta_df.1 <- meta_df %>%
  mutate(timepoint = substr(sample.id.timepoints, 1, 2))

meta_df.2 <- meta_df.1 %>%
  select(sample_id, subject_id, timepoint, body_site,
         study_condition, disease, age_category) %>%
  arrange(subject_id, timepoint, body_site) %>%
  filter(body_site %in% c("stool", "oralcavity"),
         age_category == "newborn",
         timepoint %in% c("t1", "t2"))

subjects_with_t1 <- meta_df.2 %>%
  filter(timepoint == "t1") %>%
  pull(subject_id) %>%
  unique()

filtered_meta_df <- meta_df.2 %>%
  filter(subject_id %in% subjects_with_t1)

subject_site_with_both <- filtered_meta_df %>%
  group_by(subject_id, body_site) %>%
  summarise(
    has_t1 = any(timepoint == "t1"),
    has_t2 = any(timepoint == "t2"),
    .groups = "drop"
  ) %>%
  filter(has_t1 & has_t2)

final_meta_df <- filtered_meta_df %>%
  semi_join(subject_site_with_both, by = c("subject_id", "body_site"))

selected_samples <- final_meta_df %>% pull(sample_id)
se_filtered <- se[, selected_samples]

otu <- assay(se_filtered)
tax <- rowData(se_filtered)
samples <- colData(se_filtered)

OTU <- otu_table(otu, taxa_are_rows = TRUE)
TAX <- tax_table(as.matrix(tax))
SAMPLES <- sample_data(as.data.frame(samples))

pseq <- phyloseq(OTU, TAX, SAMPLES)
pseq2 <- aggregate_taxa(pseq, "genus")

meta_data <- sample_data(pseq2) %>%
  tibble::rownames_to_column(var = "sample_id")

otu <- t(round(otu_table(pseq2)))
otu <- HMP::Data.filter(otu, "data", 0, 10)

combined_dat <- cbind(final_meta_df[, 1:4], otu)
combined_dat$subject_site <- paste(combined_dat$subject_id,
                                   combined_dat$body_site,
                                   sep = "_")

taxa_cols <- colnames(otu)
W_count <- list()
unique_combinations <- unique(combined_dat$subject_site)

for (combo in unique_combinations) {
  sub_combined_dat <- combined_dat[combined_dat$subject_site == combo, ]
  sub_combined_dat <- sub_combined_dat[order(sub_combined_dat$timepoint), ]

  mat <- matrix(NA,
                nrow = length(taxa_cols),
                ncol = 2,
                dimnames = list(taxa_cols, c("t1", "t2")))

  for (i in seq_len(nrow(sub_combined_dat))) {
    tp <- sub_combined_dat$timepoint[i]
    for (taxon in taxa_cols) {
      mat[taxon, tp] <- sub_combined_dat[i, taxon]
    }
  }

  W_count[[combo]] <- mat
}