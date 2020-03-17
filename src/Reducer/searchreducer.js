function searchReducer(state, action) {
  if (action.value) {
    switch (action.type) {
      case 'AUTHOR':
        return {count: state.count + 1}; // TODO return a list of authors
      case 'NARRATOR':
        return {count: state.count - 1}; // TODO return a list of narrators
      case 'AUDIO':
        return {count: state.count - 1}; // TODO return a list of audios
      case 'ALL':
        return {count: state.count - 1}; // TODO return a list of all in one list
      default:
        throw new Error(); // TODO return a list of audios
    }
  }
}

export default searchReducer;
