import React, { useEffect, useState } from 'react';

import './NavigationBar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
// SVG icons from flaticon.com
import { ReactComponent as GitSVG } from '../assets/github.svg';
import { ReactComponent as InstaSVG } from '../assets/instagram.svg';
import { ReactComponent as LinkedSVG } from '../assets/linkedin.svg';
import { ReactComponent as ArrowSVG } from '../assets/down-arrow.svg';


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
            <Container fluid>
            <Navbar.Brand >Yuan Sun</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="d-flex align-items-center"><Nav.Link href="" className="text-dark">About</Nav.Link></Nav.Item>
                    <Nav.Item className="d-flex align-items-center"><Nav.Link href="" className="text-dark">Experience</Nav.Link></Nav.Item>
                    <Nav.Item className="d-flex align-items-center"><Nav.Link href="" className="text-dark">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="_blank" href="https://github.com/8sunyuan/"><GitSVG width={25} height={35} /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="_blank" href="https://www.linkedin.com/in/yuan-sun-5a8843179/"><LinkedSVG width={25} height={35} /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="_blank" href="https://www.instagram.com/michael_dimsun/"><InstaSVG width={25} height={35} /></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid className="page-background">
            <div className="head-1">HI, I'M YUAN SUN</div>
            <div className="head-2">Computer Scientist / Software Engineer</div>
            <div className="head-2">michaelsun97@gmail.com</div>
            <div className="arrow"><Nav.Link href=""><ArrowSVG width={45}/></Nav.Link></div>
        </Container>
    </React.Fragment>
    )
}

export default NavigationBar;