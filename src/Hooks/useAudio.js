import {useEffect, useContext} from 'react';
import {AudioContext} from '../Context/audioContext';

function useAudioPlayer() {
  const [
    curTime,
    setCurTime,
    duration,
    setDuration,
    playing,
    setPlaying,
    curPlay,
    ,
    sound,
    setSound,
  ] = useContext(AudioContext);

  setTimeout(function() {
    setDuration(sound.duration());
    setCurTime(sound.seek());
  }, 500);

  useEffect(() => {
    playing ? sound.play() : sound.pause();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    sound,
    setSound,
    curPlay,
  };
}

export default useAudioPlayer;
