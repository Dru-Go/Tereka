import React from 'react';
import './tailwind.css';
import './App.css';
import SignUp from './Components/signUp/signUp_Component';
import SignIn from './Components/signIn/signIn_Component';
import Dashboard from './Components/home/Dashboard';
import AuthRoute from './Components/AuthRoute';
import {ThemeProvider} from './Context/themeContext';
import {AuthProvider} from './Context/authContext';
import {createHttpLink} from 'apollo-link-http';

import {Route} from 'react-router-dom';

import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';


const httpLink = createHttpLink({
  uri: 'http://localhost:8080/query',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider>
          <Route exact path="/" component={Dashboard} />
          <AuthRoute exact path="/login" component={SignIn} />
          <AuthRoute exact path="/register" component={SignUp} />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
