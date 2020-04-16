import React from 'react';
import useAudioList from '../../Hooks/useAudioList';
import ListItem from './list_Item';
import CardItem from './card_Item';
import Sad from '../error/sad';

const style = {
  card: 'flex items-center',
  list: 'block',
  title: 'text-lg m-4 font-medium text-gray-500',
  body: 'body ml-4 mt-6 border mr-3',
};

const Items = ({ori, sortBy, filter}) => {
  const {loading, error, audios, state} = useAudioList(sortBy, filter);

  if (state) {
    console.log('Current State is ', state);
    if (ori === 'Card') {
      for (let i = 0; i < state.length; i++) {
        audios.push(<CardItem state={state[i]} />);
      }
    } else {
      for (let i = 0; i < state.length; i++) {
        audios.push(<ListItem state={state[i]} index={i} />);
      }
    }
  }

  if (error) {
    return <Sad />;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // TODO: Here a grid like class must be present
  return (
    <>
      <div className={style.title}>{filter}</div>
      <div className={style.body}>
        <div className={ori === 'Card' ? style.card : style.list}>{audios}</div>
      </div>
    </>
  );
};

export default Items;
