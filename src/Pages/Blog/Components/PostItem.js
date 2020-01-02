import React, { Component, Fragment } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { onPostViewing } from './../../../Actions/Actions';
import { NavLink } from 'react-router-dom';
import './PostItem.css';

class PostsItem extends Component {
	getImgInContent = (content) => {
		var m = content.indexOf(`<img src=`) + 10;
		var n = m;
		while (content.charAt(n) !== String.fromCharCode(34) && n < content.length) {
			n++;
		}
		return content.slice(m, n);
	};

	delImgInContent = (content) => {
		var m = content.indexOf(`<figure`);
		var n = content.indexOf('</figure>', m) + 9;
		while (m > 0) {
			content = content.replace(content.slice(m, n), '');
			m = content.indexOf(`<figure`);
			n = content.indexOf('</figure>', m) + 9;
		}
		return content;
	};

	getDescription = (content) => {
		content = this.delImgInContent(content);
		while (content.indexOf('h1') > 0) {
			content = content.replace('h1', 'strong');
		}
		while (content.indexOf('h2') > 0) {
			content = content.replace('h2', 'strong');
		}
		while (content.indexOf('h3') > 0) {
			content = content.replace('h3', 'strong');
		}
		while (content.indexOf('h4') > 0) {
			content = content.replace('h4', 'strong');
		}
		while (content.indexOf('h5') > 0) {
			content = content.replace('h5', 'strong');
		}
		while (content.indexOf('h6') > 0) {
			content = content.replace('h6', 'strong');
		}
		return content;
	};

	render() {
		console.log(
			this.getImgInContent(
				'<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;Xuân tình nguyện là hoạt động vì cộng đồng&nbsp;thường niên&nbsp;do Thành Đoàn và Hội Sinh Viên Việt Nam TP.HCM phát động cho sinh viên cả nước. Chương trình là cơ hội để người trẻ mang trí tuệ, sức lực của mình cống hiến cho cộng đồng, phát huy&nbsp;tinh thần tương thân tương ái, giúp đỡ nhau trong cuộc sống, qua đó nâng cao phẩm chất, giá trị đạo đức của Đoàn viên - Sinh viên Việt Nam.</p><p><br>&nbsp;</p><figure class="image"><img src="https://static-cdn.uef.edu.vn/newsimg/sinh-vien/Xuan-tinh-nguyen-2017/UEF_xuantinh%20nguyen_2017%20(20).JPG" alt=""></figure><figure class="image"><img src="https://static-cdn.uef.edu.vn/newsimg/sinh-vien/Xuan-tinh-nguyen-2018/UEF_xuan_tinh_nguyen_k%20(21).jpg" alt=""></figure><p><br>&nbsp;</p><figure class="image"><img src="https://static-cdn.uef.edu.vn/newsimg/sinh-vien/Xuan-tinh-nguyen-2017/UEF_xuantinh%20nguyen_2017%20(15).JPG" alt=""></figure><p><i>Những khoảnh khắc đẹp&nbsp;trong hành trình Xuân tình nguyện UEF</i></p><p>Sau các hoạt động&nbsp;tình nguyện mùa Giáng Sinh - "Đông sẻ chia", "Nắng ấm biên cương" thì Xuân tình nguyện được xem&nbsp;là hoạt động khởi đầu một năm mới đầy ý nghĩa của sinh viên UEF. Với chương trình này, các bạn có thể&nbsp;góp một phần công sức của mình để&nbsp;san sẻ những khó khăn cho cộng đồng kém may mắn.<br>Xuân tình nguyện&nbsp;UEF gắn liền với những hoạt động thiết thực như: thăm hỏi các gia đình chính sách, các gia đình có công với cách mạng, thăm Mẹ Việt Nam anh hùng, mang không khí mùa xuân đến với trẻ em mồ côi, khuyết tật, thiểu năng tại các mái ấm, nhà mở. Bên cạnh đó, ban tổ chức chương trình còn lồng ghép các hoạt động giao lưu kết nối với người dân và đơn vị an ninh quốc phòng địa phương.</p><p>&nbsp;</p><figure class="image"><img src="https://static-cdn.uef.edu.vn/newsimg/sinh-vien/Xuan-tinh-nguyen-2017/UEF_xuantinh%20nguyen_2017%20(15).JPG" alt=""></figure><p>&nbsp;</p><p>&nbsp;</p>'
			)
		);
		const backgroundImage = this.getImgInContent(this.props.post.content);
		return (
			<Fragment>
				<div className="col-md-8 d-flex ">  
					<div className="blog-entry align-self-stretch d-md-flex">
						<a className="block-20" style={{ backgroundImage: `url(${backgroundImage})` }} />
						<div className="text d-block pl-md-4">
							<div className="meta mb-3">
								<div>{this.props.post.time_created}</div>
								<div>{' ' + this.props.post.author}</div>
								{/* <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div> */}
							</div>
							<h3 className="heading">
								<NavLink to={'/post/' + this.props.post._id} onClick={this.props.readmore}>
									{this.props.post.title}
								</NavLink>
							</h3>
							<div className="descriptionText">
								{ReactHtmlParser(this.getDescription(this.props.post.content))}
							</div>
							<p>
								<NavLink to={'/post/' + this.props.post._id} onClick={this.props.readmore}>
									{' '}
									<button className="btn btn-primary py-2 px-3" onClick={this.props.readmore}>
										Đọc thêm
									</button>{' '}
								</NavLink>
							</p>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		readmore: () => {
			dispatch(onPostViewing(props.post));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsItem);
