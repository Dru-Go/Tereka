import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {ALL_PLAYLISTS} from '../../../Graphql/query';
import Loading from '../../../Views/loading/loading';
import List from './listPlaylists'

const styles = {
  active:
    'absolute font-normal bg-green-200 mt-3 shadow overflow-hidden rounded w-48 border py-1 right-0 z-20',
  hidden: 'hidden',
};

const AddToPlaylist = ({audioID}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div class="p-4 cursor-pointer color1 rounded-full" onClick={handleClick}>
      <svg width="25" height="23" viewBox="0 0 19.685 25.309">
        <path
          class="fill-current"
          d="M21.872,3H7.812a2.808,2.808,0,0,0-2.8,2.812L5,28.309l9.842-4.218,9.842,4.218V5.812A2.82,2.82,0,0,0,21.872,3Zm0,21.091-7.03-3.065-7.03,3.065V5.812h14.06Z"
          transform="translate(-5 -3)"
        />
      </svg>
      <Add active={active} setActive={setActive} audioID={audioID} />
    </div>
  );
};

const Add = ({active, setActive, audioID}) => {
  const [selected, setSelected] = useState('');

  const [LoadPlaylists, {loading, error, data}] = useLazyQuery(ALL_PLAYLISTS, {
    variables: {uid: 'hash1'},
  });

  useEffect(() => {
    if (active) {
      LoadPlaylists();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (loading || error) {
    console.log(error);
    return (
      <div class="float-right">
        <Loading />
      </div>
    );
  }

  if (!data || data.all_Playlists.length === 0) {
    console.log(data);
    return null;
  }

  console.log('Selected Playlist is ', selected);
  return (
    <>
      <ul className={active ? styles.active : styles.hidden}>
        {data.all_Playlists.map(playlist => (
          <List
            setActive={setActive}
            setSelected={setSelected}
            title={playlist.Name}
            Id={playlist.Id}
            Svg={svg}
            audioID={audioID}
          />
        ))}
      </ul>
    </>
  );
};

const svg = () => {
	return (
	  <div class="text-green-800">
		<svg class="fill-current" width="16" height="14" viewBox="0 0 16 14">
		  <path d="M14,2H9.236l-.447-.895A2,2,0,0,0,7,0H2A2,2,0,0,0,0,2V12a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V4A2,2,0,0,0,14,2ZM11,5.05V7.5a.5.5,0,0,1-1,0V4h1ZM14,12H2V2H7L8,4V7.5a2.5,2.5,0,0,0,2,2.45,2.526,2.526,0,0,0,1,0A2.5,2.5,0,0,0,13,7.5V4h1Z" />
		</svg>
	  </div>
	);
  };
  

export default AddToPlaylist;
