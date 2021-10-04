import React from 'react';
import { Container } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div className="allCourse-container">
            <Container>
                <h3 className="all-courses">Our All Courses</h3>
                <div className="allCourse-content">
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Courses;