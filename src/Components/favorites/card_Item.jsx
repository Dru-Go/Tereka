import React from 'react';
import {Link} from 'react-router-dom';

const CardItem = ({state, toggleRemove}) => {
  let stars = [];
  for (let i = 0; i < state.Likes / 6; i++) {
    stars.push(<Star />);
  }
  return (
    <Link to={'/play/' + state.Id}>
      <div class="mx-2 rounded-lg px-6 zoom-8 py-4 bg-white flex">
        <div class="w-1/2 cursor-pointer -mt-8">
          <img class="rounded m-auto h-56" src={state.ImageURL} alt="" />
        </div>
        <div class="w-1/2  pl-2">
          <div class="font-helvetica-rounded py-1 cursor-pointer">
            {state.Title}
          </div>
          <Link to={'/details/hash1'}>
            <div class="text-xs py-1 font-medium cursor-pointer hover:underline">
              By {state.Author}
            </div>
          </Link>
          <Link to={'/details/hash2'}>
            <div class="text-xs py-1 font-medium cursor-pointer hover:underline">
              Narrated By {state.Narrator}
            </div>
          </Link>

          <div class="py-1 flex">{stars}</div>
        </div>
        {toggleRemove ? <Remove state={state} /> : null}
      </div>
    </Link>
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

const Remove = ({state}) => {
  const handleDelete = () => {};

  return (
    <div
      class="text-center p-3 border-b rounded-full h-10 bg-gray-200 hover:bg-red-300 cursor-pointer"
      onClick={handleDelete}
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path
          class="a_remove"
          d="M4,16a2,2,0,0,1-2-2V5H1A1,1,0,1,1,1,3H5V2A2,2,0,0,1,7,0H9a2,2,0,0,1,2,2V3h4a1,1,0,0,1,0,2H14v9a2,2,0,0,1-2,2Zm0-2h8V5H4ZM7,3H9V2H7ZM7,9A1,1,0,0,1,7,7H9A1,1,0,1,1,9,9Z"
        />
      </svg>
    </div>
  );
};

export default CardItem;
