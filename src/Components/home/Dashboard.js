import React from 'react';
import {Link} from 'react-router-dom';

const dashboard = props => {
  const navStyle = {
    margin:'auto'
  }
  return (

    <div>
      <div className="text-4xl font-medium text-center">Dashboard</div>
      <div className="flex items-center m-auto">
        <Link style={navStyle} to="/register">
          <button>SignUp</button>
        </Link>
        <Link style={navStyle} to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default dashboard;
