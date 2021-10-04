import React from 'react';
import { Container, Button } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import banner from '../../images/home-banner.png';
import Course from '../Course/Course';
import ResearchIcon from '../../images/research.png';
import ProgrammingIcon from '../../images/programming.png';
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
                            <h1>Welcome to <br /> <span>Blended Learning</span></h1>
                            <p>Blended Learning is online course providing platfrom where you will get several courses. These course are based on future demand of technology. you can learn more new thing that will be helpful for build your future carieer. if you are dedicated, determineted then Blended learning could be your best choice.</p>
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
                            <img src={ResearchIcon} alt="" />
                            <h5>Research & Analysis</h5>
                        </div>
                        <div className="category">
                            <img src={ProgrammingIcon} alt="" />
                            <h5>Problem Solving</h5>
                        </div>
                        <div className="category">
                            <img src={ResearchIcon} alt="" />
                            <h5>General Skills</h5>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Four Home Courses */}
            <div className="home-courses-container">
                <Container>
                    <h2 className="our-courses">Our Courses</h2>
                    <hr />
                    <div className="home-courses-content">
                        {
                            homeCourse.map(course => <Course
                                key={course.key}
                                course={course}
                            ></Course>)
                        }
                    </div>
                    <Button variant="dark">See All Courses</Button>
                </Container>
            </div>

        </div>
    );
};

export default Home;