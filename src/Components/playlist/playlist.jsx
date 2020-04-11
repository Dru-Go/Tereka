import React, {useState, useEffect, useReducer} from 'react';
import {MenuLink, Menu} from '../menu/menuLink';
import PlaylistReducer from '../../Reducer/playlistReducer';

const styles = {
  visble: 'pl-16 text-sm',
  inVisble: 'hidden',
  SvgClass: 'inActiveSVG ',
};

const INITIAL_STATE = [
  {
    id: '',
    name: '',
    audios: [],
  },
];

// Adds to the list of available playlists
const AddPlaylist = ({active, setActive}) => {
  const [, Dispatcher] = useReducer(PlaylistReducer, INITIAL_STATE);
  const [name, setName] = useState('');
  const handleClick = () => {
    // // TODO handle dispatching a new playlist event
    console.log('Name is', name);
    Dispatcher({type: 'NEW_PLAYLIST', value: name});
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

// Playlist represents each playlist name on the sidebar
const Playlist = ({id, name}) => {
  return (
    <div class="pl-16 text-sm">
      <MenuLink to={'/playlist/' + id} exact={true}>
        <Menu title={name}>
          <svg width="10.727" height="10.727" viewBox="0 0 10.727 10.727">
            <path
              className={styles.SvgClass}
              d="M8.023,14.727H10.7V4H8.023ZM4,14.727H6.682V9.363H4Zm8.045-7.375v7.375h2.682V7.352Z"
              transform="translate(-4 -4)"
            />
          </svg>
        </Menu>
      </MenuLink>
    </div>
  );
};

// TODO lists all the available playlists
const ListPlaylist = () => {
  const [playlistState, playlistDispatcher] = useReducer(
    PlaylistReducer,
    INITIAL_STATE
  );

  useEffect(() => {
    playlistDispatcher({type: 'ALL_PLAYLIST'});
  }, []);

  console.log('List Playlist State ', playlistState);
  return (
    <div>
      {playlistState.length <= 1
        ? null
        : playlistState.map(play => <Playlist name={play.name} id={play.id} />)}
    </div>
  );
};

export {AddPlaylist, ListPlaylist};
