import React, { useEffect, useState } from 'react';

import './NavigationBar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { ReactComponent as GitSVG } from '../assets/github.svg';
import { ReactComponent as InstaSVG } from '../assets/instagram.svg';
import { ReactComponent as LinkedSVG } from '../assets/linkedin.svg';


const NavigationBar = () => {
    // react hooks
    const [scroll, setScroll] = useState(true)

    // equivalent to componentDidMount()
    // this avoids overkill of updating state on each scroll. updates only when bool val changes

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 400;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }            
        })
    })  

    return (
    <React.Fragment>
        <Navbar className={scroll ? '' : 'nav-scrolled' } fixed="top" scrolling expand="lg">
            <Container>
            <Navbar.Brand >Yuan Sun</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="d-flex align-items-center"><Nav.Link href="">About</Nav.Link></Nav.Item>
                    <Nav.Item className="d-flex align-items-center"><Nav.Link href="">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="_blank" href="https://github.com/8sunyuan/"><GitSVG width={25} height={35} /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="_blank" href="https://www.linkedin.com/in/yuan-sun-5a8843179/"><LinkedSVG width={25} height={35} /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="_blank" href="https://www.instagram.com/michael_dimsun/"><InstaSVG width={25} height={35} /></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <section id="page-background">
        </section>
    </React.Fragment>
    )
}

export default NavigationBar;