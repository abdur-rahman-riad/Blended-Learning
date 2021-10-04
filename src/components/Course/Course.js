import React from 'react';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { title, description, price, duration, img } = props.course;
    return (
        <div className="single-course">
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{description}</p>
            <h3>Price: ${price}</h3>
            <p>Duration: {duration}</p>
            <Button>Enroll Now</Button>
        </div>
    );
};

export default Course;