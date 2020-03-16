// TODO here we define an audio that store the last played record of an audio in cache

import React, {useState, createContext} from 'react';

export const PlayContext = createContext();

export const PlayProvider = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [curplay, setplay] = useState(null);

  return (
    <PlayContext.Provider value={[curplay, setplay]}>
      {props.children}
    </PlayContext.Provider>
  );
};


