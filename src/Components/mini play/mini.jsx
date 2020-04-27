import React, {useContext} from 'react';
import {AudioContext} from '../../Context/audioContext';
import './play.style.css';
import Pause from './controls/pause';
import Play from './controls/play';
import PlayBar from './playBar';
import volume from './svgs/volume.svg';
import forward from './svgs/forward.svg';
import prev from './svgs/prev.svg';

// // TODO EXPAND TO EXPANDED COMPONENT ANIMATED OR NOT
// // TODO ADD ACTION TO CONTROLS

const Mini = ({mini, setMin}) => {
  const [
    curTime,
    ,
    duration,
    ,
    playing,
    setPlaying,
    curPlay,
    ,
    sound,
    ,
  ] = useContext(AudioContext);

  const handleClick = () => {
    setMin(false);
  };

  if (!curPlay) {
    return null
  }

  return (
    <div class="bottom-0 miniPlay  absolute pb-2 w-1/5">
      <div class="mt-1 ml-8 cursor-pointer" onClick={handleClick}>
        <div class="rounded-full bg-gray-300 opacity-25 h-1 w-10 m-auto"></div>
      </div>
      <div class="flex items-center justify-around">
        <div class="cursor-pointer" onClick={handleClick}>
          <img src={curPlay.ImageURL} class=" w-12  h-12 rounded-full" alt="" />
        </div>
        <div class="flex items-center ">
          <div class="mx-4 cursor-pointer">
            <img src={prev} alt="prevSVG" />
          </div>
          {playing ? (
            <Play setPlay={setPlaying} />
          ) : (
            <Pause setPlay={setPlaying} />
          )}
          <div class="mx-4 cursor-pointer">
            <img src={forward} alt="forwardSVG" />
          </div>
        </div>
        <div class="cursor-pointer">
          <img src={volume} alt="volumeSVG" />
        </div>
      </div>

      <PlayBar
        mini={mini}
        curTime={curTime}
        duration={duration}
        sound={sound}
      />
    </div>
  );
};

export default Mini;
