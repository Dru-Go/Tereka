import React, {useEffect, useReducer} from 'react';
import PlaylistReducer from '../../Reducer/playlistReducer';
import Card from '../items/card_Item';
import Sad from '../error/sad';

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

// TODO lists all the audios in the selcted playlist
const ListAudios = ({match}) => {
  // TODO tries to fetch which playlist is selected from the link
  const [State, Dispatcher] = useReducer(PlaylistReducer, INITIAL_STATE);

  useEffect(() => {
    Dispatcher({type: 'ALL_AUDIO', value: match.params.id});
  }, [match.params.id]);

  // TODO Dispatch the playlist id and fetch the audios
  return (
    <div>
      {State ? (
        <div>
          <div class="text-xl ml-6 font-helvetica-rounded text-gray-800">
            Audios
          </div>
          <div class="flex mt-8 items-center">
            {State.map(audio => (
              <Card state={audio} />
            ))}
          </div>
        </div>
      ) : (
        <Sad />
      )}
    </div>
  );
};

export default ListAudios;
