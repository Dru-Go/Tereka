import React, {useEffect, useState,useReducer} from 'react';
import FilterBoard from './filterBoard';
import FilterReducer from '../../Reducer/filterReducer';
import Items from '../items/items';

const INITIAL_STATE = [
  {
    Image: '',
    Title: '',
    Author: '',
    Stars: 0,
  },
];
const INITIAL_ORIENTATION =  "Card" ;

// DONE: Use UseReducers to manupate change in the Items list
const SelectionBoard = () => {
  const [filteredState, filter_Dispatcher] = useReducer(FilterReducer, INITIAL_STATE);
  const [orentation, SetOrentation] = useState(INITIAL_ORIENTATION);

  // ON FIRST RENDER DISPATCH TO GET ALL THE AUDIOS ONCE
  useEffect(() => {
    filter_Dispatcher({type: 'ALL'});
  }, []);

  console.log(filteredState);

  return (
    <div class="footer bord ml-6">
      <FilterBoard fil_dispatch={filter_Dispatcher} ori={orentation} setOri={SetOrentation} />
      <Items state={filteredState} ori={orentation} />
    </div>
  );
};

export default SelectionBoard;
