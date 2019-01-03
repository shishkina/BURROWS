import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import CarList from './components/cars/CarList.jsx';
import CarForm from './components/cars/CarForm.jsx';
import CarShow from './components/cars/CarShow.jsx';
import Sentence from './components/Sentence.jsx';

ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <Route path='sentence/:name/:verb/:noun' component={Sentence} />
      <IndexRoute component={About} />
      <Route path="cars" >
        <IndexRoute component={CarList} />
        <Route path="new" component={CarForm} />
        <Route path=":carId" component={CarShow} />
      </Route>
    </Route>
  </Router>
), document.querySelector('#root'));
