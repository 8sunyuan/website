import React from 'react';
import './Home.css';
import About from './About';
import Experience from './Experience';

const Home = () => {
    return (
        <React.Fragment>
            <About />
            <Experience />
        </React.Fragment>
    )
}

export default Home;