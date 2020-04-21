import React, {useState, useEffect, createContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {RECENT_PLAY} from '../Graphql/query';
import {Howl} from 'howler';

export const AudioContext = createContext();

export const PlayProvider = props => {
  const [curPlay, setCurPlay] = useState(null);
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const {error, data} = useQuery(RECENT_PLAY, {
    variables: {uid: 'hash1'},
  });

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      setCurPlay(data.recentPlay);
    }
  }, [data]);

  const [sound, setSound] = useState(
    new Howl({
      src: [curPlay ? curPlay.Url : 'song.mp3']
    })
  );
  sound.html5 = true

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
        setCurPlay,
        sound,
        setSound,
      ]}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
