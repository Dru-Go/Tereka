function compareValues(key, order = 'asc') {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const A = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
    const B = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}

function searchReducer(state, action) {
  console.log('Sorter Action: ', action.type);
  state = action.value; // Setting the state

  switch (action.type) {
    case 'TITLE':
      return state.sort(compareValues('Title'));

    case 'NARRATOR':
      return state.sort(compareValues('Narrator'));

    case 'AUTHOR':
      return state.sort(compareValues('Author'));

    case 'LIKES':
      return state.sort(compareValues('Likes'));

    case 'DURATION':
      return state;

    default:
      return state; // TODO return default
  }
}

export default searchReducer;
