import React, {useState, createContext} from 'react';

const AudioContext = props => {
  const [curAudio, setCurAudio] = useState({
    ref: '',
    image: '',
  });
  const audioContext = createContext(curAudio);
  return (
    <audioContext.Provider value={curAudio}>
      props.children
    </audioContext.Provider>
  );
};

export default AudioContext;
