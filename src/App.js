import React from 'react';
import './tailwind.css';
import './App.css';
import SignUp from './Components/signUp/signUp_Component';
import SignIn from './Components/signIn/signIn_Component';
import Dashboard from './Components/home/Dashboard';
import AuthRoute from './Components/AuthRoute';
import {ThemeProvider} from './Context/themeContext';
import {AuthProvider} from './Context/authContext';
import {Route} from 'react-router-dom';
// import routes from './Components/routes'

// Paused adding a route to the dashboards

function App() {
  return (
      <AuthProvider>
        <ThemeProvider>
          <Route exact path="/" component={Dashboard} />
          <AuthRoute exact path="/login" component={SignIn} />
          <AuthRoute exact path="/register" component={SignUp} />
        </ThemeProvider>
      </AuthProvider>
  );
}

export default App;
