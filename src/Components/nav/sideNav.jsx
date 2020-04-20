import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import SidePlay from '../mini play/sidePlay';
import {MenuLink, Menu} from '../menu/menuLink';
import AddPlaylist from '../playlist/addPlaylist';
import ListPlaylist from '../playlist/listPlaylist';
import {AuthContext} from '../../Context/authContext';

const style = {
  activeStyle:
    ' px-4 py-2  hover:shadow menu-back selected shadow-lg   cursor-pointer text-gray-100  text-sm',
  activeSvgClass: 'ActiveSVG',
  InactiveSvgClass: 'inActiveSVG ',

  InactiveStyle:
    'px-4 py-2  hover:shadow color-text-menu cursor-pointer color-text-menu text-xs',
};

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
            <svg width="12.238" height="12.238" viewBox="0 0 10.238 10.238">
              <path
                className={style.InactiveSvgClass}
                d="M12.1,3H4.138A1.141,1.141,0,0,0,3,4.138V12.1a1.141,1.141,0,0,0,1.138,1.138H12.1A1.141,1.141,0,0,0,13.238,12.1V4.138A1.141,1.141,0,0,0,12.1,3ZM6.413,10.963H5.275V6.981H6.413Zm2.275,0H7.55V5.275H8.688Zm2.275,0H9.825V8.688h1.138Z"
                transform="translate(-3 -3)"
              />
            </svg>
          </Menu>
        </MenuLink>
        {/* Here We added some filters to still be active as the filters are linked */}
        <MenuLink to={['/', ...filters]} exact={true}>
          {/* Issue Some what fixed with adding another Link tag  */}
          <Link to="/">
            <Menu title={'Discover'}>
              <svg width="9" height="8.999" viewBox="0 0 9 8.999">
                <path
                  className={style.InactiveSvgClass}
                  d="M6.187,9A1.125,1.125,0,0,1,5.063,7.874V6.187A1.125,1.125,0,0,1,6.187,5.062H7.875A1.124,1.124,0,0,1,9,6.187V7.874A1.125,1.125,0,0,1,7.875,9Zm0-1.125H7.875V6.187H6.187ZM1.125,9A1.125,1.125,0,0,1,0,7.874V6.187A1.125,1.125,0,0,1,1.125,5.062H2.813A1.125,1.125,0,0,1,3.938,6.187V7.874A1.125,1.125,0,0,1,2.813,9Zm0-1.125H2.813V6.187H1.125ZM6.187,3.937A1.125,1.125,0,0,1,5.063,2.812V1.125A1.125,1.125,0,0,1,6.187,0H7.875A1.124,1.124,0,0,1,9,1.125V2.812A1.125,1.125,0,0,1,7.875,3.937Zm0-1.125H7.875V1.125H6.187ZM1.125,3.937A1.125,1.125,0,0,1,0,2.812V1.125A1.125,1.125,0,0,1,1.125,0H2.813A1.125,1.125,0,0,1,3.938,1.125V2.812A1.125,1.125,0,0,1,2.813,3.937Zm0-1.125H2.813V1.125H1.125Z"
                />
              </svg>
            </Menu>
          </Link>
        </MenuLink>
        <MenuLink to="/categories" exact={true}>
          <Menu title={'Categories'}>
            <svg width="8.26" height="6.037" viewBox="0 0 8.26 6.037">
              <path
                className={style.InactiveSvgClass}
                d="M3,10.622h.918V9.415H3Zm0,2.415h.918V11.83H3Zm0-4.83h.918V7H3Zm1.836,2.415H11.26V9.415H4.836Zm0,2.415H11.26V11.83H4.836ZM4.836,7V8.207H11.26V7Z"
                transform="translate(-3 -7)"
              />
            </svg>
          </Menu>
        </MenuLink>
      </div>
      <div class="mt-2">
        <div class="uppercase  pl-12 pb-2 text-sm color-text-menu">
          your audios
        </div>
        <div class="pl-16 text-sm">
          <MenuLink to="/play/hash1" exact={true}>
            <Menu title={'Now Listening'}>
              <svg width="11.898" height="8.924" viewBox="0 0 11.898 8.924">
                <path
                  className={style.InactiveSvgClass}
                  d="M10.252,3.3a4.456,4.456,0,0,0-8.607,0,2.966,2.966,0,0,0,1.33,5.621A1.487,1.487,0,0,0,4.462,7.436V4.462A1.483,1.483,0,0,0,3.357,3.03a2.949,2.949,0,0,1,5.185,0A1.483,1.483,0,0,0,7.436,4.462V7.436A1.487,1.487,0,0,0,8.924,8.924,2.966,2.966,0,0,0,10.252,3.3ZM2.975,7.436a1.487,1.487,0,0,1,0-2.975Zm5.949,0V4.462a1.487,1.487,0,0,1,0,2.975Z"
                />
              </svg>
            </Menu>
          </MenuLink>
          {!user ? (
            <>
              <MenuLink to="/following" exact={true}>
                <Menu title={'Following'}>
                  <svg width="10" height="10.999" viewBox="0 0 10 10.999">
                    <path
                      className={style.InactiveSvgClass}
                      d="M8.041,10.9,5,9.73,1.959,10.9a1.487,1.487,0,0,1-.531.1,1.467,1.467,0,0,1-.8-.236A1.361,1.361,0,0,1,0,9.624V1.375A1.4,1.4,0,0,1,1.428,0H8.571A1.4,1.4,0,0,1,10,1.375v8.25a1.361,1.361,0,0,1-.628,1.138,1.48,1.48,0,0,1-1.331.139Zm.53-1.277V1.375H1.428v8.25L5,8.25ZM3.237,5.252v0a1.012,1.012,0,0,1-.381-.782A1.075,1.075,0,0,1,4.99,4.327c0,.016.018.016.02,0a1.075,1.075,0,0,1,2.133.142,1.008,1.008,0,0,1-.381.782v0L5,6.875Z"
                    />
                  </svg>
                </Menu>
              </MenuLink>

              <MenuLink to="/favorites" exact={true}>
                <Menu title={'Favorites'}>
                  <svg
                    width="11.238"
                    height="11.238"
                    viewBox="0 0 11.238 11.238"
                  >
                    <path
                      className={style.InactiveSvgClass}
                      d="M7.613,2a5.619,5.619,0,1,0,5.624,5.619A5.616,5.616,0,0,0,7.613,2ZM10,10.99,7.619,9.557,5.242,10.99l.629-2.7-2.1-1.815L6.54,6.237,7.619,3.686,8.7,6.231l2.764.236-2.1,1.815Z"
                      transform="translate(-2 -2)"
                    />
                  </svg>
                </Menu>
              </MenuLink>
            </>
          ) : null}
          <MenuLink to="/suggestions" exact={true}>
            <Menu title={'Requests'}>
              <svg width="11.238" height="11.238" viewBox="0 0 16 16">
                <path className={style.InactiveSvgClass} d="M15.109,4.336l-6-4a2,2,0,0,0-2.218,0l-6,4A2,2,0,0,0,0,6v8a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V6A2,2,0,0,0,15.109,4.336ZM8,2l5.1,3.4L8,8.8,2.9,5.4ZM2,14V7.2l5.445,3.63a1,1,0,0,0,1.11,0L14,7.2V14Z" />
              </svg>
            </Menu>
          </MenuLink>
          <MenuLink to="/recent" exact={true}>
            <Menu title={'Recent'}>
              <svg width="10.727" height="10.727" viewBox="0 0 10.727 10.727">
                <path
                  className={style.InactiveSvgClass}
                  d="M7.358,2a5.363,5.363,0,1,0,5.369,5.363A5.361,5.361,0,0,0,7.358,2Zm.005,9.654a4.291,4.291,0,1,1,4.291-4.291A4.289,4.289,0,0,1,7.363,11.654Zm.268-6.972h-.8V7.9L9.643,9.589l.4-.66L7.632,7.5Z"
                  transform="translate(-2 -2)"
                />
              </svg>
            </Menu>
          </MenuLink>
        </div>
      </div>
      {/* TODO Change back this set */}
      {!user ? (
        <div class="mt-2">
          <div class="flex items-center ">
            <div class="uppercase  pl-12 pb-2 text-sm color-text-menu">
              playlist
            </div>
            <div
              class="ml-20 p-3 cursor-pointer rounded-full scaled"
              onClick={addPlaylist}
            >
              <svg width="15.174" height="12.122" viewBox="0 0 10.174 7.122">
                <path
                  className={style.InactiveSvgClass}
                  d="M8.1,8.035H2V9.052H8.1ZM8.1,6H2V7.017H8.1Zm2.035,4.07V8.035H9.122V10.07H7.087v1.017H9.122v2.035h1.017V11.087h2.035V10.07ZM2,11.087H6.07V10.07H2Z"
                  transform="translate(-2 -6)"
                />
              </svg>
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
