import React from 'react';
import { Container } from 'react-bootstrap';
import './Other.css';
import Teacher from '../../images/teacher.png';
import Course from '../../images/course.png';
import Students from '../../images/student.png';
import Phone from '../../images/phone.png';
import Mail from '../../images/mail.png';
import Telegram from '../../images/telegram.png';
import Testimonials from '../Testimonials/Testimonials';

const Other = () => {
    return (
        <div className="others-container">
            <Testimonials></Testimonials>
            <Container>
                <div className="counting-content">
                    <div className="counting">
                        <img src={Course} alt="" />
                        <h3>100+ Course</h3>
                    </div>
                    <div className="counting">
                        <img src={Teacher} alt="" />
                        <h3>15+ Teacher</h3>
                    </div>
                    <div className="counting">
                        <img src={Students} alt="" />
                        <h3>1500+ Students</h3>
                    </div>
                </div>

                <hr />

                <div className="contact-details">
                    <h4 className="address">E-615, Arambag, Tulabaria Road, Feni Sadar <br /> Feni, Bangladesh</h4>
                    <div className="contact-content">
                        <div className="contact">
                            <img src={Phone} alt="" />
                            <h4>+8801612345678</h4>
                        </div>
                        <div className="contact">
                            <img src={Mail} alt="" />
                            <h4>blended.learning@gmail.com</h4>
                        </div>
                        <div className="contact">
                            <img src={Telegram} alt="" />
                            <h4>blended.learning</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Other;