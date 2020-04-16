import React from 'react';
import {Link} from 'react-router-dom';

const CardItem = ({state}) => {
  let stars = [];
  for (let i = 0; i < state.Likes/6; i++) {
    stars.push(<Star />);
  }
  return (
    <div class="mx-2 rounded-lg w-1/4 px-6 zoom-8 py-4 bg-white flex">
      <div class="w-1/2 cursor-pointer -mt-8">
        <img class="rounded m-auto" src={state.ImageURL} alt="" />
      </div>
      <div class="w-1/2  pl-2">
        <div class="font-helvetica-rounded py-1 cursor-pointer">
          {state.Title}
        </div>
        <Link to={'/details/2345'}>
          <div class="text-xs py-1 font-medium cursor-pointer hover:underline">
            By {state.Author}
          </div>
        </Link>
        <div class="text-xxs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
        </div>
        <div class="py-1 flex">{stars}</div>
      </div>
    </div>
  );
};

const Star = () => (
  <div class="mx-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.162"
      height="11.567"
      viewBox="0 0 12.162 11.567"
    >
      <path
        class="aStar"
        d="M8.081,11.3l3.758,2.271-1-4.28,3.32-2.88L9.79,6.036,8.081,2,6.372,6.036,2,6.408l3.32,2.88-1,4.28Z"
        transform="translate(-2 -2)"
      />
    </svg>
  </div>
);

export default CardItem;
