import React from 'react';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import momentDurationFormatSetup from 'moment-duration-format';

const PlayBar = ({duration, curTime}) => {
  // const [width, setWidth] = useState(0);

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment.duration(duration, 'seconds').format('mm:ss', {trim: false});
  }


  return (
    <>
      <div class=" ml-12 mr-20 text-xs flex items-center justify-between">
        <div>{formatDuration(curTime)}</div>
        <div>{formatDuration(duration)}</div>
      </div>
      <div
        class="mt-1 ml-12 h-1 w-90p cursor-pointer bg-light-blue"
        id="timeline"
      >
        <div class="flex">
          <div
            class="rounded-full bg-gray-300 h-1 bar__progress bg-dark-blue"
            style={{width: `${curPercentage}%`}}
          ></div>
          <div
            class="rounded-full p-1 drag bg-dark-blue"
            id="playhead"
          ></div>
        </div>
      </div>
    </>
  );
};

export default PlayBar;
