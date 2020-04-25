import React, { Component } from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../styling/CustomNavBar.css'

export default class CustomNavBar extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="link-coloring" >
                <Navbar.Brand href="/" to="/">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                CTG Engineering
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" className="Nav-text">Home</NavLink>
                        <NavLink to="production" className="Nav-text">Production</NavLink>
                        <NavLink to="mixing" className="Nav-text">Mixing</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}