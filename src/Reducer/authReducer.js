function authReducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case 'LOGIN':
      // HERE WE CALL GRAPHQL 
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer