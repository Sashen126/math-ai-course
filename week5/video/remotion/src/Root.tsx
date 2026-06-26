import {Composition} from 'remotion';
import {LectureScene} from './LectureScene';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Week5Lecture"
        component={LectureScene}
        durationInFrames={7200}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
