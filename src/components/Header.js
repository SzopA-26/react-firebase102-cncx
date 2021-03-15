import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-CNC 101</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/realtime">RealTimeDB</Nav.Link>
                <Nav.Link href="/firestore">Firestore</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
