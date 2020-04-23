import React from 'react';
import {Link} from 'react-router-dom';

const CardItem = ({state}) => {
  return (
    <>
      <div class="mx-2 rounded-lg  px-6 zoom-8 cursor-pointer py-4 bg-white flex">
        <div class="w-1/2 cursor-pointer -mt-8">
          <Link to={'/play/' + state.Id}>
            <img class="rounded m-auto h-56" src={state.ImageURL} alt="" />
          </Link>
        </div>
        <div class="w-1/2  pl-2">
          <Link to={'/play/' + state.Id}>
            <div class="font-helvetica-rounded py-1 cursor-pointer">
              {state.Title}
            </div>
          </Link>
          <Link to={'/details/2345'}>
            <div class="text-xs py-1 font-medium cursor-pointer">
              By{' '}
              <span class="font-medium hover:underline hover:font-bold ">
                {state.Author}
              </span>
            </div>
          </Link>
          <Link to={'/details/2345'}>
            <div class="text-xs py-1 font-medium cursor-pointer ">
              Narrated By:{' '}
              <span class="font-medium hover:underline hover:font-bold ">
                {state.Narrator}
              </span>
            </div>
          </Link>
          <div class="py-1 text-sm mt-2">
            Likes: <span> {state.Likes}</span>{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
