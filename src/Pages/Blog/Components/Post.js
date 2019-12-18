import React, { Component, Fragment } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { offPostViewing } from './../../../Actions/Actions'
class Post extends Component {

  editImageInContent = (content) => {
    var m = content.indexOf(`<img `);
    while (m > 0) {
      content = content.slice(0, m + 5) + 'class = "img-fluid" ' + content.slice(m + 5);
      m = content.indexOf(`<img `, m + 4);
    }
    return content;

  }

  render() {
    // console.log(this.editImageInContent("><figure class=\"image\"><img src=\"https://i.imgur.com/qCu7mgK.jpg\"></figure>"))
    return (
      // <div className="container">
      //   {ReactHtmlParser(html)}
      // </div>
      <Fragment>
        <section className="ftco-section ftco-degree-bg">
          <div className="container">
            <div className="row">
              <p style ={{padding:0}} className="col-lg-12 ">
                <span style={{ fontWeight: 800,fontSize:'50px',color:'black' }} className="mb-3">{this.props.post.title}</span >
              </p>
              <p>
                {ReactHtmlParser(this.editImageInContent(this.props.post.content))}
              </p>

            </div>
          </div>
        </section>
        <button style={{ position: "fixed", top: "90vh", left: "90vw" }} className="btn btn-primary py-2 px-3 " onClick={this.props.comeBack}>Quay lại</button>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    post: state.isPostViewing
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    comeBack: () => {
      dispatch(offPostViewing());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);