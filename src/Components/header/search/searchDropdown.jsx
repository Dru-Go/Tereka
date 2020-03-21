import React from 'react';

const styles = {
  active:
    ' font-normal dropdown shadow overflow-hidden rounded bg-gray-300 w-104 border mt-2 py-1 right-0 z-50',
  hidden: 'hidden',
  listItem: 'flex items-center hover:bg-gray-100 cursor-pointer p-2',
};

const SearchDropdown = ({active, selected, links, setToggle}) => {
  return (
    <ul className={active ? styles.active : styles.hidden}>
      {links
        ? links.map(link =>
            selected === '/Audio' ? (
              <AudioListItem
                to={link.to}
                setActive={setToggle}
                image={link.image}
                title={link.title}
                narratedBy={link.narrated}
                author={link.author}
              />
            ) : (
              <NarAuthorListItem
                to={link.to}
                setActive={setToggle}
                image={link.image}
                name={link.name}
                numAudio={link.numAudio}
                followers={link.followers}
              />
            )
          )
        : null}
    </ul>
  );
};

// Audio List item
const AudioListItem = ({to, setActive, image, title, narratedBy, author}) => {
  const handleClick = () => {
    // route to /play/... or {to}
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
const NarAuthorListItem = ({
  to,
  setActive,
  image,
  name,
  numAudio,
  followers,
}) => {
  const handleClick = () => {
    // route to /details/... or {to}
    // Set active = false
    setActive(false);
  };

  return (
    <div
      class={styles.listItem}
      onClick={handleClick}
    >
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

export default SearchDropdown;
