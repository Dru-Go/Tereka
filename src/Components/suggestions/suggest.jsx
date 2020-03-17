import React, {useState} from 'react';

// TODO here manage the state of the Suggestion Box

const suggestionBox = () => {
  const state = [
    {
      title: "Anna's Diary",
      author: 'Anna',
      likes: 32,
    },
    {
      title: 'Living Large',
      author: 'Dr Dre',
      likes: 23,
    },
    {
      title: 'The Tunnel',
      author: 'Missy May',
      likes: 15,
    },
  ];
  // TODO: Here we should add model form to add new suggestions
  return (
    <div class="px-10 py-3 bord">
      <div class="flex items-center justify-between">
        <div class="text-center text-xl font-medium font-helvetica-rounded m-auto">
          Pending Suggestion
        </div>
        <div class="p-2 shadow hover:shadow-none cursor-pointer hover:bg-gray-500 border border-gray-300 bg-gray-300 text-lg font-medium rounded-lg">
          New Suggestions
        </div>
      </div>
      <Suggestions suggestions={state} />
    </div>
  );
};

const Suggestions = ({suggestions}) => (
  <div class="pt-5 flex ">
    {suggestions.map(suggestion => (
      <Suggestion suggestion={suggestion} />
    ))}
  </div>
);

const Suggestion = ({ suggestion }) => {
  const [like, setLike] = useState(false)

  const style = {
    like: "uppercase hover:font-medium cursor-pointer pt-2 text-center",
    liked: "uppercase cursor-pointer pt-2 text-center"
  }

  const liked = () => {
    console.log('Liked ', suggestion, 'Suggestion');
    suggestion.likes += 1
    setLike(!like)
  };

  return (
    <div class="w-1/6 mx-2 py-4 shadow-lg border rounded-lg  items-center ">
      <div class="">
        <div class="text-gray-700 text-center text-lg py-1 font-medium font-helvetica-rounded">
          {suggestion.title}
        </div>
        <div class="text-gray-700 text-sm text-center pt-1">
          by {suggestion.author}
        </div>
        <div class="text-xs text-center pt-2">{suggestion.likes} likes</div>
        <div
          className={like? style.liked:style.like}
          onClick={liked}
        >
          {like? "Liked":"Like"}
        </div>
      </div>
    </div>
  );
};

export default suggestionBox;
