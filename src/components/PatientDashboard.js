import React, {Component} from 'react';

import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';

export default class PatientDashboard extends Component{

    render(){
        return(
            <Jumbotron className="bg-dark text-white">
                                     <h1>Patient Dashboard</h1>
                                                <p/>
                                                <p>
                                                   <Link to={"consultation"} className="nav-link" class="text-success" >New Consultation</Link>
                                                </p>

                                                <p>
                                                    <Link to={"workInProgress"} className="nav-link" class="text-success">Past Consultation Notes</Link>
                                                </p>

                                                <p>
                                                   <Link to={"clinicResultDemographics"} className="nav-link" class="text-success">Results and Clinical Demographic</Link>
                                                </p>

                                                <p>
                                                    <Link to={"workInProgress"} className="nav-link" class="text-success">Prescription</Link>
                                                </p>

                                                <p>
                                                   <Link to={"workInProgress"} className="nav-link" class="text-success">Telemedicine</Link>
                                                </p>

                                                <Button size="sm" variant="outline-primary" >
                                                                      <Link to={{
                                                                         pathname: "/patientList"

                                                                      }}><FontAwesomeIcon icon={faBackward} /> Back
                                                                      </Link>
                                                                   </Button>
            </Jumbotron>
        );
    }

}