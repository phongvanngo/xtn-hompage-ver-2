import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsDataRequest } from './../../Actions/Actions'
import './Blog.css';
import BackgroundImageHeader from './image/BlogBackgroundHeader.jpg'
import Article from './Components/Article'


class Blog extends Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

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

        <section className="ftco-section ftco-degree-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 ">
                <div className="row">
                  <div className="col-md-12 d-flex ">
                    <div className="blog-entry align-self-stretch d-md-flex">
                      <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${BackgroundImageHeader})` }}>
                      </a>
                      <div className="text d-block pl-md-4">
                        <div className="meta mb-3">
                          <div><a href="#">July 20, 2019</a></div>
                          <div><a href="#">Admin</a></div>
                          <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                        </div>
                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind
                          texts</a></h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                        the blind texts.</p>
                        <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* .col-md-8 */}
              <div className="col-lg-4 sidebar ">
              </div>
            </div>
          </div>
        </section> {/* .section */}
        <Article />

      </Fragment >
    )
  }
}

const mapStateToProps = (state) => {

  return {
    posts: state.posts
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchPostsDataRequest());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
