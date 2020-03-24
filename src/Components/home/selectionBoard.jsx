import React, {useEffect, useReducer} from 'react';
import FilterBoard from './filterBoard';
import FilterReducer from '../../Reducer/filterReducer';

const INITIAL_STATE = {
  Image: '',
  Title: '',
  Author: '',
  Stars: 0,
};

// DONE: Use UseReducers to manupate change in the Items list
const SelectionBoard = () => {
  const [state, dispatch] = useReducer(FilterReducer, INITIAL_STATE);

  // ON FIRST RENDER DISPATCH TO GET ALL THE AUDIOS ONCE
  useEffect(() => {
    dispatch({type: 'ALL'});
  },[]);

  return (
    <div class="footer bord ml-6">
      <FilterBoard dispatch={dispatch} />
      <Items state={state} />
    </div>
  );
};

// DONE: Manuplate the state passed
const Items = ({state}) => {

  let audios = [];
  for (let i = 0; i < state.length; i++) {
    audios.push(<Item state={state[i]} />);
  }

  // TODO: Here a grid like class must be present
  return (
    <div class="body ml-4 mt-6 border mr-3">
      <div class="m-2 flex items-center">{audios}</div>
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

const Item = ({state}) => {
  let stars = [];
  for (let i = 0; i < state.Stars; i++) {
    stars.push(<Star />);
  }
  return (
    <div class="mx-2 rounded-lg w-1/4 px-6 zoom-8 py-4 bg-white flex">
      <div class="w-1/2 cursor-pointer -mt-8">
        <img class="rounded m-auto" src={state.Image} alt="" />
      </div>
      <div class="w-1/2  pl-2">
        <div class="font-helvetica-rounded py-1 cursor-pointer">
          {state.Title}
        </div>
        <div class="text-xs py-1 font-medium cursor-pointer hover:underline">
          By {state.Author}
        </div>
        <div class="text-xxs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
        </div>
        <div class="py-1 flex">{stars}</div>
      </div>
    </div>
  );
};

export default SelectionBoard;
