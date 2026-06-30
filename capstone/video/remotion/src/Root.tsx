import React from 'react';
import {Composition} from 'remotion';
import {LectureScene} from './LectureScene';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="CapstoneLecture"
        component={LectureScene}
        durationInFrames={7500}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
