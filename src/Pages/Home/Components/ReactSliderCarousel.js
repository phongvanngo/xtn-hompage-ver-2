import React, { Component, Fragment } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './ReactSliderCarousel.css';

class XTNCarousel extends Component {
	render() {
		const content = [
			{
				image: 'https://i.imgur.com/evU0EFk.jpg',
				title: 'Đón xuân tình nguyện cùng uiter &amp',
				description: 'uiter is the best'
			},
			{
				image: 'https://i.imgur.com/fywX8C7.jpg',
				title: 'Đón xuân tình nguyện cùng uiter &amp',
				description: 'uiter is the best'
			}
		];

		return (
			<Fragment>
				<Slider autoplay={3000}>{content.map((item, index) => <img src={item.image} alt="" />)}</Slider>
			</Fragment>
		);
	}
}

export default XTNCarousel;
