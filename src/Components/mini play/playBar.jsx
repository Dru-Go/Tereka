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

const playBar = ({mini, duration, curTime, onTimeUpdate}) => {
  function formatDuration(duration) {
    return moment.duration(duration, 'seconds').format('mm:ss', {trim: false});
  }
  const curPercentage = (curTime / duration) * 100;

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().width + window.clientX;
    console.log('Bar Start ', bar.getBoundingClientRect().width);
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    console.log('TimeUpdate', onTimeUpdate(calcClickedTime(e)));
    const updateTimeOnMove = eMove => {
      console.log('Move', eMove);

      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }
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
            onMouseDown={e => handleTimeDrag(e)}
            id="playhead"
          ></div>
      </div>
    </>
  );
};

export default playBar;