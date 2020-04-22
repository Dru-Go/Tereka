import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {SEARCH_AUDIO} from '../../../Graphql/query';
import SearchDropdown from './searchDropdown';
import SearchTip from './searchTips';
import Loading from '../../../Views/loading/loading';

const styles = {
  suggestion:
    'text-xs py-1 px-2 bg-gray-600 text-gray-300 cursor-pointer rounded-lg mx-1 hover:p-3 hover:bg-gray-700',
};

const Search = () => {
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');

  const [loadSearch, {loading, error, data}] = useLazyQuery(SEARCH_AUDIO, {
    variables: {title: search},
  });

  const [showTip, setShowTip] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (selected === '/Audio') {
      loadSearch();
    }
    // else if (selected === '/Narrator') {
    //   dispatch({type: 'NARRATOR'});
    // } else if (selected === '/Author') {
    //   dispatch({type: 'AUTHOR'});
    // } else {
    //   dispatch({type: 'None'});
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
    setSearch('');
  };

  // Dispatch an action
  return (
    <div class=" w-full p-1">
      <div class="mx-1 text-sm font-medium">
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
            class="outline-none ml-2 w-full bg-transparent"
            value={search}
            onChange={handleChange}
            onFocus={handleFocus}
            autocomplete="off"
            name="search"
          />
          {showSearch || loading || error ? (
            <div class="float-right">
              {' '}
              <Loading />{' '}
            </div>
          ) : null}
        </div>
      </div>
      {data ? (
        <SearchDropdown
          active={showSearch}
          selected={selected}
          links={data.search_Audios}
          setSearch={setSearch}
          setToggle={setShowSearch}
        />
      ) : null}

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
