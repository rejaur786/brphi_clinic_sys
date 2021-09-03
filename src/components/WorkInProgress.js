import React, {Component} from 'react';

import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons';


export default class WorkInProgress extends Component{

    render(){
        return(
            <Jumbotron className="bg-dark text-white">
                                     <h1>Work In Progress....</h1>
                                     <p/>
                                     <Button size="sm" variant="outline-primary" >
                                        <Link to={{
                                            pathname: "/patientDashboard"
                                            }}><FontAwesomeIcon icon={faBackward} /> Back
                                        </Link>
                                     </Button>
            </Jumbotron>
        );
    }

}