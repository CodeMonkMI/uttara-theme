import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Blogs from 'pages/Blogs';
import Courses from 'pages/Courses';
import Home from 'pages/Home';
import Instructors from 'pages/Instructors';
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
        <Route path='/instructors'>
          <Instructors />
        </Route>
        <Route path='/blog'>
          <Blogs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
