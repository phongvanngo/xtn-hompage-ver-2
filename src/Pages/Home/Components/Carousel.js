import React, { Component, Fragment } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class XTNCarousel extends Component {
	render() {
		const images = [
			{
				src: 'https://i.imgur.com/KStFwQw.jpg',
				description: 'xuân tình nguyện 2020'
			},
			{
				src: 'https://i.imgur.com/MSIEoMV.jpg',
				description: 'xuân tình nguyện 2020'
			},
			{
				src: 'https://i.imgur.com/ZHUphUf.jpg',
				description: 'xuân tình nguyện 2020'
			},
			{
				src: 'https://i.imgur.com/H15foeF.jpg',
				description: 'xuân tình nguyện 2020'
			},
			{
				src: 'https://i.imgur.com/KTVLqlE.jpg',
				description: 'xuân tình nguyện 2020'
			}
		];
		var showImg = images.map((ele, index) => {
			return (
				<div>
					<img src={ele.src} />
					<p className="legend">{ele.description}</p>
				</div>
			);
		});
		return (
			<Fragment>
				<Carousel>
					<div>
						<img src="https://i.imgur.com/KStFwQw.jpg" />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src="https://i.imgur.com/MSIEoMV.jpg" />
						<p className="legend">Legend 2</p>
					</div>
					<div>
						<img src="https://i.imgur.com/H15foeF.jpg" />
						<p className="legend">Legend 3</p>
					</div>
				</Carousel>
			</Fragment>
		);
	}
}

export default XTNCarousel;
