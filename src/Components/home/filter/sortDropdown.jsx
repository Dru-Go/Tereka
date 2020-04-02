// Here we do some refactoring
import React from 'react';

const styles = {
  active:
    'absolute font-normal bg-gray-200 shadow overflow-hidden rounded-lg w-40 border mt-2 py-1 z-20',
  hidden: 'hidden',
};

const Dropdown = ({active, titles, setToggle, setSelected}) => {
  return (
    <ul className={active ? styles.active : styles.hidden}>
      {titles.map(title => (
        <List
          title={title}
          setActive={setToggle}
          setSelected={setSelected}
        />
      ))}
    </ul>
  );
};

const List = ({setActive, title, setSelected}) => {
  const handleClick = e => {
    setActive(false);
    setSelected(e.target.innerHTML.trim());
    console.log('Selected is ', e.target.innerHTML);
  };

  return (
    <li class="hover:bg-gray-500 p-2 border-b" onClick={handleClick}>
      {title}
    </li>
  );
};
export default Dropdown;
