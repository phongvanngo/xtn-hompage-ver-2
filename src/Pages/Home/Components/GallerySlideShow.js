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
        'https://i.imgur.com/7gdVTEQ.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/sSrjkMF.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/bmjLZft.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/O7yw9T3.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/5ZeL0cQ.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/fAaUfEa.jpg',
				width: 4,
				height: 3
			},
			{
        src:
        'https://i.imgur.com/N2dUqEv.jpg',
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
