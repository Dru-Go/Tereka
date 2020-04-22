import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {PLAYLISTS_AUDIOS} from '../../Graphql/query';
import Loading from '../../Views/loading/loading';
import Card from '../items/card_Item';
import Sad from '../error/sad';

// lists all the audios in the selcted playlist
const ListAudios = ({match}) => {
  // // TODO fetch which playlist is selected from the link
  const {loading, error, data} = useQuery(PLAYLISTS_AUDIOS, {
    variables: {uid: 'hash1', pid: match.params.id},
  });

  if (loading) {
    return <Loading />;
  }

  if (!data || data.playlist_Audios.length === 0) {
    return <Sad />;
  }

  if (error) {
    console.log(error);
    return <Sad />;
  }


  // // TODO Dispatch the playlist id and fetch the audios
  return (
    <div>
      <div>
        <div class="text-xl ml-6 font-helvetica-rounded text-gray-800">
          Audios
        </div>
        <div class="flex mt-8 items-center">
          {data.playlist_Audios.map(audio => (
            <Card state={audio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListAudios;
