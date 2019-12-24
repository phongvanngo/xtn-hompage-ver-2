import React, { Component } from 'react';
import { sumBy } from 'lodash';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class CartTotal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			freeShip: false
		};
	}

	totalAmout = (cart, shippay) => {
		let pay = sumBy(cart, (cartItem) => {
			return cartItem.product.gia * cartItem.quantity;
		});
		return pay + shippay;
	};

	totalPay = (cart) => {
		if (this.state.freeShip === 'true') {
			return this.totalAmout(cart, 0);
		} else return this.totalAmout(cart, 30000);
	};

	deliveryFee = () => {
		let fee;
		fee = this.state.freeShip === 'true' ? 0 : 30000;
		return fee;
	};

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	onTotalPay = () => {
		let shipFee = this.deliveryFee();
		let subFee = this.totalAmout(this.props.cart, 0);
		this.props.onTotalCart(subFee, shipFee);
	};

	render() {
		return (
			<div className="row justify-content-end">
				<div className="col-lg-4 mt-5 cart-wrap ">
					<div className="cart-total mb-3">
						<h3>Mã giảm giá / Quà tặng</h3>
						<p>Nhập Mã giảm giá / Quà tặng </p>
						<form action="#" className="info">
							<div className="form-group">
								<label>Mã giảm giá/ Quà tặng</label>
								<input type="text" className="form-control text-left px-3" />
							</div>
						</form>
					</div>
					<p>
						<a href="checkout.html" className="btn btn-primary py-3 px-4">
							Xác nhận
						</a>
					</p>
				</div>
				<div className="col-lg-4 mt-5 cart-wrap ">
					<div className="cart-total mb-3">
						<h3>Thuế và chi phí vận chuyển</h3>
						<p>Nhập địa điểm của bạn để ước tính chi phí</p>
						<form action="#" className="info">
							<div className="form-group">
								<label>Khu Vực</label>
								<br />
								<select name="freeShip" value={this.state.freeShip} onChange={this.handleChange}>
									<option value="false">Nội Thành</option>
									<option value="true">Làng Đại Học</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="country">Địa chỉ</label>
								<input type="text" className="form-control text-left px-3" placeholder="Địa chỉ" />
							</div>
						</form>
					</div>
					<p>
						<a href="checkout.html" className="btn btn-primary py-3 px-4">
							Ước tính
						</a>
					</p>
				</div>
				<div className="col-lg-4 mt-5 cart-wrap ">
					<div className="cart-total mb-3">
						<h3>Giỏ hàng</h3>
						<p className="d-flex">
							<span>Tạm tính</span>
							<span>
								{this.totalAmout(this.props.cart, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
									' VND'}
							</span>
						</p>
						<p className="d-flex">
							<span>Phí giao hàng</span>
							<span>{this.deliveryFee().toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VND'}</span>
						</p>
						<p className="d-flex">
							<span>Chiết khấu</span>
							<span>0</span>
						</p>
						<hr />
						<p className="d-flex total-price">
							<span>Thành tiền</span>
							<span>
								{this.totalPay(this.props.cart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +
									' VND'}
							</span>
						</p>
					</div>
					<p>
						<NavLink onClick={() => this.onTotalPay()} to="/checkout" className="btn btn-primary py-3 px-4">
							Tiến hành đặt hàng
						</NavLink>
					</p>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTotalCart: (subTotal, delivery) => {
			dispatch(
				actions.totalCart({
					subTotal,
					delivery
				})
			);
		}
	};
};

export default connect(null, mapDispatchToProps)(CartTotal);
