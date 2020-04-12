import React from 'react';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import momentDurationFormatSetup from 'moment-duration-format';

const styles = {
  extended:
    'mb-4 cursor-pointer rounded-full flex bg-gray-300 m-auto opacity-25 h-1 w-2/3',
  mini:
    'mt-2 cursor-pointer rounded-full flex bg-gray-300 m-auto opacity-25 h-1 w-full',
  progess: 'rounded-full bg-gray-800  h-full  bar__progress bg-dark-blue',
};

const playBar = ({mini, duration, curTime}) => {
  function formatDuration(duration) {
    return moment.duration(duration, 'seconds').format('mm:ss', {trim: false});
  }
  const curPercentage = (curTime / duration) * 100;

  return (
    <>
      {!mini ? (
        <div class="flex mt-4 mx-10 items-center text-gray-400  justify-between text-xxs">
          <div>{formatDuration(curTime)}</div>
          <div>{formatDuration(duration)}</div>
        </div>
      ) : null}

      <div className={mini ? styles.mini : styles.extended}>
        <div
          className={styles.progress}
          style={{width: `${curPercentage}%`}}
        ></div>
        <div
            class="rounded-full p-1 drag bg-dark-blue"
            id="playhead"
          ></div>
      </div>
    </>
  );
};

export default playBar;
