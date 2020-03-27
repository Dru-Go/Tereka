import React from 'react';
import ListItem from './list_Item';
import CardItem from './card_Item';

const style = {
  card: ' flex items-center'
}

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
      <div className={ori === "Card"? style.card:''} >{audios}</div>
    </div>
  );
};

export default Items;
