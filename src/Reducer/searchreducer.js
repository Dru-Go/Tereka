function searchReducer(state, action) {
	if (action.value) {	
		switch (action.type) {
		  case 'AUTHOR':
			return {count: state.count + 1}; // TODO return a list of authors 
		  case 'NARRATOR':
			return {count: state.count - 1}; // TODO return a list of narrators
		  default:
			throw new Error();  // TODO return a list of audios
		}
	}
}

export default searchReducer