import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';
import Error404 from '../../images/error.PNG';

const NotFound = () => {
    return (
        <div className="error-container">
            <Container>
                <div className="error-content">
                    <img src={Error404} alt="404 Not Found" />
                    <h1>404 Not Found</h1>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;