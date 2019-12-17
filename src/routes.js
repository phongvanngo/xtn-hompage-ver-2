import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import Homepage from './Pages/Hompage/Hompage'
import NotFoundpage from './Pages/NotFoundPage/NotFoundPage'
import About from './Pages/About/About';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {

  render() {

    const routes = [
      {
        path: '/home',
        exact: true,
        main: () => <Homepage />
      },

      {
        path: '/about',
        exact: false,
        main: () => <About />
      },

      {
        path: '/',
        exact: false,
        main: () => <NotFoundpage />
      },
    ];

    return (
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route, index) => {
            return <Route path={route.path} component={route.main} exact={route.exact} key={index} />
          })
          }
        </Switch>
        <Redirect exact from="/" to="/about" />
      </Router>
    );
  }
}

export default Routes;