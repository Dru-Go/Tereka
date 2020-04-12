import React from 'react';
import './play.style.css';
import Pause from './controls/pause';
import Play from './controls/play';
import PlayBar from './playBar';

// TODO HERE WE NEED TO PASS THE CURRENTLY PLAYING AUDIO
// // TODO EXPAND TO EXPANDED COMPONENT ANIMATED OR NOT
// TODO ADD ACTION TO CONTROLS

const Mini = ({
  mini,
  setMin,
  playing,
  setPlay,
  curTime,
  duration,
  setClickedTime,
}) => {

  const handleClick = () => {
    setMin(false);
  };


  return (
    <div class="bottom-0 miniPlay  absolute pb-2 w-1/5">
      <div class="mt-1 ml-8 cursor-pointer" onClick={handleClick}>
        <div class="rounded-full bg-gray-300 opacity-25 h-1 w-10 m-auto"></div>
      </div>
      <div class="flex items-center justify-around">
        <div class="cursor-pointer" onClick={handleClick}>
          <img src="./book1.png" class=" w-12  h-12 rounded-full" alt="" />
        </div>
        <div class="flex items-center ">
          <div class="mx-4 cursor-pointer">
            <svg width="17.5" height="12" viewBox="0 0 17.5 12">
              <path
                class="aback1"
                d="M11,18V6L2.5,12Zm.5-6L20,18V6Z"
                transform="translate(-2.5 -6)"
              />
            </svg>
          </div>
          {playing ? (
            <Play setPlay={setPlay} />
          ) : (
            <Pause setPlay={setPlay} />
          )}
          <div class="mx-4 cursor-pointer">
            <svg width="17.5" height="12" viewBox="0 0 17.5 12">
              <path
                class="aforward1"
                d="M4,18l8.5-6L4,6ZM13,6V18l8.5-6Z"
                transform="translate(-4 -6)"
              />
            </svg>
          </div>
        </div>
        <div class="cursor-pointer">
          <svg width="13" height="12" viewBox="0 0 13 12">
            <path
              class="avolume1"
              d="M5.848,11.635,3.523,10H2A2,2,0,0,1,0,8V4A2,2,0,0,1,2,2H3.394L5.891.336A2,2,0,0,1,9,2v8a2,2,0,0,1-3.152,1.635ZM2,8H4.155L7,10V2L4,4H2Zm8.54-.05L10.514,7.9a.949.949,0,0,1,.161-1.167,1,1,0,0,0,.005-1.467A.954.954,0,0,1,10.519,4.1l.027-.047a.966.966,0,0,1,1.469-.269,2.985,2.985,0,0,1-.009,4.439.9.9,0,0,1-.6.229A1,1,0,0,1,10.54,7.949Z"
            />
          </svg>
        </div>
      </div>
      {/* audio */}
      <audio id="music">
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <PlayBar
        mini={mini}
        curTime={curTime}
        duration={duration}
        onTimeUpdate={time => setClickedTime(time)}
      />
    </div>
  );
};

export default Mini;
