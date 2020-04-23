import React from 'react';
import pauseSVG from '../svgs/pause.svg';

const pause = ({setPlay}) => {
  //Play and Pause
  const pauseNow = () => {
    setPlay(true);
  };
  return (
    <div class="mx-4 cursor-pointer" onClick={pauseNow}>
       <img src={pauseSVG} alt="prevSVG" />
    </div>
  );
};

export default pause;
