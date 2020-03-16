import React from 'react'
import Logo from './logo';
import SideMenu from './sideNav';

const side = (props) => (
	<div class="side">
	<div class="pt-10 cursor-pointer">
	  <Logo/>
	</div>
	<div class="border-gray-400 ">
			<SideMenu path={props.location.pathname}/>
	</div>
  </div>
);

export default side;