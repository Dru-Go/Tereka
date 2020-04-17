import React, {useState} from 'react';
import Mini from '../mini play/mini';
import Expanded from '../mini play/expanded';
import useAudioPlayer from '../../Hooks/useAudio';

function SidePlay() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    curPlay
  } = useAudioPlayer("./song.mp3");
  return (
    <>
      <Sizer
        playing={playing}
        setPlay={setPlaying}
        curTime={curTime}
        duration={duration}
        setClickedTime={setClickedTime}
        curPlay={curPlay}
      />
    </>
  );
}

function Sizer({playing, setPlay, curTime, duration, setClickedTime, curPlay}) {
  const [toggleMinimize, setToggleMinimize] = useState(true);
  return (
    <>
      <div className={toggleMinimize ? 'block' : 'hidden'}>
        <Mini
          mini={toggleMinimize}
          setMin={setToggleMinimize}
          playing={playing}
          setPlay={setPlay}
          curTime={curTime}
          duration={duration}
          setClickedTime={setClickedTime}
          curPlay={curPlay}
          />
      </div>
      <div className={toggleMinimize ? 'hidden' : 'block'}>
        <Expanded
          mini={toggleMinimize}
          setMin={setToggleMinimize}
          playing={playing}
          setPlay={setPlay}
          curTime={curTime}
          duration={duration}
          setClickedTime={setClickedTime}
          curPlay={curPlay}
        />
      </div>
    </>
  );
}

export default SidePlay;
