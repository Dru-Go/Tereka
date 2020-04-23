import React, {useState, useContext} from 'react';
// import './header.style.css'
import Dropdown from './dropdown';
import Links from './links';
import Search from './search/search';
import {AuthContext} from '../../Context/authContext';
// SVG
import notificationSVG from './svg/notification.svg';
import searchSVG from './svg/search.svg';

const styles = {
  links: 'hover:underline cursor-pointer hover:font-bold',
  absent:
    'rounded-full w-32  p-1 h-10 mt-2 font-medium color5-bg text-xs flex items-center justify-around',
};

const Header = ({history}) => {
  const [toggle, setToggle] = useState(false);
  const {user} = useContext(AuthContext);
  console.log('User is ', user);
  const toggled = () => {
    setToggle(!toggle);
  };

  return (
    <div class="bord head zoom-8">
      <div class="bord-left px-32">
        <div class="border flex items-start rounded-lg w-50p p-1 m-2">
          <div class="mx-2 mt-1">
            <img src={searchSVG} alt="searchSVG" />
          </div>
          <Search />
        </div>
      </div>
      {user ? (
        <UserPresent
          toggle={toggle}
          onToggle={toggled}
          links={Links}
          setToggle={setToggle}
        />
      ) : (
        <UserAbsent history={history} />
      )}
    </div>
  );
};

const UserPresent = ({toggle, onToggle, links, setToggle}) => (
  <>
    <div class=" cursor-pointer">
      <img class="m-auto mt-3" src={notificationSVG} alt="notificationSVG" />
    </div>
    <div class="cursor-pointer">
      <img
        src="./avatar.png"
        class="p-2 rounded-full"
        alt=""
        onClick={onToggle}
      />
      <Dropdown active={toggle} links={links} setToggle={setToggle} />
    </div>
  </>
);

const UserAbsent = ({history}) => (
  <div className={styles.absent}>
    <a href="/login" className={styles.links}>
      Sign In
    </a>
    <div>|</div>
    <a href="/register" className={styles.links}>
      Sign Up
    </a>
  </div>
);

export default Header;
