import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  listItem: 'flex items-center searchList cursor-pointer p-2',
};

// Dropdown List
function listItem({selected, setToggle, setSearch, link}) {
  if (selected === '/Audio') {
    return (
      <AudioListItem
        to={link.Id}
        setActive={setToggle}
        image={link.ImageURL}
        title={link.Title}
        narratedBy={link.Narrator}
        author={link.Author}
        setSearch={setSearch}
      />
    );
  } else if (selected === '/Narrator') {
    return (
      <NarListItem
        to={link.to}
        setActive={setToggle}
        image={link.ImageURL}
        name={link.Name}
        numAudio={link.NumAudio}
        followers={link.Followers}
        setSearch={setSearch}
      />
    );
  } else {
    return (
      <AuthorListItem
        to={link.to}
        setActive={setToggle}
        image={link.ImageURL}
        name={link.Name}
        numBooks={link.NumBooks}
        followers={link.Followers}
        setSearch={setSearch}
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
  setSearch,
}) => {
  const handleClick = () => {
    // Set active = false
    setSearch('');
    setActive(false);
  };

  return (
    <Link to={'/play/' + to}>
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
    </Link>
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
  setSearch,
}) => {
  const handleClick = () => {
    // Set active = false
    setActive(false);
    setSearch('');
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
  setSearch,
}) => {
  const handleClick = () => {
    // Set active = false
    setActive(false);
    setSearch('');
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
