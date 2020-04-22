import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {PLAYLISTS_AUDIOS} from '../../../Graphql/query';
import {ADDTO_PLAYLIST} from '../../../Graphql/mutations';
import Loading from '../../../Views/loading/loading';


const List = ({setActive, title, Svg, Id, audioID}) => {
  const [AddToPlaylist, {loading, error}] = useMutation(ADDTO_PLAYLIST, {
    update(cache, {data: {AddToPlaylist}}) {
      const data = cache.readQuery({
        query: PLAYLISTS_AUDIOS,
        variables: {uid: 'hash1', pid: Id},
      });

      cache.writeQuery({
        query: PLAYLISTS_AUDIOS,
        variables: {uid: 'hash1', pid: Id},
        data: {playlist_Audios: [...data.playlist_Audios, AddToPlaylist]},
      });
    },
  });

  if (error) {
    console.log('Error adding to the Playlist', error);
    return null;
  }

  const handleClick = () => {
    console.log('Variables are Pid $1 and audioID $2', Id, audioID);
    AddToPlaylist({
      variables: {uid: 'hash1', pid: Id, audioID: audioID},
    });
    setActive(false);
  };

  return (
    <li class="hover:bg-green-300" onClick={handleClick}>
      <div class="flex items-center p-2 border-b">
        <Svg />
        <div class="ml-2 text-gray-700 font-medium text-sm">{title} </div>
        {loading ? <Loading /> : null}
      </div>
    </li>
  );
};

export default List