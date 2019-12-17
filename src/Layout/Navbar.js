import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <NavLink activeClassName="currentLink" to="/home">home</NavLink>
        <NavLink activeClassName="currentLink" to="/about">about</NavLink>
        <NavLink activeClassName="currentPage" to="/">notfound</NavLink>
        <NavLink activeClassName="currentPage" to="/nolink">nolink</NavLink>
      </Fragment>
    )
  }
}

export default Navbar;
