const FINAL_STATE = [
  {
    id: '2345',
    name: 'Dre Adugna',
    type: 'Narrator',
    followers: 23,
    image: '../avatar.png',
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
    id: '6789',
    name: 'Chenio Achebe',
    type: 'Narrator',
    followers: 23,
    image: '../avatar.png',
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
];

function detailReducer(state, action) {
  console.log('ACTION CALLED IS ', action.type);
  switch (action.type) {
    case 'SEARCH':
      const result = FINAL_STATE.find(narator => {
        console.log(action.id);
        return narator.id === action.id;
      });
      return result; // TODO
    case 'FOLLOW':
      return FINAL_STATE; // TODO
    case 'SUGGEST':
      return FINAL_STATE; // TODO
    default:
      return FINAL_STATE; // TODO
  }
}

export default detailReducer;
