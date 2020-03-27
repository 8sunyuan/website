import React from 'react';
import './NavigationBar.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { ReactComponent as GitSVG } from '../assets/github.svg';
import { ReactComponent as InstaSVG } from '../assets/instagram.svg';
import { ReactComponent as LinkedSVG } from '../assets/linkedin.svg';

const NavigationBar = () => {
    return (
    <React.Fragment>
        <Navbar fixed="top" dark scrolling expand="lg">
            <Container>
            <Navbar.Brand >Yuan Sun</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href=""><GitSVG width={25} height={35} /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href=""><LinkedSVG width={25} height={35} /></Nav.Link></Nav.Item>
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