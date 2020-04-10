// List Orientation
import React from 'react';

const listItem = ({state, index}) => {
  return (
    <div class="m-2 flex justify-between cursor-pointer py-3 border hover:shadow rounded  items-center ">
      <div class="flex items-center mx-4">
        <div class="mx-2 px-2 text-gray-900 text-sm">{index}</div>
        <div class="uppercase font-helvetica-rounded text-xs text-gray-600">
          {state.Title}
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-sm camelcase mx-16">
          Auther:
          <span class="text-green-500 text-xs ml-1 hover:underline">
            {state.Author}
          </span>
        </div>
        <div class="text-sm camelcase mx-16">
          Narrator:
          <span class="text-green-500 text-xs ml-1 hover:underline">
            {' '}
            {state.Narrator}
          </span>
        </div>
        <div class="flex items-center mx-20 cursor-pointer">
          <div>
            <svg class="w-4 h-4" viewBox="0 0 11.989 11">
              <path
                class="alove"
                d="M7.995,14l-.869-.791C4.038,10.409,2,8.563,2,6.3A3.265,3.265,0,0,1,5.3,3a3.59,3.59,0,0,1,2.7,1.253A3.59,3.59,0,0,1,10.692,3a3.265,3.265,0,0,1,3.3,3.3c0,2.266-2.038,4.112-5.125,6.918Z"
                transform="translate(-2 -3)"
              />
            </svg>
          </div>
          <div class="px-2 text-sm text-gray-800">{state.Likes}</div>
        </div>
        <div class=" text-sm text-gray-800">{state.Duration}</div>
      </div>
    </div>
  );
};

export default listItem;
