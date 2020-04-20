function filterReducer(state, action) {
  console.log('ACTION CALLED IS ', action.type);
  const audios = action.value;
  switch (action.type) {
    case 'BUSINESS':
      return audios.filter(audio => audio.Type === 'Business');
    case 'HISTORY':
      return audios.filter(audio => audio.Type === 'History');
    case 'ECONOMY':
      return audios.filter(audio => audio.Type === 'Economy');
    case 'FICTION':
      return audios.filter(audio => audio.Type === 'Fiction');
    case 'FANTACY':
      return audios.filter(audio => audio.Type === 'Fantacy');
    case 'PHILOSOPY':
      return audios.filter(audio => audio.Type === 'Philosophy');
    default:
      return audios;
  }
}

export default filterReducer;
