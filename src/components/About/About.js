import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './About.css';
import AboutBanner from '../../images/banner-image.png';
import Harvard from '../../images/harvard.png';
import Oxford from '../../images/oxford.png';
import DIU from '../../images/diu.png';
import DU from '../../images/du.png';
import Buet from '../../images/buet.png';
import MIT from '../../images/mit.png';

const About = () => {
    return (
        <div className="about-container">
            <Container>
                <div className="aboutBanner-content">
                    <div className="aboutBanner-img">
                        <img src={AboutBanner} alt="" />
                    </div>
                    <div className="aboutBanner-details">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum officia, fuga vero necessitatibus praesentium reprehenderit dolore tenetur libero deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis odit saepe tempore repellat iure qui laborum quas iusto tempora?</p>
                        <Button variant="dark">Read More</Button>
                    </div>
                </div>

                <h3>Frequently Ask Question</h3>
                <div className="aboutFaq-content">
                    <div className="faqQuestion">
                        <h5>What we do?</h5>
                        <h5>What we do?</h5>
                        <h5>What we do?</h5>
                        <h5>What we do?</h5>
                    </div>
                    <div className="faqAnswer">
                        <h4>What we do ?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime aperiam ipsam unde eos consequatur obcaecati voluptate incidunt ut minus laborum corporis officiis recusandae, delectus tenetur modi quis nihil expedita repudiandae voluptatem. Necessitatibus libero explicabo a repellendus qui, quaerat debitis placeat iusto. Rerum consequuntur sed rem odit. Illum, quas ea?</p>
                    </div>
                </div>

                <div className="sponsor-content">
                    <h3>We have connection with</h3>
                    <div className="sponsors">
                        <img src={Harvard} alt="" />
                        <img src={Oxford} alt="" />
                        <img src={DIU} alt="" />
                        <img src={DU} alt="" />
                        <img src={Buet} alt="" />
                        <img src={MIT} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;