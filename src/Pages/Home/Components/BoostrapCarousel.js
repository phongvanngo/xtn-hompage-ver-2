import React, { Component, Fragment } from 'react';

class XTNCarousel extends Component {
	render() {
		const XTMImage = [ 'https://i.imgur.com/evU0EFk.jpg', 'https://i.imgur.com/fywX8C7.jpg' ];
		var showImg = XTMImage.map((ele, index) => {
			return (
				<div className="carousel-item active">
					<img className="d-block w-100" src={ele} alt="First slide" />
				</div>
			);
		});
		return (
			<Fragment>
				<div className="container">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">{showImg}</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleControls"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleControls"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default XTNCarousel;
