import React, {useState, createContext} from 'react';

export const AudioContext = createContext();

export const PlayProvider = props => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);

  return (
    <AudioContext.Provider
      value={[
        curTime,
        setCurTime,
        duration,
        setDuration,
        playing,
        setPlaying,
      ]}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
