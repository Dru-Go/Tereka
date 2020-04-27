import {useState} from 'react';

const useLocalStorage = (localKey) => {
  const [localState, setLocalState] = useState(localStorage.getItem(localKey));

  const setLoc = (newItem) => {
    localStorage.setItem(localKey, newItem);
    setLocalState(newItem);
  };

  return {localState, setLoc};
};

export default useLocalStorage;
