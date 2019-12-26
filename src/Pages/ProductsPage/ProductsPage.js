import React, { Component } from 'react';
import Title from './Components/Title'
import Products from './Components/Products';
import Footer from './../Blog/Components/Footer'
import './ProductsPage.css'

class ProductsPage extends Component {
  render() {
    return (
      <div className="goto-here">
        <Title/>
        <Products/>
        <Footer/>
      </div>
    )
  }
}

export default ProductsPage;
