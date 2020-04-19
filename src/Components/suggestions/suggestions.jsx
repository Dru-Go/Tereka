import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {SUGGESTIONS} from '../../Graphql/query';

import Loading from '../../Views/loading/loading';
import Sad from '../error/sad';

const style = {
  NewSuggestion:
    'p-2 shadow hover:shadow-none cursor-pointer hover:bg-green-500 border border-gray-300 bg-green-300 text-lg font-medium rounded-lg',
  like:
    'uppercase hover:font-medium cursor-pointer text-red-300  pt-2 text-center',
  liked: 'uppercase cursor-pointer pt-2 text-center text-red-500',
};

// TODO here manage the state of the Suggestion Box

const SuggestionBox = () => {
  const {loading, error, data} = useQuery(SUGGESTIONS);

  if (error) {
    console.log('Error in the Playlist ', error);
    return <Sad />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!data || data.suggestions.length === 0) {
    return <Sad />;
  }

  return (
    <div class="px-10 py-3 bord">
      <div class="flex items-center justify-between">
        <div class="text-center text-xl font-medium font-helvetica-rounded m-auto">
          Pending Suggestion
        </div>
        <Link to="/suggestions/suggest">
          <div class={style.NewSuggestion}>New Suggestions</div>
        </Link>
      </div>
      <div class="pt-5  ">
        {data.suggestions.map((suggestion, index) => (
          <Suggestion state={suggestion} index={index} />
        ))}
      </div>
    </div>
  );
};

const Suggestion = ({state, index}) => {
  const [like, setLike] = useState(false);

  const liked = () => {
    console.log('Liked ', state, 'Suggestion');
    state.likes += 1;
    setLike(!like);
  };

  return (
    <div class="m-2 flex justify-between cursor-pointer py-3 border hover:shadow rounded  items-center ">
      <div class="flex items-center mx-4">
        <div class="mx-2 px-2 text-gray-900 text-sm">{index}</div>
        <div class="uppercase font-helvetica-rounded text-xs text-gray-600">
          {state.Title}
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-sm camelcase mx-16">
          By:
          <span class="text-green-500 text-xs ml-1 hover:underline">
            {state.Author}
          </span>
        </div>
        <div class="text-sm camelcase mx-16">
          <span class="text-gary-800 font-medium text-xs ml-1 hover:underline">
            {state.Category}
          </span>
        </div>

        <div class="flex items-center mx-20 cursor-pointer">
          <div className={like ? style.liked : style.like} onClick={liked}>
            <svg class="w-5 h-5" viewBox="0 0 11.989 11">
              <path
                class="fill-current"
                d="M7.995,14l-.869-.791C4.038,10.409,2,8.563,2,6.3A3.265,3.265,0,0,1,5.3,3a3.59,3.59,0,0,1,2.7,1.253A3.59,3.59,0,0,1,10.692,3a3.265,3.265,0,0,1,3.3,3.3c0,2.266-2.038,4.112-5.125,6.918Z"
                transform="translate(-2 -3)"
              />
            </svg>
          </div>
          <div class="px-2 text-xs text-gray-800">{state.Likes}</div>
        </div>
        <div class="text-sm camelcase mx-16">
          <span class="text-green-500 text-xs ml-1 hover:underline">
            {state.Status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;
