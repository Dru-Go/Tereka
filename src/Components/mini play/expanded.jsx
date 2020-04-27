import React, {useContext} from 'react';
import {AudioContext} from '../../Context/audioContext';
import PlayBar from './playBar';
import './play.style.css';
import Pause from './controls/pause';
import Play from './controls/play';
import forward from './svgs/forward.svg';
import volume from './svgs/volume.svg';
import prev from './svgs/prev.svg';
import compress from './svgs/compress.svg';
const Expanded = ({mini, setMin}) => {
  const [
    curTime,
    ,
    duration,
    ,
    playing,
    setPlaying,
    curPlay,
    ,
    ,
    ,
  ] = useContext(AudioContext);

  const handleClick = () => {
    setMin(!mini);
  };

  return (
    <div class="bottom-0 miniPlay  absolute pb-2 w-1/5">
      <div class="mt-2 cursor-pointer" onClick={handleClick}>
        <div class="rounded-full bg-gray-300  opacity-25 h-1 w-10 m-auto"></div>
      </div>
      <div class="mx-6 my-4">
        <img
          class="m-auto rounded-lg"
          src={curPlay ? curPlay.ImageURL : ''}
          alt=""
        />
      </div>
      {/* audio */}
      <PlayBar mini={mini} curTime={curTime} duration={duration} />
      <div class="flex items-center my-2 justify-around">
        <div class="cursor-pointer" onClick={handleClick}>
          <img src={compress} alt="prevSVG" />
        </div>
        <div class="flex items-center">
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
    </div>
  );
};

export default Expanded;
