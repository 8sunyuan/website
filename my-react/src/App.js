import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Navigationbar from './components/NavigationBar';

export default () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}
