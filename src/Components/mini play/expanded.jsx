import React from 'react';
import './play.style.css';

const expanded = ({setMin}) => {
  const handleClick = () => {
    setMin(true)
  }
  return(
  <div class="bottom-0 miniPlay  absolute pb-2 w-1/5">
    <div class="mt-2 cursor-pointer" onClick={handleClick}>
      <div class="rounded-full bg-gray-300  opacity-25 h-1 w-10 m-auto"></div>
    </div>
    <div class="mx-6 my-4">
      <img class="m-auto rounded-lg" src="../book1.png" alt="" />
    </div>

    <div class="flex mt-4 mx-10 items-center text-gray-400  justify-between text-xxs">
      <div>2:34:12</div>
      <div>3:14:05</div>
    </div>
    <div class="mb-4 cursor-pointer rounded-full bg-gray-300 m-auto   opacity-25 h-1 w-2/3 ">
      <div class="rounded-full bg-gray-800  h-full w-1/3 float-right"></div>
    </div>
    <div class="flex items-center my-2 justify-around">
      <div class="cursor-pointer" onClick={handleClick}>
        <svg width="16" height="15.999" viewBox="0 0 16 15.999">
          <path
            class="aback"
            d="M11,16a1,1,0,0,1,0-2h3V11a1,1,0,0,1,2,0v4a1,1,0,0,1-1,1ZM5,13a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h6a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2Zm0-2h6V5H5ZM0,5V1A1,1,0,0,1,1,0H5A1,1,0,0,1,5,2H2V5A1,1,0,0,1,0,5Z"
          />
        </svg>
      </div>
      <div class="flex items-center">
        <div class="mx-4 cursor-pointer">
          <svg width="17.5" height="12" viewBox="0 0 17.5 12">
            <path
              class="aback"
              d="M11,18V6L2.5,12Zm.5-6L20,18V6Z"
              transform="translate(-2.5 -6)"
            />
          </svg>
        </div>
        <div class="mx-4 cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              class="apause"
              d="M9,16h2V8H9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Zm1-4h2V8H13Z"
              transform="translate(-2 -2)"
            />
          </svg>
        </div>
        <div class="mx-4 cursor-pointer">
          <svg width="17.5" height="12" viewBox="0 0 17.5 12">
            <path
              class="aforward"
              d="M4,18l8.5-6L4,6ZM13,6V18l8.5-6Z"
              transform="translate(-4 -6)"
            />
          </svg>
        </div>
      </div>
      <div class="cursor-pointer">
        <svg width="13" height="12" viewBox="0 0 13 12">
          <path
            class="avolume"
            d="M5.848,11.635,3.523,10H2A2,2,0,0,1,0,8V4A2,2,0,0,1,2,2H3.394L5.891.336A2,2,0,0,1,9,2v8a2,2,0,0,1-3.152,1.635ZM2,8H4.155L7,10V2L4,4H2Zm8.54-.05L10.514,7.9a.949.949,0,0,1,.161-1.167,1,1,0,0,0,.005-1.467A.954.954,0,0,1,10.519,4.1l.027-.047a.966.966,0,0,1,1.469-.269,2.985,2.985,0,0,1-.009,4.439.9.9,0,0,1-.6.229A1,1,0,0,1,10.54,7.949Z"
          />
        </svg>
      </div>
    </div>
  </div>
)};

export default expanded;
