import React from 'react';
import {Route, Link} from 'react-router-dom';

const MenuLink = ({value, to, dispatch}) => {
  const styles = {
    active:
      'px-4 cursor-pointer hover:text-gray-800 hover:font-bold underline text-gray-800 font-bold',
    Inactive: 'px-4 cursor-pointer hover:text-gray-800 hover:font-bold',
  };
  return (
    <Route
      path={to}
      exact={true}
      children={({match}) => {
        if (match) {
          console.log('MenuLink -> Match ', match, '-> Value', value);
          dispatch({type: value.toUpperCase()});
        }
        return (
          <Link to={to}>
            <div className={match ? styles.active : styles.Inactive}>
              {value}
            </div>
          </Link>
        );
      }}
    />
  );
};

export default MenuLink;
