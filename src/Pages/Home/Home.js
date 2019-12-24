import React, { Fragment, Component } from 'react';
import './Home.css';
import Footer from './../Blog/Components/Footer';
import XTNCarousel from './Components/Carousel';
import BTCarousel from './Components/ReactSliderCarousel';
class Homepage extends Component {
	render() {
		return (
			<Fragment>
				<BTCarousel />
				<Footer />
			</Fragment>
		);
	}
}

export default Homepage;
