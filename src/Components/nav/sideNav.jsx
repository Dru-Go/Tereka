import React from 'react';
import {Route, Link} from 'react-router-dom';

const activeStyle =
  'menu-back cursor-pointer text-gray-300 z-10 hover:shadow hover:text-gray-100 -mr-2 shadow-lg px-6 py-3';
const InactiveStyle =
  'px-6 py-3 text-gray-300 font-thin  hover:shadow  cursor-pointer';

const MenuLink = ({children, to, exact}) => (
  <Route
    path={to}
    exact={exact}
    children={({match}) => (
      <Link to={to}>
        <div className={match ? activeStyle : InactiveStyle}>{children}</div>
      </Link>
    )}
  />
);

const sideNav = props => {
  const filters = [
    '/business',
    '/history',
    '/economy',
    '/fiction',
    '/fantacy',
    '/philosopy',
  ];
  return (
    <div class="pl-10 text-xs">
      <MenuLink to="/play" exact={true}>
        <div>Now Listening</div>
      </MenuLink>

      {/* Here We added some filters to still be active as the filters are linked */}
      <MenuLink to={'/'} exact={true}>
        <div>Dashboard</div>
      </MenuLink>
      <MenuLink to="/favorites" exact={true}>
        <div>Favorites</div>
      </MenuLink>
      <MenuLink to="/suggestions" exact={true}>
        <div>Suggestions</div>
      </MenuLink>
    </div>
  );
};

export default sideNav;
