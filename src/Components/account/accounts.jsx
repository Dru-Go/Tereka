import React from 'react';
import TickSVG from './tick.svg';

const Accounts = () => (
  <div class="flex items-start justify-around mx-20 mt-20">
    <div>
      <div class="rounded-full w-40 h-40 bg-white"></div>
      <div class="rounded-lg font-medium uppercase bg-transparent hover:bg-green-200 text-green-800 border mt-10 cursor-pointer px-2 py-1 text-xs text-center">
        Change
      </div>
    </div>
    <div>
      <div class="flex mt-4 items-center">
        <div class="text-xs text-gray-800 uppercase ">Name</div>
        <div class="border-b w-64 px-2 mx-2">
          <input
            class="w-full bg-transparent focus:outline-none "
            type="text"
            name=""
            id=""
          />
        </div>
        <div class="text-green-400">
          <img class="w-3 h-3 fill-current" src={TickSVG} alt="TickSVG" />
        </div>
      </div>
      <div class="flex mt-4 items-center">
        <div class="text-xs text-gray-800 uppercase ">email</div>
        <div class="border-b w-64 px-2 mx-2">
          <input
            class="w-full bg-transparent focus:outline-none "
            type="text"
          />
        </div>
        <div class="text-green-400">
          <img class="w-3 h-3 fill-current" src={TickSVG} alt="TickSVG" />
        </div>
      </div>

      <div class="flex mt-4 items-center">
        <div class="text-xs text-gray-800 uppercase ">phone</div>
        <div class="border-b w-64 px-2 mx-2">
          <input
            class="w-full bg-transparent focus:outline-none "
            type="text"
          />
        </div>
        <div class="text-green-400">
          <img class="w-3 h-3 fill-current" src={TickSVG} alt="TickSVG" />
        </div>
      </div>
      <div class="rounded-lg font-medium uppercase bg-transparent hover:bg-green-200 text-green-800 border mt-10 cursor-pointer px-2 py-1 text-xs text-center">
        save
      </div>
    </div>
  </div>
);

export default Accounts;
