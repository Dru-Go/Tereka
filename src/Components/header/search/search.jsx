import React, {useState, useReducer, useEffect} from 'react';
import SearchReducer from '../../../Reducer/searchreducercer';
import SearchDropdown from './searchDropdown';
import SearchTip from './searchTips';

const styles = {
  suggestion:
    'text-xs py-1 px-2 bg-gray-600 text-gray-300 cursor-pointer rounded-lg mx-1 hover:p-3 hover:bg-gray-700',
};

const Search = () => {
  const [selected, setSelected] = useState('');
  const [state, dispatch] = useReducer(SearchReducer, selected);
  const [search, setSearch] = useState('');
  const [showTip, setShowTip] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  console.log('Reducer State is ', state);

  useEffect(() => {
    if (selected === '/Audio') {
      dispatch({type: 'AUDIO'});
    } else if (selected === '/Narrator') {
      dispatch({type: 'NARRATOR'});
    } else if (selected === '/Author') {
      dispatch({type: 'AUTHOR'});
    } else {
      dispatch({type: 'None'});
    }
  }, [selected]);

  const handleChange = e => {
    setSearch(e.target.value);
    setShowSearch(!showSearch);
  };
  const handleFocus = () => {
    setShowTip(!showTip);
  };
  const removeSelection = () => {
    setShowTip(false);
    setShowSearch(false);
    setSelected('');
  };
  // Dispatch an action
  return (
    <div>
      <div class="mx-1 text-sm font-medium w-full">
        <div class="flex">
          <div
            className={selected !== '' ? styles.suggestion : ''}
            onClick={removeSelection}
          >
            {selected}
          </div>
          <input
            type="text"
            placeholder="Search"
            class="outline-none ml-2 w-64 bg-transparent"
            value={search}
            onChange={handleChange}
            onFocus={handleFocus}
            autocomplete="off"
            name="search"
          />
        </div>
      </div>
      <SearchDropdown
        active={showSearch}
        selected={selected}
        links={state}
        setToggle={setShowSearch}
      />
      <SearchTip
        active={showTip}
        setActive={setShowTip}
        selected={selected}
        setSearch={setSelected}
      />
    </div>
  );
};

export default Search;
