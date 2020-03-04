import React from 'react';
import './App.css';
import './tailwind2.css';
import SignUp from './Components/signUp/signUp_Component';
import SignIn from './Components/signIn/signIn_Component';
import Dashboard from './Components/home/Dashboard';
import AuthRoute from './Components/AuthRoute';
import {ThemeProvider} from './Context/themeContext';
import { AuthProvider } from './Context/authContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Paused adding a route to the dashboards 

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Route exact path="/" component={Dashboard}/>
          <AuthRoute exact path="/login" component={SignIn}/>
          <AuthRoute exact path="/register" component={SignUp}/>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
