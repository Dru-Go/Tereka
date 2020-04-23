import React from 'react';
import sadSVG from './sad.svg';

const sad = () => (
  <div class="w-full h-80p" style={{display: 'grid'}}>
    <img class="w-40 h-40 m-auto" src={sadSVG} alt="sadSVG" />
  </div>
);

export default sad;
