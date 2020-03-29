import React, {useEffect, useReducer} from 'react';
import FavoriteReducer from '../../Reducer/favoriteReducer';
import Card from '../items/card_Item';

// TODO Remove Favorite
// TODO Select Operation
// TODO Sort By date of the added audio

const INITIAL_STATE = [
  {
    Image: '',
    Title: '',
    Author: '',
    Narrator: '',
    Likes: 0,
    Stars: 0,
    Duration: '',
  },
];

const Favorites = () => {
  const [fav_State, fav_Dispatcher] = useReducer(
    FavoriteReducer,
    INITIAL_STATE
  );

  console.log('Favorites State', fav_State);

  useEffect(() => {
    fav_Dispatcher({type: 'ALL', user_id: '123'});
  },[]);

  return (
    <>
      <div>
        <div class="text-xl ml-6 font-helvetica-rounded text-gray-800">
          Favorites
        </div>
        <div class="flex mt-8 items-center">
          {fav_State.map(state => (
            <>
              <Card state={state} />
              <Remove state={state} dispatch={fav_Dispatcher} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

// TODO
const Remove = ({state, dispatch}) => {
  const handleRemove = () => {
    dispatch({type: 'REMOVE', id: '1234', value: state.Title});
  };
  return (
    <div
      class="bg-red-200 hover:bg-red-300 rounded-lg p-2"
      onClick={handleRemove}
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

export default Favorites;
