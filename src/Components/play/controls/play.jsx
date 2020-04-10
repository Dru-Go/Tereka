import React from 'react';
import './controls.style.css';
const playControl = ({controls, playing, setPlay}) => {
  const handleClick = () => {
    controls(false);
    // Pause audio
    play();
  };

  //Play and Pause
  function play() {
    // start audio
    if (playing) {
      setPlay(true)
    } else {
      // pause audio
      setPlay(false)
    }
  }

  return (
    <div class="px-20 cursor-pointer" id="pButtons" onClick={handleClick}>
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
          <filter
            id="d"
            x="34.5"
            y="22"
            width="45"
            height="49"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dx="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="e" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="e" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-734 -669)">
          <g class="d8uyt" transform="matrix(1, 0, 0, 1, 734, 669)">
            <circle
              class="a8uyt"
              cx="40"
              cy="40"
              r="40"
              transform="translate(9 6)"
            />
          </g>
          <g class="c8uyt" transform="matrix(1, 0, 0, 1, 734, 669)">
            <path
              class="b8uyt"
              d="M12.031,6.043a4,4,0,0,1,6.938,0L27.56,21.009A4,4,0,0,1,24.091,27H6.909A4,4,0,0,1,3.44,21.009Z"
              transform="translate(67.5 31) rotate(90)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default playControl;
