import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {ALL_PLAYLISTS} from '../../../Graphql/query';
import Loading from '../../../Views/loading/loading';
import List from './listPlaylists';

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
    <div class="p-4 cursor-pointer hover:text-green-500 text-green-300 rounded-full" onClick={handleClick}>
      <svg width="25" height="23" class="fill-current" viewBox="0 0 19.685 25.309">
        <path
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

  const [LoadPlaylists, {loading, error, data}] = useLazyQuery(ALL_PLAYLISTS);

  useEffect(() => {
    if (active) {
      LoadPlaylists({
        variables: {uid: 'hash1'},
      });
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
            audioID={audioID}
          />
        ))}
      </ul>
    </>
  );
};

export default AddToPlaylist;
