import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './PostItem.css'

class PostItemSidebar extends Component {

  getImgInContent = (content) => {
    var m = content.indexOf(`<img src=`) + 10;
    var n = m;
    while ((content.charAt(n) !== String.fromCharCode(34)) && (n < content.length)) {
      n++;
    }
    return content.slice(m, n);
  };

  render() {
    const backgroundImage = this.getImgInContent(this.props.post.content);
    return (

      <Fragment>
        <div className="block-21 mb-4 d-flex">
          <a className="blog-img mr-4" style={{ backgroundImage: `url(${backgroundImage})` }} />
          <div className="text">
            <h3 className="heading-1"><NavLink to={"/post/"+this.props.post._id} onClick={this.props.readmore}>{this.props.post.title}</NavLink></h3>
            <div className="meta">
              <div><span class="icon-calendar" />{" " + this.props.post.time_created}</div>
              <div><span className="icon-person" />{" " + this.props.post.author}</div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}



export default PostItemSidebar;