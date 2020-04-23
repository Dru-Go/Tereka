import React from 'react';
import Carousel from 'react-grid-carousel';
import StarSVG from './svg/stars.svg';

// TODO: Add Conditions to only Displayed in the home page
const midPromo = () => (
  <div class="mid ">
    <div class="ml-4 mt-6 mb-10 bg-gray-200">
      <Carousel cols={3} rows={1} gap={2}>
        <Carousel.Item>
          <Item />
        </Carousel.Item>
        <Carousel.Item>
          <Item />
        </Carousel.Item>
        <Carousel.Item>
          <Item />
        </Carousel.Item>
        <Carousel.Item>
          <Item />
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default midPromo;

const Item = () => (
  <div class="m-2 flex items-center">
    <div class="mx-2 zoom-8 border  rounded-lg  px-4 py-2 flex">
      <div class="w-1/2 cursor-pointer -mt-8">
        <img
          class="rounded m-auto hover:shadow"
          src="./names for the sea.png"
          alt=""
        />
      </div>
      <div class="w-1/2  pl-2">
        <div class="font-helvetica-rounded py-1 cursor-pointer">
          Names of the sea
        </div>
        <div class="text-sm py-1 font-medium cursor-pointer hover:underline">
          By Marry Bay
        </div>
        <div class="text-xs py-1 text-gray-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
          <span class="text-blue-400 cursor-pointer hover:underline">More</span>
        </div>
        <div class="py-1 flex">
          <img src={StarSVG} alt="starSVG" />
          <img src={StarSVG} alt="starSVG" />
          <img src={StarSVG} alt="starSVG" />
          <img src={StarSVG} alt="starSVG" />
        </div>
      </div>
    </div>
  </div>
);
