import React, {useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {ALL_PLAYLISTS} from '../../Graphql/query';
import AddPlaylistSVG from './svg/addplaylist.svg';
import {MenuLink, Menu} from '../menu/menuLink';
import Loading from '../../Views/loading/loading';
import {AuthContext} from '../../Context/authContext';
import ErrorPage from '../error/error';

export default function ListPlaylist() {
  const context = useContext(AuthContext);

  const {loading, error, data} = useQuery(ALL_PLAYLISTS, {
    variables: {uid: context.user.UserId.toString()},
    skip: context.user === null,
  });

  if (!context.user) {
    console.log('User has not signed in');
    return (
      <div class="mt-32 bg-gray-100">
        <ErrorPage status="401" />
      </div>
    );
  }

  if (error) {
    console.log('Error in the Playlist ', error);
  }

  if (loading) {
    return (
      <div class="float-right">
        <Loading />
      </div>
    );
  }

  if (!data || data.all_Playlists.length === 0) {
    return null;
  }

  return (
    <div>
      {data.all_Playlists.map((play) => (
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
          <img src={AddPlaylistSVG} alt="AddPlaylistSVG" />
        </Menu>
      </MenuLink>
    </div>
  );
}
