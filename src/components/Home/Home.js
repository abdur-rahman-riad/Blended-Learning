import React from 'react';
import { Container, Button } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import banner from '../../images/home-banner.png';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {

    const [courses] = useCourses();
    const homeCourse = courses.slice(0, 4);

    return (
        <div className="home-container">
            <div className="banner-container">
                <Container>
                    <div className="banner-content">
                        <div className="banner-details">
                            <h1>Welcome to Blended Learning</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae harum rem, quae consequatur earum veritatis dolorum. Eos, ratione voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, veniam!</p>
                            <Button className="btn-design" variant="dark">Learn More</Button>
                            <Button className="btn-design" variant="dark">Enroll Now</Button>
                        </div>
                        <div className="banner-img">
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="category-container">
                <Container>
                    <div className="category-content">
                        <div className="category">
                            <h2>Content-1</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, alias.</p>
                        </div>
                        <div className="category">
                            <h2>Content-1</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, alias.</p>
                        </div>
                        <div className="category">
                            <h2>Content-1</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, alias.</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Four Home Courses */}
            <div className="home-courses-container">
                <Container>
                    <h2>Our Courses</h2>
                    <div className="home-courses-content">
                        {
                            homeCourse.map(course => <Course
                                key={course.key}
                                course={course}
                            ></Course>)
                        }
                    </div>
                    <Button variant="dark">See All</Button>
                </Container>
            </div>

        </div>
    );
};

export default Home;