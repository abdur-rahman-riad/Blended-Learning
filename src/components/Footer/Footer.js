import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="footer-content">
                    {/* Footer Logo */}
                    <div className="footer-logo">
                        <img src={logo} alt="Site Logo" />
                        <h3>Blended Learning</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae tempora ut aliquam fugit culpa iste</p>
                    </div>

                    {/* Important Link */}
                    <div className="important-link">
                        <ul>
                            <h5>Important Link</h5>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Services</li>
                            <li>Custom</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div className="connect-us">
                        <ul>
                            <h5>Connect With Us</h5>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <li>Medium</li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright @ 2021 All Right Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;