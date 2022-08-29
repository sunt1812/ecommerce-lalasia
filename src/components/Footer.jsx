import React from 'react'
import logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
		<div className="footer__container container">
			<div className="footer__left">
				<img src={logo} alt="" className="footer__logo" />
				<p className="footer__desc">Lalasia is digital agency that help you make better experience iaculis cras in.</p>
			</div>
			<div className="footer__right">
				<div className="footer__block">
					<div className="footer__block-title">Product</div>
					<ul className="footer__block-list">
						<li className="footer__block-item">New Arrivals</li>
						<li className="footer__block-item">Best Selling</li>
						<li className="footer__block-item">Home Decor</li>
						<li className="footer__block-item">Kitchen Set</li>
					</ul>
				</div>
				<div className="footer__block">
					<div className="footer__block-title">Services</div>
					<ul className="footer__block-list">
						<li className="footer__block-item">Catalog</li>
						<li className="footer__block-item">Blog</li>
						<li className="footer__block-item">FaQ</li>
						<li className="footer__block-item">Pricing</li>
					</ul>
				</div>
				<div className="footer__block">
					<div className="footer__block-title">Follow Us</div>
					<ul className="footer__block-list">
						<li className="footer__block-item">Facebook</li>
						<li className="footer__block-item">Instagram</li>
						<li className="footer__block-item">Twitter</li>
					</ul>
				</div>
			</div>
		</div>
    </footer>
  )
}

export default Footer