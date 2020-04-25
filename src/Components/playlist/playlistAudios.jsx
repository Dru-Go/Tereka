import React, {useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {PLAYLISTS_AUDIOS} from '../../Graphql/query';
import {AuthContext} from '../../Context/authContext';
import {Redirect} from 'react-router-dom';
import Loading from '../../Views/loading/loading';
import Card from '../items/card_Item';
import Sad from '../error/sad';

// lists all the audios in the selcted playlist
const ListAudios = ({match}) => {
  const context = useContext(AuthContext);

  // // TODO fetch which playlist is selected from the link
  const {loading, error, data} = useQuery(PLAYLISTS_AUDIOS, {
    variables: {uid: context.user.UserId.toString(), pid: match.params.id},
    skip: context.user === null,
  });

  if (!context.user) {
    console.log('User has not signed in');
    return <Redirect to="/signin" />;
  }

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
          {data.playlist_Audios.map((audio) => (
            <Card state={audio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListAudios;
