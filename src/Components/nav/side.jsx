import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo';
import SideMenu from './sideNav';

const side = () => (
  <div class="side">
    <div class="pt-10 cursor-pointer">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div class="border-gray-400 ">
      <SideMenu />
    </div>
  </div>
);

export default side;
