import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';
import {AudioContext} from '../../Context/audioContext';
import './menu.style.css';

const style = {
  activeStyle:
    ' px-4 py-2  hover:shadow menu-back selected shadow-lg   cursor-pointer text-gray-100  text-sm',
  visble:'flex items-center justify-between',
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
  console.log('Playing Menu', playing);
  return (
    <div className={style.visble}>
      <div class="flex items-center">
        <div class="pr-2">{children}</div>
        <div> {title}</div>
      </div>
      {playing && title === 'Now Listening' ? (
        <div class="text-green-300 playingLogo">
          <svg class="fill-current" width="16" height="12" viewBox="0 0 16 12">
            <path d="M5.849,11.635,3.523,10H2A2,2,0,0,1,0,8V4A2,2,0,0,1,2,2H3.394L5.891.336A2,2,0,0,1,9,2v8a2,2,0,0,1-3.151,1.635ZM2,8H4.156L7,10V2L4,4H2Zm10.051,2.592-.028-.047a1,1,0,0,1,.321-1.309,3.99,3.99,0,0,0,.006-6.467,1,1,0,0,1-.325-1.3l.027-.048a.967.967,0,0,1,1.383-.336,6,6,0,0,1-.005,9.842.911.911,0,0,1-.526.165A.992.992,0,0,1,12.051,10.591ZM10.54,7.949,10.514,7.9a.949.949,0,0,1,.161-1.167,1,1,0,0,0,.006-1.467A.953.953,0,0,1,10.52,4.1l.027-.047a.965.965,0,0,1,1.468-.269,2.985,2.985,0,0,1-.009,4.439.9.9,0,0,1-.6.229A1,1,0,0,1,10.54,7.949Z" />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export {Menu, MenuLink};
