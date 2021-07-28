import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Courses from 'pages/Courses';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/courses'>
          <Courses />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
