import React from 'react';
import './Projects.css';
import Card from './Card';
import { Container } from 'react-bootstrap';


const Projects = () => {
    return (
        <React.Fragment>
            <Container fluid id="Projects" className="proj-container">
                <div className="projects">
                    <div className="proj-title">PROJECTS</div>
                    <div className="proj-text">Here are some projects that I've completed or am currently working on!</div>
                    <div className="proj-cards">
                        <Card 
                            title="Vancouver Parking Ticket Webpage"
                            text="Created a webpage that displays parking ticket data in Vancouver from 2019. All data taken from Vancouver Open Data API. 
                                Displays aggregate data as well as specific addresses."
                            linkurl="https://8sunyuan.github.io/website/"
                            tech={["React.js", "Express.js", "Node.js", "MongoDB", "VancouverOpenData", "Google Maps Javascript API", "Heroku"]}
                        />
                        <Card 
                            title="Mozilla Donation Page"
                            giturl="https://github.com/CSCD01/donate-wagtail-team34"
                            linkurl="https://donate.mozilla.org/en-US/"
                            text="Helped contribute to Mozilla's open source Donate-Wagtail stack. Fixed several open issues on their Github."
                            tech={["Django", "React", "Docker"]}
                        />
                        <Card 
                            title="Convolutional Neural Network"
                            giturl="https://github.com/8sunyuan/cnn/tree/master"
                            text="Created an image classifier using a convolutional neural network. Data taken from the CIFAR-10 dataset."
                            tech={["Python", "PyTorch"]}
                        />
                        <Card 
                            title="Dijkstra's Algorithm"
                            giturl="https://github.com/8sunyuan/personal_code/tree/master/dijkstra"
                            text="Implemented Dijkstra's shortest paths algorithm with an adjacency list or a adjacency matrix. Adjacency matrix has constant lookup time for an edge as opposed to adjacency list but comes with larger space complexity."
                            tech={["C", "Linux", "CentOS"]}
                        />
                        <br/>
                        <Card 
                            title="Data Structures and Algorithms"
                            giturl="https://github.com/8sunyuan/personal_code"
                            text="Extra programming for data structures and algorithms. Used Algorithms in C textbook by Robert SedgeWick."
                            tech={["C", "C++", "Linux", "CentOS"]}
                        />
                    </div>
                </div>
            </Container>
            
        </React.Fragment>
    )
}

export default Projects;