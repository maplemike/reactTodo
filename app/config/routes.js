import React from 'react';
import {Router, Route, DefaultRoute} from 'react-router';

import Main from '../components/Main.js';
import Home from '../components/Home.js';
import ToDo from '../components/ToDo.js';

export default (
    <Route name="app" path="/" handler={Main}>

        <Route name="todo" path="/todo/:tdid" handler={ToDo} />

        <DefaultRoute handler={Home} />

    </Route>
);