import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigationbar from './components/NavigationBar';

export default () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <Home />
    </React.Fragment>
  );
}
