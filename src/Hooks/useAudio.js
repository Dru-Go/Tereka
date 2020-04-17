import {useEffect, useContext} from 'react';
import {AudioContext} from '../Context/audioContext';

function useAudioPlayer(song) {
  const [
    curTime,
    setCurTime,
    duration,
    setDuration,
    playing,
    setPlaying,
    curPlay
  ] = useContext(AudioContext);

  // console.log('Clicked Time',/\clickedTime);
  useEffect(() => {
    const audio = document.getElementById('music');
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    // React state listeners: update DOM on React state changes

    playing ? audio.play() : audio.pause();
    console.log(playing);

    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    curPlay
  };
}

export default useAudioPlayer;
