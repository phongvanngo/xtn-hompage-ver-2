import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <Fragment>

        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled sleep awake" id="ftco-navbar">
          <div className="container">
            <span className="navbar-brand" href="index.html">XUÂN TÌNH NGUYỆN 2020</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="oi oi-menu"></span> Menu
      </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item "><NavLink to="/home" activeClassName="active" className="nav-link">Trang chủ</NavLink></li>
                <li className="nav-item "><NavLink to="/team" activeClassName="active" className="nav-link">Đội hình</NavLink></li>
                <li className="nav-item"><NavLink to="/product" activeClassName="active" className="nav-link">Sản phẩm</NavLink></li>
                <li className="nav-item"><NavLink to="/blog" activeClassName="active" className="nav-link">Bài viết</NavLink></li>
                <li className="nav-item"><NavLink to="/feedback" activeClassName="active" className="nav-link">Hộp thư</NavLink></li>
                <li className="nav-item cta cta-colored"><NavLink to="/cart" activeClassName="active" className="nav-link">
                  <span className="icon-shopping_cart" ><span style={{ 'color': this.props.cart.length > 0 ? 'red' : 'white' }}>{"[" + this.props.cart.length + "]"}</span></span></NavLink></li>

              </ul>
            </div>
          </div>
        </nav>


        {/* <NavLink activeClassName="currentLink" to="/home">home</NavLink>
        <NavLink activeClassName="currentLink" to="/about">about</NavLink>
        <NavLink activeClassName="currentPage" to="/">notfound</NavLink>
        <NavLink activeClassName="currentPage" to="/nolink">nolink</NavLink> */}
      </Fragment >
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps, null)(Navbar);