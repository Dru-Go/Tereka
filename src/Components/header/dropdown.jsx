// Here we do some refactoring
import React from 'react';
import './header.style.css'

const styles = {
  active:
    "absolute font-normal dropdown shadow overflow-hidden rounded w-48 border mt-2 py-1 right-0 z-20",
  hidden: 'hidden',
};

const Dropdown = ({active, links, setToggle}) => {
  return (
    <ul className={active ? styles.active : styles.hidden}>
      {links.map(link => (
        <List
          title={link.title}
          setActive={setToggle}
          redirectPath={link.path}
          Svg={link.Svg}
          extra={link.extra}
        />
      ))}
    </ul>
  );
};

const List = ({setActive, redirectPath, title, Svg, extra}) => {
  const handleClick = () => {
    setActive(false);
    // Redirect(redirectPath)
    console.log(redirectPath);
    if (title === 'Logout') {
      console.log('Logging out ...');
    }
  };

  return (
    <li class="hover:bg-gray-500" onClick={handleClick}>
      <div class="flex items-center p-2 border-b">
        <div class="">
          <Svg />
        </div>
        <div class="ml-2">{title} </div>
        {extra ? <div class="ml-5 text-xs text-green-600"> {extra}</div> : null}
      </div>
    </li>
  );
};
export default Dropdown;
