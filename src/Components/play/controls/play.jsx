import React from 'react';

import playSVG from '../svg/pauseP.svg' 
const playControl = ({setPlay}) => {
  //Play and Pause
  const playNow = () => {
    setPlay(false);
  };

  return (
    <div class="px-20 cursor-pointer" id="pButtons" onClick={playNow}>
      <img src={playSVG} alt="playSVG" />
    </div>
  );
};

export default playControl;
