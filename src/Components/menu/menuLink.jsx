import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';
import {AudioContext} from '../../Context/audioContext';
import './menu.style.css';
import playingSVG from './playing.svg';

const style = {
  activeStyle:
    ' px-4 py-2  hover:shadow menu-back selected shadow-lg   cursor-pointer text-gray-100  text-sm',
  visble: 'flex items-center justify-between',
  hidden: 'hidden',
  InactiveStyle:
    'px-4 py-2  hover:shadow color-text-menu cursor-pointer color-text-menu text-xs',
};

const MenuLink = ({children, to, exact}) => (
  <Route
    path={to}
    exact={exact}
    children={({match}) => (
      <Link to={to}>
        <div className={match ? style.activeStyle : style.InactiveStyle}>
          {children}
        </div>
      </Link>
    )}
  />
);
const Menu = ({children, title}) => {
  const [, , , , playing] = useContext(AudioContext);
  return (
    <div className={style.visble}>
      <div class="flex items-center">
        <div class="pr-2">{children}</div>
        <div> {title}</div>
      </div>
      {playing && title === 'Now Listening' ? (
        <div class="text-green-300 playingLogo">
          <img src={playingSVG} alt="playingSVG" />
        </div>
      ) : null}
    </div>
  );
};

export {Menu, MenuLink};
