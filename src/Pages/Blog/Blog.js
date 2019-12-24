import React, { Fragment, Component } from 'react';
import './Blog.css';
import BackgroundImageHeader from './image/BlogBackgroundHeader.jpg'
import PostsList from './Components/PostsList'
import Footer from './Components/Footer';

class Blog extends Component {

  render() {
    return (
      <Fragment>
        <div className="hero-wrap hero-bread" style={{ backgroundImage: `url(${BackgroundImageHeader})` }}>
          <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
              <div class="col-md-9 text-center">
                <p class="breadcrumbs"><span class="mr-2">xuân tình nguyện 2020</span></p>
                <span class="mb-0 baiviet">BÀI VIẾT</span>
              </div>
            </div>
          </div>
        </div>
        <PostsList />
        <Footer />
      </Fragment >
    )
  }
}

export default Blog;
