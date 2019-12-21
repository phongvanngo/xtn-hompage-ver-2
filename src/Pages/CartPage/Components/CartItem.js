import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../Actions/Actions';

class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: this.props.quantity
		};
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	getImgInContent = (content) => {
		var m = content.indexOf(`<img src=`) + 10;
		var n = m;
		while (content.charAt(n) !== String.fromCharCode(34) && n < content.length) {
			n++;
		}
		return content.slice(m, n);
	};

	render() {
		const item = this.props;
		const backgroundImage = this.getImgInContent(item.img);
		const { quantity } = this.state;
		return (
			<tr className="text-center">
				<td className="product-remove">
					<a onClick={() => this.props.onDeleteItem(item)} href="#1">
						<span className="ion-ios-close" />
					</a>
				</td>
				<td className="image-prod">
					<div className="img" style={{ backgroundImage: `url(${backgroundImage})` }} />
				</td>
				<td className="product-name">
					<h3>{item.tensp}</h3>
					<p>{item.mota}</p>
				</td>
				<td className="price">{item.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
				<td className="quantity">
					<div className="input-group mb-3">
						<input
							onChange={this.handleInputChange}
							type="text"
							name="quantity"
							className="quantity form-control input-number"
							value={quantity}
						/>
					</div>
				</td>
				<td className="total">{(quantity * item.gia).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
				{this.props.onUpdateQuantity(item, quantity)}
			</tr>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateQuantity: (item, quantity) => {
			dispatch(actions.updateQuantity(item, quantity));
		},
		onDeleteItem: (item) => {
			dispatch(actions.deleteItem(item));
		}
	};
};

export default connect(null, mapDispatchToProps)(CartItem);
