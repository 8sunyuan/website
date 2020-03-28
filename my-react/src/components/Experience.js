import React from 'react';
import './Experience.css';
import { Container } from 'react-bootstrap';
import pic from '../assets/mgda.png'

const About = () => {
    return (
        <React.Fragment>
            <Container fluid className="exp-container">
                <Container className="exp-flex">
                <div className="exp-title">Experience</div>
                <div className="position">
                    <div className="job">
                        <div className="company">MGDAnalytics</div>
                        <div className="time">June 2019 - Present</div>
                        <div className="title">Full Stack Developer</div>
                        <div className="description">
                            Created a webserver which webscrapes sports odds for the sake of betting on matches.
                            The webscraper is set up as a background system service on the Linux webserver.
                        </div>
                        <ul>
                            <li>Ruby</li>
                            <li>Rails</li>
                            <li>HTML & (S)CSS</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Selenium</li>
                            <li>PostgreSQL</li>
                            <li>DigitalOcean (Cloud)</li>
                        </ul>

                    </div>
                    <div className="tech">
                        <img className="img-thumbnail shadow" src={pic} width="400px"/>
                        
                    </div>    
                </div>
                <div className="skills">
                        <div></div>
                        <div className="skills-logos">
                        
                        </div>
                    </div>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default About;