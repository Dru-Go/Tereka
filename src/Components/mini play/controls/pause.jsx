import React from 'react';

const pause = ({setPlay}) => {
  //Play and Pause
  const pauseNow = () => {
    setPlay(true);
  };
  return (
    <div class="mx-4 cursor-pointer" onClick={pauseNow}>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          class="apause1"
          d="M9,16h2V8H9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Zm1-4h2V8H13Z"
          transform="translate(-2 -2)"
        />
      </svg>
    </div>
  );
};

export default pause;
