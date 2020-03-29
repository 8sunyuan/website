import React from 'react';
import './Home.css';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const Home = () => {
    return (
        <React.Fragment>
            <About />
            <Experience />
            <Projects />
        </React.Fragment>
    )
}

export default Home;