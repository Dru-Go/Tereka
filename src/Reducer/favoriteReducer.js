const FINAL_STATE = [
  {
    Image: './book1.png',
    Title: "Babushka's Journey",
    Author: 'Marry Bay',
    Narrator: 'Chenio Achebe',
    Likes: 23,
    Stars: 3,
    Duration: '1:23:34',
  },
  {
    Image: './book1.png',
    Title: "True Grit",
    Author: 'Marry Bay',
    Narrator: 'Chenio Achebe',
    Likes: 34,
    Stars: 3,
    Duration: '1:23:34',
  },
  {
    Image: './book1.png',
    Title: "Old Sins",
    Author: 'Marry Bay',
    Narrator: 'Chenio Achebe',
    Likes: 55,
    Stars: 3,
    Duration: '1:23:34',
  },
];

function favoriteReducer(state, action) {
  console.log('FAVORITE_REDUCER ACTION CALLED IS ', action.type);
  switch (action.type) {
    case 'ADD':
      return null; // TODO Add the
    case 'REMOVE':
      const result = FINAL_STATE.filter((state) => state.Title !== action.value); 
      return result // TODO Remove the favorite
    default:
      return FINAL_STATE; // TODO: Gets all the favorites
  }
}

export default favoriteReducer;
