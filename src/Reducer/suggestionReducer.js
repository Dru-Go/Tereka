const status = {
  pending: 'Processing',
  confirmation: 'Confirmed',
  open: 'Open',
};


const SUGGESTIONS_STATE = [
  {
    title: "Anna's Diary",
    author: 'Anna',
    likes: 32,
    category: 'Fiction',
    discription: 'lorem ipsum',
    status: status.pending,
  },
  {
    title: 'Akams Journey',
    author: 'Anna',
    likes: 32,
    category: 'Fiction',
    discription: 'lorem ipsum',
    status: status.pending,
  },
  {
    title: 'Living Large',
    author: 'Dre',
    likes: 23,
    category: 'Fiction',
    discription: 'lorem ipsum',
    status: status.confirmation,
  },
  {
    title: 'The Tunnel',
    author: 'Missy May',
    likes: 43,
    category: 'Fiction',
    discription: 'lorem stpi',
    status: status.open,
  },
];

const AUTHOR_STATE = [
  {
    image: './book1.png',
    name: 'Anna',
    followers: 32,
  },
  {
    image: './avatar.png',
    name: 'Bella',
    followers: 32,
  },
  {
    image: './avatar.png',
    name: 'Tina',
    followers: 32,
  },
  {
    image: './avatar.png',
    name: 'Alen',
    followers: 32,
  },
];

function suggestionReducer(state, action) {
  // console.log('State in Reducer  is', state);
  console.log('Dispatching ', action.type, ' ...');
  switch (action.type) {
    case 'SEARCH_TITLE':
      let titles = [];
      if (action.value !== '') {
        SUGGESTIONS_STATE.map(suggest => {
          if (
            suggest.title.toLowerCase().startsWith(action.value.toLowerCase())
          ) {
            titles.push(suggest);
          }
        });
      }
      return titles; // DOING return a list of suggetsions which start with the sear
    case 'SEARCH_AUTHOR':
      console.log('Authers name', action.value);
      let authors = [];
      if (action.value !== '') {
        AUTHOR_STATE.map(suggest => {
          if (suggest.name.toLowerCase().startsWith(action.value.toLowerCase())) {
            authors.push(suggest);
          }
        });
      }
      return authors; // DOING return a list of suggetsions which start with the sear
    case 'ALL':
      return SUGGESTIONS_STATE; // TODO gets all suggetion
    case 'ADD':
      console.log(action.value);
      return null; // TODO adds a new suggetion
    case 'UPDATE':
      return null; // TODO updates a previous suggetion
    case 'LIKE':
      return null; // TODO likes a suggetion
    case 'UNLIKE':
      return null; // TODO unlikes a suggetion
    default:
      return state; // TODO return NULL
  }
}

export default suggestionReducer;
