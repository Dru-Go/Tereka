import React from 'react';

const styles = {
  listItem: 'hover:bg-gray-100 p-2 cursor-pointer',
};

const Tips = ({state, value, setValues}) => {
  console.log(state);
  return (
    <div class="my-20 bg-darkPurple w-1/4 h-side rounded-l-lg">
      <div class="text-center font-light italic py-2 border-b">Do U Mean</div>
      <div class="mx-2">
        {state.map(suggestion =>
          suggestion.title ? (
            <AudioTip
              setActive={true}
              suggestion={suggestion}
              setValues={setValues}
            />
          ) : suggestion.name ? (
            <AuthorTip
              setActive={true}
              suggestion={suggestion}
              values={value}
              setValues={setValues}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

// Audio List item
const AudioTip = ({setActive, suggestion, setValues}) => {
  const handleClick = () => {
    setValues(suggestion);
  };

  return (
    <div className={styles.listItem} onClick={handleClick}>
      {suggestion.image ? (
        <div>
          <img class="rounded-full w-8 h-8" src={suggestion.image} alt="" />
        </div>
      ) : null}
      <div class="ml-2">
        <div class="font-medium text-lg ">
          {suggestion.title}{' '}
          <span class="italic font-medium text-xxs">
            {' '}
            {suggestion.category}
          </span>
        </div>
        <div class="flex items-center text-xs">
          <div class="ml-4 text-xxs"> Author {suggestion.author}</div>
          <div class="ml-4 text-xxs"> {suggestion.likes} Likes</div>
          <div class="ml-4 text-xxs"> Status {suggestion.status}</div>
        </div>
      </div>
    </div>
  );
};

// Audio List item
const AuthorTip = ({setActive, values, suggestion, setValues}) => {
  const handleClick = () => {
    const form = values[0];
    console.log('Forms = ', form);
    // route to /play/... or {to}
    // Set active = false
    form.author = suggestion.name;
    console.log('Forms = ', form);
    setValues(form);
    // setActive(false);
  };

  return (
    <div className={styles.listItem} onClick={handleClick}>
      {suggestion.image ? (
        <div>
          <img class="rounded-full w-8 h-8" src={suggestion.image} alt="" />
        </div>
      ) : null}
      <div class="ml-2">
        <div class="font-helvetica-rounded ">{suggestion.name}</div>
        <div class="flex items-center text-xs">
          <div class="text-xxs"> {suggestion.followers} Followers </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
