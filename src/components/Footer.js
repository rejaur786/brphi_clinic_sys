import React, {Component} from 'react';

import {Navbar, Container, Col} from 'react-bootstrap';


export default class Footer extends Component{
    render(){
        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                 <Container>
                                   <Col lg={12} className="text-centre text-muted">
                                        <div>{fullYear},  All Rights Reserved By MedTech</div>
                                    </Col>
                  </Container>
            </Navbar>
        );
    }

}