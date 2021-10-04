import React from 'react';
import { Button } from 'react-bootstrap';
import './Course.css';
import Star from '../../images/star.webp';
import Clock from '../../images/clock.png';

const Course = (props) => {
    const { title, description, price, duration, img, rating, ratingCount } = props.course;
    return (
        <div className="single-course">
            <img src={img} alt="" />
            <h5 className="title">{title}</h5>
            <p>{description}</p>
            <div className="enroll-price">
                <h5>${price}</h5>
                <div className="rating">
                    <img src={Star} alt="" />
                    <h5> {rating} ({ratingCount})</h5>
                </div>
                <div className="duration-hour">
                    <img src={Clock} alt="" />
                    <h5>{duration}</h5>
                </div>
            </div>
            <div className="enroll-btn">
                <Button variant="success">Enroll Now</Button>
            </div>
        </div>
    );
};

export default Course;