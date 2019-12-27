import React, { Component, Fragment } from 'react';
import './Timeline.css';

class XTNCarousel extends Component {
	render() {
		const activities = [
			{
				time: '24/12/2019',
				title: 'Lễ ra quân chiến dịch xuân tình nguyện',
				content:
					'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				img: 'https://i.imgur.com/mNdTgDw.jpg'
			},
			{
				time: '26/12/2019',
				title: 'Where can I get some?',
				content:
					'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				img: 'https://i.imgur.com/QZ4Atzk.jpg'
			},
			{
				time: '29/12/2019',
				title: 'Where does it come from?',
				content:
					'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
				img: 'https://i.imgur.com/N2dUqEv.jpg'
			}
		];
		const showActivities = activities.map((ele) => {
			return (
				<Fragment>
					<div className="line text-muted" />
					<div className="separator text-muted">
						<time>{ele.time}</time>
					</div>
					<article className="panel panel-danger panel-outline">
						<div className="panel-heading icon">
							<i className="glyphicon glyphicon-heart" />
						</div>
						<div className="panel-body">
							<strong>Someone</strong> favourited your photo.
						</div>
					</article>
					<article className="panel panel-default panel-outline">
						<div className="panel-heading icon">
							<i className="glyphicon glyphicon-picture" />
						</div>
						<div className="blog-entry align-self-stretch d-md-flex">
							<a className="block-20" style={{ backgroundImage: `url(${ele.img})` }} />
						</div>
					</article>
					<article className="panel panel-primary">
						<div className="panel-heading icon">
							<i className="glyphicon glyphicon-plus" />
						</div>
						<div className="panel-heading">
							<h2 className="panel-title">{ele.title}</h2>
						</div>
						<div className="panel-body">{ele.content}</div>
						<div className="panel-footer">
							<small>Footer is also supported!</small>
						</div>
					</article>
				</Fragment>
			);
		});
		return (
			<Fragment>
				<br />
				<br />
				<br />
				<div className="container">
					{/* Page header */}
					<div className="page-header">
						<h2>
							Thời gian{' '}
							<small>
								Sự kiện <code>.chiến dịch xuân tình nguyện 2020</code>
							</small>
						</h2>
					</div>
					{/* /Page header */}
					{/* Timeline */}
					<div className="timeline">
						{/* Line component */}
						{showActivities}
						<article className="panel panel-info panel-outline">
							{/* Icon */}
							<div className="panel-heading icon">
								<i className="glyphicon glyphicon-info-sign" />
							</div>
							{/* /Icon */}
							{/* Body */}
							<div className="panel-body">That is all.</div>
							{/* /Body */}
						</article>
						{/* /Panel */}
					</div>
					{/* /Timeline */}
				</div>
			</Fragment>
		);
	}
}

export default XTNCarousel;
