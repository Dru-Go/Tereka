import React from 'react';

const styles = {
  listItem: 'flex items-center hover:bg-gray-100 cursor-pointer p-2',
};

// Dropdown List
function listItem({selected, setToggle, name, history, link}) {
  console.log('Name of Narrator is ', name);
  if (selected === '/Audio') {
    return (
      <AudioListItem
        to={link.to}
        setActive={setToggle}
        image={link.image}
        title={link.title}
        narratedBy={link.narrated}
        author={link.author}
        history={history}
      />
    );
  } else if (selected === '/Narrator') {
    return (
      <NarListItem
        to={link.to}
        setActive={setToggle}
        image={link.image}
        name={link.name}
        numAudio={link.numAudio}
        followers={link.followers}
        history={history}
      />
    );
  } else {
    return (
      <AuthorListItem
        to={link.to}
        setActive={setToggle}
        image={link.image}
        name={link.name}
        numBooks={link.numBooks}
        followers={link.followers}
        history={history}
      />
    );
  }
}

// Audio List item
const AudioListItem = ({
  to,
  setActive,
  image,
  title,
  narratedBy,
  author,
  history,
}) => {
  const handleClick = () => {
    // route to /play/... or {to}
    history.push(to);
    // Set active = false
    setActive(false);
  };

  return (
    <div className={styles.listItem} onClick={handleClick}>
      <div>
        <img class="rounded-full w-8 h-8" src={image} alt="searchRes" />
      </div>
      <div class="ml-2">
        <div class="font-helvetica-rounded ">{title}</div>
        <div class="flex items-center text-xs">
          <div> Narrated By {narratedBy}</div>
          <div class="ml-4"> Author {author}</div>
        </div>
      </div>
    </div>
  );
};

// Narrator or an Authors List item
const NarListItem = ({
  to,
  setActive,
  image,
  name,
  numAudio,
  followers,
  history,
}) => {
  const handleClick = () => {
    // route to /details/... or {to}
    history.push(to);
    // Set active = false
    setActive(false);
  };

  return (
    <div class={styles.listItem} onClick={handleClick}>
      <div>
        <img class="rounded-full w-8 h-8" src={image} alt="searchRes" />
      </div>
      <div class="ml-2">
        <div class="font-helvetica-rounded">{name}</div>
        <div class="flex items-center text-xs ">
          <div> {numAudio} Audios </div>
          <div class="ml-4"> {followers} Followers</div>
        </div>
      </div>
    </div>
  );
};

// Narrator or an Authors List item
const AuthorListItem = ({
  to,
  setActive,
  image,
  name,
  numBooks,
  followers,
  history,
}) => {
  const handleClick = () => {
    // route to /details/... or {to}
    history.push(to);
    // Set active = false
    setActive(false);
  };

  return (
    <div class={styles.listItem} onClick={handleClick}>
      <div>
        <img class="rounded-full w-8 h-8" src={image} alt="searchRes" />
      </div>
      <div class="ml-2">
        <div class="font-helvetica-rounded">{name}</div>
        <div class="flex items-center text-xs ">
          <div> {numBooks} Audios </div>
          <div class="ml-4"> {followers} Followers</div>
        </div>
      </div>
    </div>
  );
};

export default listItem;
