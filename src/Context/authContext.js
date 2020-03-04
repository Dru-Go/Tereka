import React, {useReducer, createContext} from 'react';

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {},
});

const InitalState = {user: null};

function authreducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'LOGIN':
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

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authreducer, InitalState);

  const login = userData => {
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };
  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout}}
      {...props}
    ></AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};
