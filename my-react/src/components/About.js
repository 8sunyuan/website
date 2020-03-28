import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import pic from '../assets/profile.png'

const About = () => {
    return (
        <React.Fragment>
            <Container className="about-container">
                <div className="about-title">About Me</div>
                <img className="about-pic rounded-circle" width="200px" src={pic} />
                <div className="about-text">
                Hey! My name is Yuan but I usually go by Michael. I'm a software engineer with a passion for web development.
                I'm currently a fourth year student at the <b>University of Toronto</b> pursuing a degree in <b>computer science</b> in the software engineering stream.
                In the future, I hope to apply my problem solving skills to build high-quality and useful software applications.
                </div>
            </Container>
        </React.Fragment>
    )
}

export default About;