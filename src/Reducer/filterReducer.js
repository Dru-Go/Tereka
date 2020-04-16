function filterReducer(state, action) {
  console.log('ACTION CALLED IS ', action.type);
  console.log('STATE  IS ', state);
  state = action.value;
  switch (action.type) {
    case 'BUSINESS':
      return state.filter(audio => audio.Type === 'Business');
    case 'HISTORY':
      return state.filter(audio => audio.Type === 'History');
    case 'ECONOMY':
      return state.filter(audio => audio.Type === 'Economy');
    case 'FICTION':
      return state.filter(audio => audio.Type === 'Fiction');
    case 'FANTACY':
      return state.filter(audio => audio.Type === 'Fantacy');
    case 'PHILOSOPY':
      return state.filter(audio => audio.Type === 'Philosophy');
    default:
      return state;
  }
}

export default filterReducer;
