import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext} from '../Context/themeContext';

const ThemeToggle = () => {
  const [themes, curTheme, setTheme] = useContext(ThemeContext);
  const [toggle, setToggle] = useState('off');

  useEffect(() => {
    toggle === 'off' ? setTheme(themes.light) : setTheme(themes.dark);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const ToggleTheme = () => {
    toggle === 'off' ? setToggle('on') : setToggle('off');
  };

  return (
    <div class="float-right  cursor-pointer" onClick={ToggleTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.192"
        height="23.565"
        viewBox="0 0 23.192 23.565"
        style={{fill: curTheme.icon}}
      >
        <path
          d="M11.49,2A16.029,16.029,0,0,0,5,3.347c3.881,1.726,6.49,4.938,6.49,8.63S8.881,18.88,5,20.606a16.029,16.029,0,0,0,6.49,1.347c7.164,0,12.979-4.47,12.979-9.977S18.654,2,11.49,2Z"
          transform="matrix(-0.978, -0.208, 0.208, -0.978, 23.518, 26.561)"
        />
      </svg>
    </div>
  );
};

export default ThemeToggle;
