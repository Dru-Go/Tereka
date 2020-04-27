import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import SidePlay from '../mini play/sidePlay';
import {MenuLink, Menu} from '../menu/menuLink';
import AddPlaylist from '../playlist/addPlaylist';
import ListPlaylist from '../playlist/listPlaylist';
import {AuthContext} from '../../Context/authContext';
// SVGS
import trendingSVG from './svg/trending.svg';
import discoverSVG from './svg/discover.svg';
import categoriesSVG from './svg/categories.svg';
import listeningSVG from './svg/listening.svg';
import followingSVG from './svg/following.svg';
import favoritesSVG from './svg/favorites.svg';
import suggestionSVG from './svg/suggestion.svg';
import recentSVG from './svg/recent.svg';
import playlistSVG from './svg/playlister.svg';

const SideNav = () => {
  const filters = [
    '/business',
    '/history',
    '/economy',
    '/fiction',
    '/fantacy',
    '/philosopy',
  ];
  const {user} = useContext(AuthContext);

  const [toggleAddPlaylist, setToggleAddPlaylist] = useState(false);

  const addPlaylist = () => {
    setToggleAddPlaylist(true);
  };
  return (
    <div>
      <div class="uppercase  pl-12 pb-2 text-sm color-text-menu">Browse</div>
      <div class="pl-16">
        <MenuLink to="/trending" exact={true}>
          <Menu title={'Top Audio Books'}>
            <img src={trendingSVG} alt="trendingSVG" />
          </Menu>
        </MenuLink>
        {/* Here We added some filters to still be active as the filters are linked */}
        <MenuLink to={['/', ...filters]} exact={true}>
          {/* Issue Some what fixed with adding another Link tag  */}
          <Link to="/">
            <Menu title={'Discover'}>
              <img src={discoverSVG} alt="discoverSVG" />
            </Menu>
          </Link>
        </MenuLink>
        <MenuLink to="/categories" exact={true}>
          <Menu title={'Categories'}>
            <img src={categoriesSVG} alt="categoriesSVG" />
          </Menu>
        </MenuLink>
      </div>
      <div class="mt-2">
        <div class="uppercase  pl-12 pb-2 text-sm color-text-menu">
          your audios
        </div>
        <div class="pl-16 text-sm">
          <MenuLink to="/play/:id" exact={true}>
            <Menu title={'Now Listening'}>
              <img src={listeningSVG} alt="listeningSVG" />
            </Menu>
          </MenuLink>
          {user ? (
            <>
              {/* <MenuLink to="/following" exact={true}>
                <Menu title={'Following'}>
                  <img src={followingSVG} alt="followingSVG" />
                </Menu>
              </MenuLink> */}

              <MenuLink to="/favorites" exact={true}>
                <Menu title={'Favorites'}>
                  <img src={favoritesSVG} alt="favoritesSVG" />
                </Menu>
              </MenuLink>
            </>
          ) : null}
          <MenuLink to="/suggestions" exact={true}>
            <Menu title={'Requests'}>
              <img src={suggestionSVG} alt="suggestionSVG" />
            </Menu>
          </MenuLink>
          {user ? (
            <MenuLink to="/recent" exact={true}>
              <Menu title={'Recent'}>
                <img src={recentSVG} alt="recentSVG" />
              </Menu>
            </MenuLink>
          ) : null}
        </div>
      </div>
      {/* TODO Change back this set */}
      {user ? (
        <div class="mt-2">
          <div class="flex items-center ">
            <div class="uppercase  pl-12 pb-2 text-sm color-text-menu">
              playlist
            </div>
            <div
              class="ml-20 p-3 cursor-pointer rounded-full scaled"
              onClick={addPlaylist}
            >
              <img src={playlistSVG} alt="playlistSVG" />
            </div>
          </div>

          {/* Here the add Playlist form  */}
          <AddPlaylist
            active={toggleAddPlaylist}
            setActive={setToggleAddPlaylist}
          />
          {/* Here the list of playlist */}
          <ListPlaylist />

          <SidePlay />
        </div>
      ) : null}
    </div>
  );
};

export default SideNav;
