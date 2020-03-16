import React from 'react';
import MidPromos from './home/midPromo';
import Board from './home/selectionBoard';
import Page from './home/page';
import Play from './play/Play';
const routes = props => [
  {
    path: '/',
    component: Page([
      <MidPromos promo={props? props.promo:null} />,
      <Board items={props? props.items:null} />,
    ]),
  },
  {
    path: '/play',
    component: Page([<Play audio={props? props.audio:null} />]),
  },
];


export default routes;