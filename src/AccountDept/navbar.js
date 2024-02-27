import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './accNav'; // Assuming NavBar is in the same directory

// Your other components
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Appi = () => {
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <Router>
      <NavBar pages={pages} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default Appi;
