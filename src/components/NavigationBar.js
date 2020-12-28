import React, {Component} from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavigationBar extends Component {
    render() {
        return (

        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://www.brphi.org/wp-content/uploads/2018/09/cropped-logo-02.png" width="50" height="50" alt="brand"/> MedTech
            </Link>
            <Nav className="mr-auto">
                          <Link to={"consultation"} className="nav-link">Consultation</Link>
                          <Link to={"patientList"} className="nav-link">Live Clinic List</Link>
                    </Nav>
        </Navbar>


        );
    }
}