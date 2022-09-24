import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import logo from "../assets/img/BMine.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6} md={6} lg={6} xs={10}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a>
								<img src={navIcon1} alt="Icon" />
							</a>
							<a>
								<img src={navIcon2} alt="Icon" />
							</a>
							<a>
								<img src={navIcon3} alt="Icon" />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
