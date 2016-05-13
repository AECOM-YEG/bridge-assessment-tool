import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from '../../ui/App.jsx';
import Barrier from '../../ui/Barrier.jsx';
import About from '../../ui/components/about.jsx';
import Food from '../../ui/components/food.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="food" component={Food} />
      </Route>
      <Route path="/barriers" component={Barrier} />
    </Router>
  ), document.getElementById('appContainer'));
});