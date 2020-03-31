const FINAL_STATE = [
  {
    id: '12345',
    name: 'playlist1',
    audios: [
      {
        Image: '../book1.png',
        Title: "Babushka's Journey",
        Author: 'Marry Bay',
        Narrator: 'Chenio Achebe',
        Likes: 34,
        Stars: 3,
        Duration: '1:23:34',
      },
      {
        Image: '../book1.png',
        Title: "Babushka's Journey",
        Author: 'Marry Bay',
        Narrator: 'Chenio Achebe',
        Likes: 55,
        Stars: 3,
        Duration: '1:23:34',
      },
    ],
  },
  {
    id: '324354',
    name: 'playlist2',
    audios: [
      {
        Image: '../book1.png',
        Title: "Babushka's Journey",
        Author: 'Marry Bay',
        Narrator: 'Chenio Achebe',
        Likes: 34,
        Stars: 3,
        Duration: '1:23:34',
      },
      {
        Image: '../book1.png',
        Title: "Babushka's Journey",
        Author: 'Marry Bay',
        Narrator: 'Chenio Achebe',
        Likes: 55,
        Stars: 3,
        Duration: '1:23:34',
      },
      {
        Image: '../book1.png',
        Title: "Babushka's Journey",
        Author: 'Marry Bay',
        Narrator: 'Chenio Achebe',
        Likes: 55,
        Stars: 3,
        Duration: '1:23:34',
      },
    ],
  },
];

function playlistReducer(state, action) {
  console.log('ACTION CALLED IS ', action.type);
  switch (action.type) {
    case 'NEW_PLAYLIST':
      FINAL_STATE.push({id: Date.now(), name: action.value, audios: []});
      return null; // TODO create a new playlist object
    case 'ALL_PLAYLIST':
      return FINAL_STATE; // TODO get all the playlist of a user with id
    case 'REMOVE_PLAYLIST':
      return null; // TODO remove the playlist with id...
    case 'ADD_AUDIO':
      return null; // TODO add an audio with id to a playlist with id
    case 'ALL_AUDIO':
      let playlist = {};
      FINAL_STATE.filter(play => {
        if (play.id === action.value) {
          playlist = play;
        }
      });
      return playlist.audios; // TODO get all the audios with in a playlist with id
    case 'REMOVE_AUDIO':
      return null; // TODO remove audio of id from a playlist with id
    default:
      return null; // TODO return null
  }
}

export default playlistReducer;
