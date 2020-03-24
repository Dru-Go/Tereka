import React from 'react';
import './play_style.css';
// import AudioContext from './play.context';

const play = props => {
  console.log(props.location.pathname)
  return (
    <>
      <div class="bord play-img border-gray-400">
        <div class="p-10 flex items-center justify-between">
          <div>
            <div class="p-4 padd-color rounded-full">
              <svg width="14" height="14" viewBox="0 0 16 16">
                <path
                  class="aw"
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
      <div class="bord play">
        <div class="bord  flex items-start justify-around">
          <div class="p-4 padd-color rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.886"
              height="26.307"
              viewBox="0 0 25.886 26.307"
            >
              <g transform="translate(-2 -2)">
                <circle
                  class="a"
                  cx="1.973"
                  cy="1.973"
                  r="1.973"
                  transform="translate(17.487 9.892)"
                />
                <circle
                  class="a"
                  cx="1.973"
                  cy="1.973"
                  r="1.973"
                  transform="translate(8.453 9.892)"
                />
                <path
                  class="a"
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
          <div class="p-4 padd-color rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25.309"
              viewBox="0 0 19.685 25.309"
            >
              <path
                class="a"
                d="M21.872,3H7.812a2.808,2.808,0,0,0-2.8,2.812L5,28.309l9.842-4.218,9.842,4.218V5.812A2.82,2.82,0,0,0,21.872,3Zm0,21.091-7.03-3.065-7.03,3.065V5.812h14.06Z"
                transform="translate(-5 -3)"
              />
            </svg>
          </div>
        </div>
        <div class="bord">slider</div>
        <div class="bord flex items-center mt-32">
          <div class="flex items-center ml-40 w-70p justify-center">
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.799"
                height="29.678"
                viewBox="0 0 26.799 29.678"
              >
                <g transform="translate(-619 -711.322)">
                  <path
                    class="a24"
                    d="M17.4,6.936V1L9.025,8.419,17.4,15.839V9.9c5.527,0,10.05,4.007,10.05,8.9s-4.522,8.9-10.05,8.9S7.35,23.7,7.35,18.807H4c0,6.529,6.03,11.871,13.4,11.871s13.4-5.342,13.4-11.871S24.769,6.936,17.4,6.936Z"
                    transform="translate(615 710.322)"
                  />
                  <text class="b24" transform="translate(626 722)">
                    <tspan x="0" y="12">
                      15
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
            <div class="px-20">
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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.8"
                height="29.68"
                viewBox="0 0 26.8 29.68"
              >
                <g transform="translate(-854 -702.683)">
                  <text class="ah256" transform="translate(862 713)">
                    <tspan x="0" y="12">
                      15
                    </tspan>
                  </text>
                  <path
                    class="bh256"
                    d="M4,18.808c0,6.53,6.03,11.872,13.4,11.872s13.4-5.342,13.4-11.872H27.45c0,4.9-4.523,8.9-10.05,8.9s-10.05-4.007-10.05-8.9S11.872,9.9,17.4,9.9V15.84l8.375-7.42L17.4,1V6.936C10.03,6.936,4,12.278,4,18.808Z"
                    transform="translate(850 701.683)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default play;
