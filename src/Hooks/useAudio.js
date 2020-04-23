import {useEffect, useContext} from 'react';
import {AudioContext} from '../Context/audioContext';

function useAudioPlayer() {
  const [, setCurTime, , setDuration, playing, , , , sound, ,] = useContext(
    AudioContext
  );

  setTimeout(function() {
    setDuration(sound.duration());
    setCurTime(sound.seek());
  }, 500);

  useEffect(() => {
    playing ? sound.play() : sound.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);
}

export default useAudioPlayer;
