import React, {Component} from 'react';

import {Jumbotron, Table} from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default class Dashboard extends Component{
    render(){
        return(
            <Jumbotron className="bg-dark text-white">
                                      <h1>Dashboard Test</h1>

                                      <p/>
                                      <p>
                                       <Link to={"consultation"} className="nav-link" class="text-success" >Consultation</Link>
                                      </p>

                                       <p>
                                       <Link to={"patientList"} className="nav-link" class="text-success">Patient List</Link>
                                      </p>

            </Jumbotron>

        );
    }

}