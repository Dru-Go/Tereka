import React, {useState, useEffect, useReducer} from 'react';
import FilterReducer from '../../Reducer/filterReducer';
import Items from '../items/items';
import FilterBoard from '../home/filter/filterBoard';

const INITIAL_STATE = {
  Image: '',
  Title: '',
  Author: '',
  Narrator: '',
  Likes: 0,
  Stars: 0,
  Discription:''
};

const Trending = () => {
  const [filteredState, filter_Dispatcher] = useReducer(
    FilterReducer,
    INITIAL_STATE
  );
  const [orentation, SetOrentation] = useState('Card');
  // ON FIRST RENDER DISPATCH TO GET ALL THE AUDIOS ONCE
  useEffect(() => {
    filter_Dispatcher({type: 'TRENDING'});
  }, []);

  return (
    <div>
      <div class="text-lg ml-10 font-medium text-gray-500">Trending</div>
      <div class="mx-10">
        <FilterBoard
          fil_dispatch={filter_Dispatcher}
          ori={orentation}
          setOri={SetOrentation}
        />
      </div>

      <div class="mt-6 mx-6">
        <Items state={filteredState} ori={orentation} />
      </div>
    </div>
  );
};

export default Trending;
