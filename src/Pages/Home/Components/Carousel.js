import React, { Component } from 'react';
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
			<div className="">
				<Carousel
					// showIndicators={true}
					// showThumbs={false}
					// autoPlay={true}
					// stopOnHover={false}
					// transitionTime={500}
					// infiniteLoop={true}
					// interval={5000}
				>
					<div>
						<img src="https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
						<p className="legend">Legend 1</p>
					</div>
					<div>
						<img src="https://images.unsplash.com/photo-1558088458-b65180740294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80" />
						<p className="legend">
							<button type="button" class="btn btn-primary">
								tham gia
							</button>
						</p>
					</div>
					<div>
						<img src="https://images.unsplash.com/photo-1557939403-1760a0e47505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1931&q=80" />
						<p className="legend">Legend 3</p>
					</div>
				</Carousel>
			</div>
		);
	}
}

export default XTNCarousel;
