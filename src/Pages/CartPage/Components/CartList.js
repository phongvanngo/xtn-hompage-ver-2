import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { connect } from 'react-redux';

class CartList extends Component {
  
  showCartList = cart =>{
    let list = null;
    list = cart.map((item, index) => {
      return (
        <CartItem img = {item.product.img} tensp={item.product.tensp} gia={item.product.gia} quantity={item.quantity} key={index} mota={item.product.mota}/>
      )
    });
    return list;
  }

  render() {
    return (
    <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng cộng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.showCartList(this.props.cartlist)}
                {/* END TR*/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CartTotal cart={this.props.cartlist}/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartlist: state.cart
  }
}

export default connect(mapStateToProps, null)(CartList);