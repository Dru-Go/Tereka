import React, {useContext} from 'react';
import './play_style.css';
import PlayBar from './playBar';
import Play from './controls/play';
import Pause from './controls/pause';
import {AudioContext} from '../../Context/audioContext';

const Player = () => {
  const [curTime, , duration, , playing, setPlaying] = useContext(AudioContext);

  return (
    <>
      <div class="bord play-img border-gray-400">
        <div class="p-10 flex items-center justify-between">
          <div>
            <div class="p-4 rounded-full">
              <svg width="14" height="14" viewBox="0 0 16 16">
                <path
                  class="aw "
                  d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
                  transform="translate(-4 -4)"
                />
              </svg>
            </div>
          </div>
          <div>Narrator: ~~.....</div>
        </div>
        <div class="">
          <img class="m-auto w-1/4 " src="../book1.png" alt="" />
        </div>
      </div>
      <div class="bord play absolute w-80p bottom-0 border">
        <div class="bord  flex items-start justify-around">
          <div class="p-4 cursor-pointer rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.886"
              height="26.307"
              viewBox="0 0 25.886 26.307"
            >
              <g transform="translate(-2 -2)">
                <circle
                  class="a b8uyt"
                  cx="1.973"
                  cy="1.973"
                  r="1.973"
                  transform="translate(17.487 9.892)"
                />
                <circle
                  class="a b8uyt"
                  cx="1.973"
                  cy="1.973"
                  r="1.973"
                  transform="translate(8.453 9.892)"
                />
                <path
                  class="a b8uyt"
                  d="M14.93,2A13.044,13.044,0,0,0,2,15.154,13.044,13.044,0,0,0,14.93,28.307,13.057,13.057,0,0,0,27.886,15.154,13.057,13.057,0,0,0,14.93,2Zm.013,23.677A10.437,10.437,0,0,1,4.589,15.154,10.437,10.437,0,0,1,14.943,4.631,10.437,10.437,0,0,1,25.3,15.154,10.437,10.437,0,0,1,14.943,25.677Zm0-5.261a5.159,5.159,0,0,1-4.465-2.631H8.316a7.071,7.071,0,0,0,13.254,0H19.409a5.159,5.159,0,0,1-4.465,2.631Z"
                />
              </g>
            </svg>
          </div>
          <div class="">
            <div class="uppercase font-helvetica-rounded font-bold text-3xl">
              babshka's journey
            </div>
            <div class="pt-4 text-center font-bold  cursor-pointer hover:underline text-color capitalize">
              marry bay
            </div>
          </div>
          {/* Here Onclick we change the fill to another color*/}
          <div class="p-4 cursor-pointer color1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="23"
              viewBox="0 0 19.685 25.309"
            >
              <path
                class="fill-current"
                d="M21.872,3H7.812a2.808,2.808,0,0,0-2.8,2.812L5,28.309l9.842-4.218,9.842,4.218V5.812A2.82,2.82,0,0,0,21.872,3Zm0,21.091-7.03-3.065-7.03,3.065V5.812h14.06Z"
                transform="translate(-5 -3)"
              />
            </svg>
          </div>
        </div>
        
        {/* playBar */}
        <PlayBar curTime={curTime} duration={duration} />
        <div class="bord flex items-center mt-16">
          <div class="flex items-center ml-40 w-70p justify-center">
            <div class="cursor-pointer">
              <svg class="w-8 h-8 b8uyt" viewBox="0 0 17.5 12">
                <path
                  d="M11,18V6L2.5,12Zm.5-6L20,18V6Z"
                  transform="translate(-2.5 -6)"
                />
              </svg>
            </div>
            {playing ? (
              <Play setPlay={setPlaying} />
            ) : (
              <Pause setPlay={setPlaying} />
            )}
            <div class="cursor-pointer">
              <svg class="w-8 h-8 b8uyt" viewBox="0 0 17.5 12">
                <path
                  d="M4,18l8.5-6L4,6ZM13,6V18l8.5-6Z"
                  transform="translate(-4 -6)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
