const FINAL_STATE = [
  {
    Image: './book1.png',
    Title: "Babushka's Journey",
    Author: 'Marry Bay',
    Stars: 3,
  },
  {
    Image: './book1.png',
    Title: "Babushka's Journey",
    Author: 'Marry Bay',
    Stars: 3,
  },
  {
    Image: './book1.png',
    Title: "Babushka's Journey",
    Author: 'Marry Bay',
    Stars: 3,
  },
];

function filterReducer(state, action) {
  console.log('ACTION CALLED IS ', action.type)
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
    default:
      return FINAL_STATE; // TODO return all the list of audios
  }
}

export default filterReducer;
