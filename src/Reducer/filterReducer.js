const FINAL_STATE = [
  {
    Image: './book1.png',
    Title: 'Arina',
    Author: 'Marry Bay',
    Narrator: 'Achebe Charly',
    Likes: 23,
    Stars: 3,
    Duration: '1:23:34',
  },
  {
    Image: './book1.png',
    Title: 'The Power Of Now',
    Author: 'Charly Sans',
    Narrator: 'Eric Lancer',
    Likes: 34,
    Stars: 3,
    Duration: '1:23:34',
  },
  {
    Image: './book1.png',
    Title: "Babushka's Journey",
    Author: 'Mark Bates',
    Narrator: 'Charles Exavior',
    Likes: 55,
    Stars: 3,
    Duration: '1:23:34',
  },
];

function filterReducer(state, action) {
  console.log('ACTION CALLED IS ', action.type);
  switch (action.type) {
    case 'BUSINESS':
      return FINAL_STATE; // TODO return a list of BUSINESS related Audios
    case 'HISTORY':
      return FINAL_STATE; // TODO return a list of HISTORY related Audios
    case 'ECONOMY':
      return FINAL_STATE; // TODO return a list of ECONOMY related Audios
    case 'FICTION':
      return FINAL_STATE; // TODO return a list of FICTION related Audios
    case 'FANTACY':
      return FINAL_STATE; // TODO return a list of FANTACY related Audios
    case 'PHILOSOPY':
      return FINAL_STATE; // TODO return a list of PHYLOSOPY related Audios
    case 'TRENDING':
      return FINAL_STATE; // TODO return a list of PHYLOSOPY related Audios
    default:
      return FINAL_STATE; // TODO return all the list of audios
  }
}

export default filterReducer;
