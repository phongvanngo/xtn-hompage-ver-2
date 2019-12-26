import React, { Component } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

class GallerySlideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};
	}

	change_picture = (i) => {
		this.setState({
			index: i
		});
	};

	render() {
		const images = [
			{
        src:
        'https://i.imgur.com/KStFwQw.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/MSIEoMV.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/ZHUphUf.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/H15foeF.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/KTVLqlE.jpg',
				width: 4,
				height: 3
			}
		];

		return (
			<div className="GallerySlideshow">
				<Gallery
					enableIndicators={false}
					index={this.state.index}
					onRequestChange={(i) => {
						this.change_picture(i);
					}}
				>
					{images.map((img) => <GalleryImage objectFit="contain" key={img.src} src={img.src} />)}
				</Gallery>
			</div>
		);
	}
}

export default GallerySlideshow;
