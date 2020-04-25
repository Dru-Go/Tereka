
function AuthReducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case 'LOGIN':

      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      localStorage.setItem('auth', null);
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default AuthReducer;
