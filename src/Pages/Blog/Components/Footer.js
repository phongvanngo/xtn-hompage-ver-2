import React, { Component } from 'react';

class Footer extends Component {
	scrollTop = () => {
		window.scroll(0, 0);
	};
	render() {
		return (
			<footer className="ftco-footer ftco-section">
				<div className="container">
					<div className="row">
						<div className="mouse">
							<a href="#/" className="mouse-icon" onClick={this.scrollTop}>
								<div className="mouse-wheel">
									<span className="ion-ios-arrow-up" />
								</div>
							</a>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Sản phẩm xuân tình nguyện</h2>
								<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
									<li className="">
										<a href="#/">
											<span className="icon-twitter" />
										</a>
									</li>
									<li className="">
										<a href="#/">
											<span className="icon-facebook" />
										</a>
									</li>
									<li className="">
										<a href="#/">
											<span className="icon-instagram" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4 ml-md-5">
								<h2 className="ftco-heading-2">Danh sách</h2>
								<ul className="list-unstyled">
									<li>
										<a href="#/" className="py-2 d-block">
											Trang chủ
										</a>
									</li>
									<li>
										<a href="#/" className="py-2 d-block">
											Mua hàng
										</a>
									</li>
									<li>
										<a href="#/" className="py-2 d-block">
											Bài viết
										</a>
									</li>
									<li>
										<a href="#/" className="py-2 d-block">
											Hộp thư
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Giúp đỡ</h2>
								<div className="d-flex">
									<ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
										<li>
											<a href="#/" className="py-2 d-block">
												Thông tin giao hàng
											</a>
										</li>
										<li>
											<a href="#/" className="py-2 d-block">
												Trả hàng &amp; Chuyển đổi
											</a>
										</li>
										<li>
											<a href="#/" className="py-2 d-block">
												Điều khoản &amp; Điều kiện
											</a>
										</li>
										<li>
											<a href="#/" className="py-2 d-block">
												Chính sách bảo mật
											</a>
										</li>
									</ul>
									<ul className="list-unstyled">
										<li>
											<a href="#/" className="py-2 d-block">
												FAQs
											</a>
										</li>
										<li>
											<a href="#/" className="py-2 d-block">
												Liên hệ
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Đặt câu hỏi?</h2>
								<div className="block-23 mb-3">
									<ul>
										<li>
											<span className="icon icon-map-marker" />
											<span className="text">
												WebdevStudio, Trường ĐHCNTT, Xã Dĩ An, Bình Dương
											</span>
										</li>
										<li>
											<a href="#/">
												<span className="icon icon-phone" />
												<span className="text">+2 392 3929 210</span>
											</a>
										</li>
										<li>
											<a href="#/">
												<span className="icon icon-envelope" />
												<span className="text">webdevstudio.org</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
