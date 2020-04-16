import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';

import {NEW_PLAYLIST} from '../../Graphql/mutations';
import {ALL_PLAYLISTS} from '../../Graphql/query';

const styles = {
  visble: 'pl-16 text-sm',
  inVisble: 'hidden',
};

// // Adds to the list of available playlists
const AddPlaylist = ({active, setActive}) => {
  const [name, setName] = useState('');
  const [NewPlaylist] = useMutation(NEW_PLAYLIST, {
    update(cache, {data: {NewPlaylist}}) {
      console.log('This is the new Playlist ', NewPlaylist);

      const data = cache.readQuery({
        query: ALL_PLAYLISTS,
        variables: {uid: 'hash1'},
      });

      console.log('Cached Query is ', data.all_Playlists);

      cache.writeQuery({
        query: ALL_PLAYLISTS,
        variables: {uid: 'hash1'},
        data: {all_Playlists: [...data.all_Playlists, NewPlaylist]},
      });
    },
  });

  const handleClick = () => {
    // // TODO handle dispatching a new playlist event
    NewPlaylist({
      variables: {uid: 'hash1', name: name},
    });
    setActive(!active);
  };

  return (
    <div className={active ? styles.visble : styles.inVisble}>
      <div class=" px-4 py-2 flex  items-center  cursor-pointer">
        <div class="pr-2 border-b border-gray-500 w-2/3 text-sm text-gray-500">
          <input
            class="bg-transparent w-full outline-none text-sm "
            type="text"
            placeholder="Playlist Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div class="rounded-full p-2 hover:shadow" onClick={handleClick}>
          <svg width="12" height="12" viewBox="0 0 16 16">
            <path
              class="aplaylist1"
              d="M7,9v6a1,1,0,0,0,2,0V9h6a1,1,0,0,0,0-2H9V1A1,1,0,0,0,7,1V7H1A1,1,0,0,0,1,9Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AddPlaylist;
