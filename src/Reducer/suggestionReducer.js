function suggestionReducer(state, action) {
  console.log('Dispatching ', action.type, ' ...');
  switch (action.type) {
    case 'GET':
      return null; // TODO return a list of suggetsions
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
      return null; // TODO return NULL
  }
}

export default suggestionReducer;
