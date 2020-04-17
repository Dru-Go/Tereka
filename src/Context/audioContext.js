import React, {useState, createContext} from 'react';

export const AudioContext = createContext();

export const PlayProvider = props => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [curPlay, setCurPlay] = useState('song.mp3')

  return (
    <AudioContext.Provider
      value={[
        curTime,
        setCurTime,
        duration,
        setDuration,
        playing,
        setPlaying,
        curPlay,
        setCurPlay
      ]}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
