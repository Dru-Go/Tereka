import React from 'react';
import pauseSVG from '../svg/playP.svg'
const pauseControl = ({setPlay}) => {
  //Play and Pause
  const pauseNow = () => {
    setPlay(true);
  };

  return (
    <div class="px-20 cursor-pointer" onClick={pauseNow}>
     <img src={pauseSVG} alt="pauseSVG" />
    </div>
  );
};

export default pauseControl;
