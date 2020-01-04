import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Heroes from './components/Heroes'
import Powers from './components/Powers'
import heroInfo from './components/data/heroInfo'
import powersInfo from './components/data/powerInfo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
