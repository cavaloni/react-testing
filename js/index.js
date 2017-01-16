require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board 
        title="my fricking title"
        lists={["weird", "rad", "vulgar"]} 
        cards={[["butt", "toad", "frick"], 
            ["butt", "toad", "frick"],
            ["wack", "mad", "frad"]]}
        />, 
        
        document.getElementById('app'))
);
