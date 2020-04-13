const AUDIO_STATE = [
  {
    to: '/play',
    image: './book1.png',
    title: "Babushka's Journey",
    author: 'Marry Bay',
    narrated: 'Phillip',
  },
  {
    to: '/play',
    image: './book1.png',
    title: "Babushka's Journey",
    author: 'Marry Bay',
    narrated: 'Phillip',
  },
  {
    to: '/play',
    image: './book1.png',
    title: "Babushka's Journey",
    author: 'Marry Bay',
    narrated: 'Phillip',
  },
];
const AUTHOR_STATE = [
  {
    to: '/detail',
    image: './book1.png',
    name: "Matt damon",
    numBooks: 12,
    followers: 43,
  },
  {
    to: '/detail',
    image: './book1.png',
    name: "Jason Borne",
    numBooks: 11,
    followers: 11,
  },
  {
    to: '/detail',
    image: './book1.png',
    name: "Steve Megaret",
    numBooks: 3,
    followers: 23,
  },
];
const NARRATOR_STATE = [
  {
    to: '/detail',
    image: './book1.png',
    name: "Bob risce",
    numAudio: 56,
    followers: 23,
  },
  {
    to: '/detail',
    image: './book1.png',
    name: "Tim Ferris",
    numAudio: 34,
    followers: 53,
  },
  {
    to: '/detail',
    image: './book1.png',
    name: "Jonny Dep",
    numAudio: 6,
    followers: 2,
  },
];

function searchReducer(state, action) {
  switch (action.type) {
    case 'AUTHOR':
      return AUTHOR_STATE; // TODO return a list of authors
    case 'NARRATOR':
      return NARRATOR_STATE; // TODO return a list of narrators
    case 'AUDIO':
      return AUDIO_STATE; // TODO return a list of audios
    default:
      return AUDIO_STATE; // TODO return NULL
  }
}

export default searchReducer;
