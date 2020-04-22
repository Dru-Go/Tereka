import React from 'react';
import Loading from '../../Views/loading/loading';

const styles = {
  listItem: 'hover:bg-gray-100 p-2 cursor-pointer',
};

const Tips = ({state, loading, setValues}) => {
  
  if (loading) {
    return (
      <div class="my-20 bg-darkPurple w-1/4 h-side rounded-l-lg">
        <div class="text-center font-light italic py-2 border-b">Do U Mean</div>
        <div class="mx-2">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div class="my-20 bg-darkPurple w-1/4 h-side rounded-l-lg">
      <div class="text-center font-light italic py-2 border-b">Do U Mean</div>
      <div class="mx-2">
        {state.length !== 0?state.map(suggestion => (
          <SuggestionsTip
            setActive={true}
            suggestion={suggestion}
            setValues={setValues}
          />
        )):<Loading/>}

      </div>
    </div>
  );
};

// Audio List item
const SuggestionsTip = ({suggestion, setValues}) => {
  const handleClick = () => {
    const suggest = {
      title: suggestion.Title,
      author: suggestion.Author,
      likes: suggestion.Likes,
      category: suggestion.Category,
      discription: suggestion.Discription,
      status: suggestion.Status,
    };
    setValues(suggest);
  };

  return (
    <div className={styles.listItem} onClick={handleClick}>
      <div class="ml-2">
        <div class="font-medium text-lg flex items-center justify-between ">
          <div>{suggestion.Title}</div>
          <div class="italic font-medium text-xxs">{suggestion.Category}</div>
        </div>
        <div class="flex items-center text-xs">
          <div class="ml-4 text-xxs"> Author {suggestion.Author}</div>
          <div class="ml-4 text-xxs"> {suggestion.Likes} Likes</div>
          <div class="ml-4 text-xxs"> Status {suggestion.Status}</div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
