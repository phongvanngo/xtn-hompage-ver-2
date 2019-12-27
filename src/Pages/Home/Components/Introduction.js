import React, { Component, Fragment } from 'react';

class XTNCarousel extends Component {
	render() {
		return (
			<Fragment>
				<section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
					
						<div className="row">
							<div
								className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
								style={{ backgroundImage: 'url("https://i.imgur.com/5ZeL0cQ.jpg")' }}
							>
								<a
									href="https://www.youtube.com/watch?v=o4RLG0L88VM"
									className="icon popup-vimeo d-flex justify-content-center align-items-center"
								>
									<span className="icon-play" />
								</a>
							</div>
							<div className="col-md-7 py-5 wrap-about pb-md-5 ">
								<div className="heading-section-bold mb-4 mt-md-5">
									<div className="ml-md-0">
										<h2 className="mb-4">Xuân tình nguyện 2020 cùng UITers</h2>
									</div>
								</div>
								<div className="pb-md-5">
									<p>
										Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
										right at the coast of the Semantics, a large language ocean.
									</p>
									<p>
										But nothing the copy said could convince her and so it didn’t take long until a
										few insidious Copy Writers ambushed her, made her drunk with Longe and Parole
										and dragged her into their agency, where they abused her for their.
									</p>
									<p>
										<a href="#" className="btn btn-primary">
											Đọc thêm
										</a>
									</p>
								</div>
							</div>
						</div>

				</section>
			</Fragment>
		);
	}
}

export default XTNCarousel;
