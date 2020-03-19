import React from 'react';

const styles = {
  hidden: 'hidden',
  tip:
    'font-normal flex dropdown  overflow-hidden rounded w-64  mt-2 py-1 right-0 z-50',
  tipLists:
    'text-xs py-1 px-2 bg-gray-600 text-gray-300 cursor-pointer rounded-full mx-1 hover:p-3 hover:bg-gray-700',
};

// is called on input focus
const SearchTip = ({active, setSearch, selected, setActive}) => {
  const handleClick = e => {
    setSearch(e.target.innerHTML);
    setActive(false);
    //   TODO set Focus to the input
  };
  return (
    <ul className={active && selected === '' ? styles.tip : styles.hidden}>
      <li className={styles.tipLists}>
        <div onClick={handleClick}>/Audio</div>
      </li>

      <li className={styles.tipLists}>
        <div onClick={handleClick}>/Author</div>
      </li>
      <li className={styles.tipLists}>
        <div onClick={handleClick}>/Narrator</div>
      </li>
    </ul>
  );
};

export default SearchTip;
