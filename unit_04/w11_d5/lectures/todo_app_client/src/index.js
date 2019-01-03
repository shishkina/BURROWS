import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import Posts from './components/posts.jsx';
import Authors from './components/authors.jsx';
import AuthorShow from './components/authorShow.jsx'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Routes = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <Route path='posts' component={Posts}/>
    <Route path='authors' component={Authors} />
    <Route path='authors/:id' component={AuthorShow} />
  </Route>
</Router>

render(Routes, document.querySelector('.root'));
