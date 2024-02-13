import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import emailIcon from "../assets/img/email.png";
import phoneIcon from "../assets/img/call.png";
import houseIcon from "../assets/img/home.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <h3>Contact Me</h3>
            <div className="contact-info">
              <div className="contact-item">
                <img className="contact-img" src={emailIcon} alt="Email" />
                <span>abdnoman55@gmail.com</span>
              </div>
              <div className="contact-item">
                <img className="contact-img" src={phoneIcon} alt="Phone" />
                <span>+8801750599033</span>
              </div>
              <div className="contact-item">
                <img className="contact-img" src={houseIcon} alt="House" />
                <span>House #205/1/A, Biyam Ghor Road, East Kazipara, Mirpur, Dhaka-1206, Bangladesh</span>
              </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abdullah-noman-16b45b18b/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://www.facebook.com/jkiuytre3545667?mibextid=2JQ9oc"><img src={navIcon2} alt="facebook" /></a>
              <a href="https://github.com/Noman599033"><img src={navIcon4} alt="github" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
            <p>Developed by Noman</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
