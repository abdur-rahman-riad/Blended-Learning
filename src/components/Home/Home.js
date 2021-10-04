import React from 'react';
import { Container, Button } from 'react-bootstrap';
import banner from '../../images/home-banner.png';
import './Home.css';

const Home = () => {
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

            <div className="home-services-container">
                <Container>
                    <h2>Our Services</h2>
                    <div className="home-services-content">
                        <div className="home-service">
                            <h2>Image Here</h2>
                            <h3>Title Here</h3>
                            <h4>Short Description</h4>
                            <h4>Course Duration</h4>
                            <h4>Rating</h4>
                            <h5>Price</h5>
                            <Button>Buy Now</Button>
                        </div>
                        <div className="home-service">
                            <h2>Image Here</h2>
                            <h3>Title Here</h3>
                            <h4>Short Description</h4>
                            <h4>Course Duration</h4>
                            <h4>Rating</h4>
                            <h5>Price</h5>
                            <Button>Buy Now</Button>
                        </div>
                        <div className="home-service">
                            <h2>Image Here</h2>
                            <h3>Title Here</h3>
                            <h4>Short Description</h4>
                            <h4>Course Duration</h4>
                            <h4>Rating</h4>
                            <h5>Price</h5>
                            <Button>Buy Now</Button>
                        </div>
                        <div className="home-service">
                            <h2>Image Here</h2>
                            <h3>Title Here</h3>
                            <h4>Short Description</h4>
                            <h4>Course Duration</h4>
                            <h4>Rating</h4>
                            <h5>Price</h5>
                            <Button>Buy Now</Button>
                        </div>
                    </div>
                    <Button variant="dark">See All</Button>
                </Container>
            </div>
        </div>
    );
};

export default Home;