import React from 'react';
import Side from '../nav/side';
import Header from '../header/header';
import MidPromos from './midPromo';
import Board from './selectionBoard';
import Play from '../play/Play';
import {PlayProvider} from '../../Context/audioContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Dashboard = () => {
  const filters = [
    '/business',
    '/history',
    '/economy',
    '/fiction',
    '/fantacy',
    '/philosopy',
  ];
  return (
    <Router>
      <div class="wrapper">
        <Route path="/" component={Side} />
        <div class="main">
          <Route path="/" component={Header} />
          <Route path="/" exact component={MidPromos} />
          <Route path={['/', ...filters]} exact component={Board} />
          <PlayProvider>
            <Route path="/play" exact component={Play} />
          </PlayProvider>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
