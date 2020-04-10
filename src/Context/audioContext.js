import React, {useState, createContext} from 'react';

export const AudioContext = createContext();

export const PlayProvider = props => {
  const [duration, setDuration] = useState(); // Duration of the audio file
  const [curTime, setCurTime] = useState(); // Current audio play value
  const [playing, setPlaying] = useState(false); // Pause and Play
  const [seekTime, setSeekTime] = useState(); // audio seek position

  return (
    <AudioContext.Provider
      value={[
        curTime,
        duration,
        playing,
        setDuration,
        setCurTime,
        seekTime,
        setPlaying,
        setSeekTime,
      ]}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
