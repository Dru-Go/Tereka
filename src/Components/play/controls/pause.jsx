import React from 'react';
import './controls.style.css';

const pauseControl = ({setPlay}) => {
  //Play and Pause
  const pauseNow = () => {
    setPlay(true);
  };

  return (
    <div class="px-20 cursor-pointer" onClick={pauseNow}>
      <svg width="98" height="98" viewBox="0 0 98 98">
        <defs>
          <linearGradient
            id="a"
            x1="0.092"
            y1="0.279"
            x2="0.935"
            y2="0.81"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#389d8d" />
            <stop offset="1" stop-color="#126054" />
          </linearGradient>
          <filter
            id="b"
            x="0"
            y="0"
            width="98"
            height="98"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="c" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="c" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-734 -669)">
          <g class="cpause" transform="matrix(1, 0, 0, 1, 734, 669)">
            <circle
              class="apause"
              cx="40"
              cy="40"
              r="40"
              transform="translate(9 6)"
            />
          </g>
          <path
            class="bpause"
            d="M17.666,21A4.183,4.183,0,0,1,13.5,16.8V4.2A4.183,4.183,0,0,1,17.666,0h4.167A4.183,4.183,0,0,1,26,4.2V16.8A4.183,4.183,0,0,1,21.833,21Zm0-4.2h4.167V4.2H17.666ZM4.166,21A4.183,4.183,0,0,1,0,16.8V4.2A4.183,4.183,0,0,1,4.166,0H8.333A4.182,4.182,0,0,1,12.5,4.2V16.8A4.182,4.182,0,0,1,8.333,21Zm0-4.2H8.333V4.2H4.166Z"
            transform="translate(770.001 705)"
          />
        </g>
      </svg>
    </div>
  );
};

export default pauseControl;
