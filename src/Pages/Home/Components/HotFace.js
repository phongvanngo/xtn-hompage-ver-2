import React, { Component, Fragment } from 'react';

class HotFace extends Component {
	render() {
		const faces = [
			{
				avatar: 'https://i.imgur.com/bZomGeq.jpg',
				name: 'Nguyễn Quang Hải',
				job: 'soccer player',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi nesciunt est libero voluptates minima architecto nostrum incidunt ullam cum voluptate aliquid similique, vitae amet praesentium nisi delectus, sit magnam!'
			},
			{
				avatar: 'https://i.imgur.com/Wl95MwQ.jpg',
				name: 'Linoel Messi',
				job: 'student ',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi nesciunt est libero voluptates minima architecto nostrum incidunt ullam cum voluptate aliquid similique, vitae amet praesentium nisi delectus, sit magnam!'
			},
			{
				avatar: 'https://i.imgur.com/O7yw9T3.jpg',
				name: 'Leonardo Da Vinci',
				job: 'artist',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi nesciunt est libero voluptates minima architecto nostrum incidunt ullam cum voluptate aliquid similique, vitae amet praesentium nisi delectus, sit magnam!'
			}
		];
		const showFace = faces.map((ele) => {
			return (
				<div className="col-lg-4">
					<div className="item">
						<div className="testimony-wrap p-4 pb-5">
							<div className="user-img mb-5" style={{ backgroundImage: `url(${ele.avatar})` }}>
								<span className="quote d-flex align-items-center justify-content-center">
									<i className="icon-quote-left" />
								</span>
							</div>
							<div className="text text-center">
								<p className="mb-5 pl-4 line">{ele.description}</p>
								<p className="name">{ele.name}</p>
								<span className="position">{ele.job}</span>
							</div>
						</div>
					</div>
				</div>
			);
		});
		return (
			<Fragment>
				<section className="ftco-section testimony-section">
					<div className="container">
						<div className="row justify-content-center mb-5 pb-3">
							<div className="col-md-7 heading-section  text-center">
								<span className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
								<h2 className="mb-4">Gương mặt xuất sắc xuân tình nguyện 2019</h2>
								<p>
									Far far away, behind the word mountains, far from the countries Vokalia and
									Consonantia, there live the blind texts. Separated they live in
								</p>
							</div>
						</div>
						<div className="row ">{showFace}</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

export default HotFace;
