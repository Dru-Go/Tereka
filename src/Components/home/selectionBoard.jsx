import React, { useState} from 'react';
import FilterBoard from './filter/filterBoard';
import Items from '../items/items';

// DONE: Use UseReducers to manupate change in the Items list
const SelectionBoard = () => {

  const [orentation, SetOrentation] = useState('Card');
  const [sortBy, setSortBy] = useState('Sort');
  const [filter, SetFilter] = useState('AUDIOS');
 
  return (
    <div class="footer bord ml-6">
      <FilterBoard
        fil_dispatch={SetFilter}
        ori={orentation}
        setOri={SetOrentation}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Items
        sortBy={sortBy}
        filter={filter}
        ori={orentation}
      />
    </div>
  );
};

export default SelectionBoard;
