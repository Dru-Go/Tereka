import React, {useState} from 'react';
import Dropdown from './sortDropdown';
import MenuLink from './menuLink';
import cardSVG from '../svg/card.svg';
import listSVG from '../svg/list.svg';
import dropdownSVG from '../svg/dropdown.svg';

const style = {
  active: 'p-2 mx-1 rounded-full  bg-green-300',
  inactive: 'p-2  mx-1 rounded-full hover:bg-green-300',
};

const sortLinks = ['Title', 'Author', 'Narrator', 'Likes', 'Duration'];

const FilterBoard = ({fil_dispatch, ori, setOri, sortBy, setSortBy}) => {
  const [openSort, setOpenSort] = useState(false);
  const handleClick = () => {
    if (ori === 'Card') {
      setOri('List');
    } else {
      setOri('Card');
    }
  };

  return (
    <div class=" flex items-center justify-between mt-2  mr-3 border rounded-lg zoom-9 header">
      <div class="flex cursor-pointer p-2 items-center">
        <div class="flex items-center">
          <div
            className={ori === 'Card' ? style.active : style.inactive}
            onClick={handleClick}
          >
            <img src={cardSVG} alt="cardSVG" />
          </div>
          <div
            class="p-3 -ml-1 rounded-full hover:bg-green-300"
            className={ori === 'List' ? style.active : style.inactive}
            onClick={handleClick}
          >
            <img src={listSVG} alt="listSVG" />
          </div>
        </div>
        <div>
          <div
            class="flex ml-3 py-1 px-3  rounded-full hover:bg-green-300 items-center"
            onClick={() => setOpenSort(!openSort)}
          >
            <div class=" text-gray-500 hover:text-gray-800 text-xs font-medium uppercase">
              {sortBy}
            </div>
            <div class="ml-2">
              <img src={dropdownSVG} alt="dropdownSVG" />
              {/* Dropdown */}
              <Dropdown
                active={openSort}
                titles={sortLinks}
                setToggle={setOpenSort}
                setSelected={setSortBy}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center text-gray-500 text-xs font-medium">
        <MenuLink value="Poem" dispatch={fil_dispatch} to="/poem" />
        <MenuLink value="History" dispatch={fil_dispatch} to="/history" />
        <MenuLink value="Economy" dispatch={fil_dispatch} to="/economy" />
        <MenuLink value="Fiction" dispatch={fil_dispatch} to="/fiction" />
        <MenuLink value="Fantacy" dispatch={fil_dispatch} to="/fantacy" />
        <MenuLink value="Philosopy" dispatch={fil_dispatch} to="/philosopy" />
      </div>
    </div>
  );
};

export default FilterBoard;
