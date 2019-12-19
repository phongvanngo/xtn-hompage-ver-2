import { combineReducers } from 'redux';
import posts from './posts'
import isPostViewing from './isPostViewing'
import cart from './cart';
import products from './Product';
import modal from './modal';
import totalCart from './totalcart';

const todoApp = combineReducers({
  posts,
  isPostViewing,
  cart,
  products,
  modal,
  totalCart
})

export default todoApp;