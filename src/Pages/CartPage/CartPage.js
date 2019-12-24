import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import CartList from './Components/CartList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './CartPage.css'

class CartPage extends Component {
  render() {
    return (
      <div>
        <Title/>
        <CartList/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default CartPage;
