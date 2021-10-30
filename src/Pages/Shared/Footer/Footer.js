import React from 'react';
import { IoLogoWechat } from 'react-icons/io5';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaWeibo } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import './Footer.css'
const Footer = () => {
	return (
		<div className="footer-bg footer-bg">
			<div className="container mt-5  ">
				<div className="row row-cols-1 row-cols-md-4 g-4">


					<div className="col text-start  footer-text">
						<h5>Get In Touch</h5>
						<p>28-Nanli Road,Hongshan District,Wuhan,China</p>
						<p>Call For More Information
							+8801842403974</p>
						<p>Office Email <br />
							msptonmoy@gmail.com</p>
					</div>

					<div className="col text-start footer-text">
						<h5>About</h5>
						<p>Doctor</p>
						<p>Time Schedule</p>
						<p>Services</p>
						<p>Departments</p>
						<p>Contact</p>
					</div>
					<div className="col text-start footer-text">
						<h5>Opening Hours</h5>
						<p>Sun: <span className="ms-2" >09:00 AM - 09:00 PM</span> </p>
						<p>Mon: <span className="ps-2" >09:00 AM - 09:00 PM</span> </p>
						<p>Tue: <span className="ps-2" >09:00 AM - 09:00 PM</span> </p>
						<p>Wed: <span className="ps-2" >09:00 AM - 09:00 PM</span> </p>
						<p>Thu: <span className="ps-2" >09:00 AM - 09:00 PM</span> </p>
					</div>
					<div className="col text-start footer-text">
						<h5>Follow Us</h5>
						<p> Sunrise Eye Care <br />28-Nanli Road,Hongshan District,Wuhan,China</p>

						{/* Used React Icons */}

						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Inter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
							<button className="btn btn-outline-secondary" type="button" id="button-addon2"><HiCursorClick /></button>
						</div>
						<div className="d-flex align-items-start justify-content-between">
							<h5><IoLogoWechat size="1.5em" /></h5>
							<h5><BsFacebook size="1.5em" /></h5>
							<h5><BsTwitter size="1.5em" /></h5>
							<h5><FaWeibo size="1.5em" /></h5>
						</div>
					</div>
				</div>

			</div>
			<p className="text-white copyright" >CopyRight  &copy; Sunrise Eye Care</p>
		</div>
	);
};

export default Footer;