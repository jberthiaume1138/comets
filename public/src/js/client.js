import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MyComponent from './components/MyComponent';

const app = document.getElementById('app');

ReactDOM.render(
    <MyComponent/>,
    app
);
