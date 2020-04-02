import React, {useEffect, useState, useReducer} from 'react';
import FilterBoard from './filter/filterBoard';
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
const INITIAL_ORIENTATION = 'Card';

// DONE: Use UseReducers to manupate change in the Items list
const SelectionBoard = () => {
  const [filteredState, filter_Dispatcher] = useReducer(
    FilterReducer,
    INITIAL_STATE
  );
  const [orentation, SetOrentation] = useState(INITIAL_ORIENTATION);
  const [sortBy, setSortBy] = useState('Sort');

  // ON FIRST RENDER DISPATCH TO GET ALL THE AUDIOS ONCE
  useEffect(() => {
    filter_Dispatcher({type: 'ALL'});
  }, []);
  console.log('Filtered State', filteredState);
;

  return (
    <div class="footer bord ml-6">
      <FilterBoard
        fil_dispatch={filter_Dispatcher}
        ori={orentation}
        setOri={SetOrentation}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Items
        state={filteredState}
        sortBy={sortBy}
        ori={orentation}
      />
    </div>
  );
};

export default SelectionBoard;
