import React, {useEffect, useReducer} from 'react';
import ListItem from './list_Item';
import CardItem from './card_Item';
import SortReducer from '../../Reducer/sortReducer';

const style = {
<<<<<<< HEAD
  card: ' flex items-center',
=======
<<<<<<< Updated upstream
  card: ' flex items-center'
}
=======
  card: 'flex items-center',
  list: 'block',
>>>>>>> feat/play
};
const INITIAL_STATE = [
  {
    Image: '',
    Title: '',
    Author: '',
    Stars: 0,
  },
];
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> feat/play

// DONE: Manuplate the state passed
const Items = ({state, ori, sortBy}) => {
  const [, sort_Dispatcher] = useReducer(SortReducer, INITIAL_STATE);
  let audios = [];

  useEffect(() => {
    sort_Dispatcher({type: sortBy.toUpperCase(), value: state});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);
  

  if (ori === 'Card') {
    for (let i = 0; i < state.length; i++) {
      audios.push(<CardItem state={state[i]} />);
    }
  } else {
    for (let i = 0; i < state.length; i++) {
      audios.push(<ListItem state={state[i]} index={i} />);
    }
  }

  // TODO: Here a grid like class must be present
  return (
    <div class="body ml-4 mt-6 border mr-3">
<<<<<<< HEAD
      <div className={ori === 'Card' ? style.card : ''}>{audios}</div>
=======
<<<<<<< Updated upstream
      <div className={ori === "Card"? style.card:''} >{audios}</div>
=======
      <div className={ori === 'Card' ? style.card : style.list}>{audios}</div>
>>>>>>> Stashed changes
>>>>>>> feat/play
    </div>
  );
};

export default Items;
