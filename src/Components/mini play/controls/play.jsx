import React from 'react';
import playSVG from '../svgs/play.svg';

const play = ({setPlay}) => {
  //Play and Pause
  const playNow = () => {
    setPlay(false);
  };
  return (
    <div class="mx-4 cursor-pointer" onClick={playNow}>
      <img src={playSVG} alt="prevSVG" />
    </div>
  );
};

export default play;
