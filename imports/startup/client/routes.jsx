import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from '../../ui/App.jsx';
import Barrier from '../../ui/Barrier.jsx';
import About from '../../ui/components/about.jsx';
import Food from '../../ui/components/food.jsx';
import Home from '../../ui/pages/home.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
        <Route path="food" component={Food} />
      </Route>
      <Route path="/barriers" component={Barrier} />
    </Router>
  ), document.getElementById('appContainer'));
});