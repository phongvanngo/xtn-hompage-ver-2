import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import Homepage from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Team from './Pages/Team/Team'
import NotFoundpage from './Pages/NotFoundPage/NotFoundPage'

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
        path: '/shop',
        exact: false,
        main: () => <Shop />
      },
      {
        path: '/team',
        exact: false,
        main: () => <Team />
      },
      {
        path: '/blog',
        exact: false,
        main: () => <Blog />
      },
      {
        path: '/contact',
        exact: false,
        main: () => <Contact />
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
        <Redirect exact from="/" to="/home" />
      </Router>
    );
  }
}

export default Routes;