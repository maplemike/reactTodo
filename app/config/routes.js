import React from 'react';
import {Router, Route, DefaultRoute} from 'react-router';

import Main from '../components/Main.js';
import Home from '../components/Home.js';

export default (
    <Route name="app" path="/" handler={Main}>

        <DefaultRoute handler={Home} />

    </Route>
);