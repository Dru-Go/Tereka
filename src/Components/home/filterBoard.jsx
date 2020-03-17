import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

const FilterBoard = ({dispatch}) => {
  return (
    <div class=" flex items-center justify-between mt-2  mr-3 border rounded-lg header">
      <div class="flex cursor-pointer p-2 items-baseline">
        <div class=" text-gray-500 text-xs font-medium uppercase">Popular</div>
        <div class="ml-1">
          <svg width="11" height="7.41" viewBox="0 0 12 7.41">
            <path
              class="a_dropdown"
              d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
              transform="translate(-6 -8.59)"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center text-gray-500 text-xs font-medium">
        <Filter value="Business" dispatch={dispatch} />
        <Filter value="History" dispatch={dispatch} />
        <Filter value="Economy" dispatch={dispatch} />
        <Filter value="Fiction" dispatch={dispatch} />
        <Filter value="Fantacy" dispatch={dispatch} />
        <Filter value="Philosopy" dispatch={dispatch} />
      </div>
    </div>
  );
};

const Filter = ({value, dispatch}) => {
  const handle = window.location.pathname;
  const path = '/' + value.toLowerCase();

  // TODO: Fix Multiple Re-renders 
  // console.log('Path is ', handle, 'value is', path);

  const styles = {
    active:
      'px-4 cursor-pointer hover:text-gray-800 hover:font-bold underline text-gray-800 font-bold',
    Inactive: 'px-4 cursor-pointer hover:text-gray-800 hover:font-bold',
  };

  useEffect(() => {
    if (handle === path) {
      dispatch({type: value});
    }
  })

  return (
    <Link to={path}>
      <div className={handle === path ? styles.active : styles.Inactive}>
        {value}
      </div>
    </Link>
  );
};

export default FilterBoard;
