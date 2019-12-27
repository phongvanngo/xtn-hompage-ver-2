import React, { Component } from 'react';

class Title extends Component {
	render() {
		return (
			<div
				className="hero-wrap hero-bread"
				style={{
					backgroundImage:
						'url("https://upload.wikimedia.org/wikipedia/commons/f/fa/Nouvel_an_chinois_2015_Paris_13_danse_du_lion.jpg")'
				}}
			>
				<div className="container">
					<div className="row no-gutters slider-text align-items-center justify-content-center">
						<div className="col-md-9 text-center">
							<p class="breadcrumbs">
								<span class="mr-2">xuân tình nguyện 2020</span>
							</p>
							<span class="mb-0 baiviet">GIỎ HÀNG</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Title;
