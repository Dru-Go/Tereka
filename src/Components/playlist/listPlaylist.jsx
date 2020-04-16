import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ALL_PLAYLISTS} from '../../Graphql/query';
import {MenuLink, Menu} from '../menu/menuLink';

const styles = {
  SvgClass: 'inActiveSVG ',
};

export default function ListPlaylist() {
  const {loading, error, data} = useQuery(ALL_PLAYLISTS, {
    variables: {uid: 'hash1'},
  });

  if (error) {
    console.log('Error in the Playlist ', error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || data.all_Playlists.length === 0) {
    return null;
  }

  return (
    <div>
      {data.all_Playlists.map(play => (
        <Playlist name={play.Name} id={play.Id} />
      ))}
    </div>
  );
}

// Playlist represents each playlist name on the sidebar
function Playlist({id, name}) {
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
}
