import React from 'react';
import useAudioList from '../../Hooks/useAudioList';
import ListItem from './list_Item';
import CardItem from './card_Item';
import Sad from '../error/sad';
import Loading from '../../Views/loading/loading'
import '../../responsive_grid.css'
const style = {
  card: 'grid grid-cols-3 gap-5 ',
  list: 'block',
  title: 'text-sm m-4 font-medium text-gray-500',
  body: 'body grid mt-6 mr-3',
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
    return (
      <div>
        <Loading/>
      </div>
    );
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
