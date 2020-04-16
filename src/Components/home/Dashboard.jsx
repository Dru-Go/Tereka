import React from 'react';
import Side from '../nav/side';
import Header from '../header/header';
import MidPromos from './midPromo';
import Board from './selectionBoard';
import Play from '../play/Play';
import Suggestion from '../suggestions/suggestions';
import Details from '../details/details';
import Playlist from '../playlist/playlistAudios';
import Top from '../topAudios/trending';
import Sad from '../error/sad';
import Favorites from '../favorites/favorites';
import Suggest from '../suggestions/suggest';
import {PlayProvider} from '../../Context/audioContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import usePageTitle from '../../Hooks/usePageTitle';

const Dashboard = () => {

  usePageTitle('Audiobook Player');

  const filters = [
    '/business',
    '/history',
    '/economy',
    '/fiction',
    '/fantacy',
    '/philosopy',
  ];
  return (
    <PlayProvider>
      <Router>
        <div class="wrapper">
          <Route path="/" component={Side} />
          <div class="main">
            <Route path="/" component={Header} />
            <Route path="/" exact component={MidPromos} />
            <Route path={['/', ...filters]} exact component={Board} />
            <Route path="/play" exact component={Play} />
            <Route path="/suggestions" exact component={Suggestion} />
            <Route path="/suggestions/suggest" exact component={Suggest} />
            <Route path="/trending" exact component={Top} />
            <Route path="/sad" exact component={Sad} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/details/:id" exact component={Details} />
            <Route path="/playlist/:id" exact component={Playlist} />
          </div>
        </div>
      </Router>
    </PlayProvider>
  );
};

export default Dashboard;
