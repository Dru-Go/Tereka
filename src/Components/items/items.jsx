import React from 'react';
import ListItem from './list_Item';
import CardItem from './card_Item';

const style = {
<<<<<<< Updated upstream
  card: ' flex items-center'
}
=======
  card: 'flex items-center',
  list: 'block',
};
const INITIAL_STATE = [
  {
    Image: '',
    Title: '',
    Author: '',
    Stars: 0,
  },
];
>>>>>>> Stashed changes

// DONE: Manuplate the state passed
const Items = ({state, ori}) => {
  let audios = [];
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
<<<<<<< Updated upstream
      <div className={ori === "Card"? style.card:''} >{audios}</div>
=======
      <div className={ori === 'Card' ? style.card : style.list}>{audios}</div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Items;
