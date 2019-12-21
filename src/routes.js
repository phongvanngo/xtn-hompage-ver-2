import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import Homepage from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import Team from './Pages/Team/Team'
import Post from './Pages/Blog/Components/Post'
import NotFoundpage from './Pages/NotFoundPage/NotFoundPage'

import ProductsPage from './Pages/ProductsPage/ProductsPage';
import CartPage from './Pages/CartPage/CartPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import FeedbackPage from './Pages/FeedbackPage/FeedbackPage';


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
        path: '/product',
        exact: false,
        main: () => <ProductsPage />
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
        path: '/feedback',
        exact: true,
        main: () => <FeedbackPage />
      },
      {
        path: '/post/:post_code',
        exact: false,
        main: ({match}) => <Post match ={match} />
      },
      {
        path: '/cart',
        exact: true,
        main: () => <CartPage />
      },

      {
        path: '/checkout',
        exact: false,
        main: () => <CheckoutPage />
      },
      {
        path: '/',
        exact: false,
        main: () => <NotFoundpage />
      },
      {
        path: '/detailPost/:postcode',
        exact: false,
        main: ({match}) => <Post match={match}/>
      }



    ];

    return (
      <Router>
        <Navbar />
        <Switch>
        <Redirect exact from="/" to="/home" />
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