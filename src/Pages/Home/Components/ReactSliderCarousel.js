import React, { Component, Fragment } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './ReactSliderCarousel.css'

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
				<Slider autoplay={3000}>
					{content.map((item, index) => (
						<div key={index} style={{ background: `url('${item.image}') no-repeat center center` }}>
							<div className="center">
								<section id="home-section" className="hero">
									<div className="home-slider">
										<div className="slider-item">
											<div className="overlay" />
											<div className="container">
												<div
													className="row slider-text justify-content-center align-items-center"
													data-scrollax-parent="true"
												>
													<div className="col-md-12 text-center">
														<h1 className="mb-2">
															{item.title}
														</h1>
														<h2 className="subheading mb-4">
															{item.description}
														</h2>
														<p>
															<a href="#" className="btn btn-primary">
																View Details
															</a>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					))}
				</Slider>



        <section id="home-section" className="hero">
        <div className="home-slider ">
          <div className="slider-item" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                <div className="col-md-12  text-center">
                  <h1 className="mb-2">Đón xuân tình nguyện cùng uiter &amp; Fruits</h1>
                  <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                  <p><a href="#" className="btn btn-primary">View Details</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                <div className="col-sm-12  text-center">
                  <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
                  <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                  <p><a href="#" className="btn btn-primary">View Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
			</Fragment>
		);
	}
}

export default XTNCarousel;
