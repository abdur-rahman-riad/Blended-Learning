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
                        <p>blended learning is always focused on good and quality education. our all courses are organized, easy to learn and we provide practical examples and resource with our courses. our teachers are dedicated to our all students. we provide good support for our students. quality content and good support make our students more and more skilled.</p>
                        <Button variant="dark">Read More</Button>
                    </div>
                </div>

                <h3>Frequently Ask Question</h3>
                <div className="aboutFaq-content">
                    <div className="faqQuestion">
                        <h5>What we do?</h5>
                        <h5>Are These Courses Effective?</h5>
                        <h5>Will we get lifetime support?</h5>
                        <h5>What is the process of enrolling in the courses?</h5>
                    </div>
                    <div className="faqAnswer">
                        <h4>What we do ?</h4>
                        <p>We are always focused on good and quality education. our all courses are organized, easy to learn and we provide practical examples and resource with our courses. our teachers are dedicated to our all students. we provide good support for our students. quality content and good support make our students more and more skilled.</p>
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