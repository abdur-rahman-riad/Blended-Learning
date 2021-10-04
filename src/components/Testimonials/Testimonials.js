import React from 'react';
import { Container } from 'react-bootstrap';
import './Testimonials.css';
import RandomUser from '../../images/random-user.jpg';
import RandomUser2 from '../../images/random-user2.jpg';
import RandomUser3 from '../../images/random-user3.jpg';

const Testimonials = () => {
    return (
        <div className="testimonial-container">
            <Container>
                <div className="testimonial-content">
                    <div className="tesimonial-cards">
                        <div className="testimonials">
                            <img src={RandomUser} alt="" />
                            <h4>Gong Yoo</h4>
                            <h6>Web Developer</h6>
                            <p>Blended Learning courses are the most useful and effective. I have complete a few courses and it is a great experience for me.</p>
                        </div>
                        <div className="testimonials">
                            <img src={RandomUser2} alt="" />
                            <h4>Alden Heatley</h4>
                            <h6>Researcher</h6>
                            <p>Blended Learning courses are the most useful and effective. I have complete a few courses and it is a great experience for me.</p>
                        </div>
                    </div>

                    <div className="testimonials-list">
                        <h4>Top Review</h4>
                        <hr />
                        <div className="reviewer">
                            <img src={RandomUser} alt="" />
                            <div className="reviewer-info">
                                <h5>Gong Yoo</h5>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        <hr />
                        <div className="reviewer">
                            <img src={RandomUser2} alt="" />
                            <div className="reviewer-info">
                                <h5>Alden Heatley</h5>
                                <p>Researcher</p>
                            </div>
                        </div>
                        <hr />
                        <div className="reviewer">
                            <img src={RandomUser3} alt="" />
                            <div className="reviewer-info">
                                <h5>Willis Blandon</h5>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;