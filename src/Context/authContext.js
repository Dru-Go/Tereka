import React, {useReducer, createContext} from 'react';
import AuthReducer from '../Reducer/authReducer';
const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {},
});

const InitalState = {user: null};

function AuthProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, InitalState);

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
