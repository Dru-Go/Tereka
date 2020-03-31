import React from 'react';
import {Route, Link} from 'react-router-dom';

const style = {
  activeStyle:
    ' px-4 py-2  hover:shadow menu-back selected shadow-lg   cursor-pointer text-gray-100  text-sm',
  activeSvgClass: 'ActiveSVG',
  InactiveSvgClass: 'inActiveSVG',

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
const Menu = ({children, title}) => (
  <div class="flex items-center">
    <div class="pr-2">{children}</div>
    <div> {title}</div>
  </div>
);

export {Menu, MenuLink};
