import React, {useState} from 'react';
import Mini from '../mini play/mini';
import Expanded from '../mini play/expanded';
import useAudioPlayer from '../../Hooks/useAudio';


function SidePlay() {
  const [toggleMinimize, setToggleMinimize] = useState(true);
  // Instansiation is requiered
  useAudioPlayer();
  
  return (
    <>
      <div className={toggleMinimize ? 'block' : 'hidden'}>
        <Mini mini={toggleMinimize} setMin={setToggleMinimize} />
      </div>
      <div className={toggleMinimize ? 'hidden' : 'block'}>
        <Expanded mini={toggleMinimize} setMin={setToggleMinimize} />
      </div>
    </>
  );
}

export default SidePlay;
