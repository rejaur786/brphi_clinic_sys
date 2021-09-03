import React, {Component} from 'react';

import {Jumbotron, Table} from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default class WorkInProgress extends Component{

    render(){
        return(
            <Jumbotron className="bg-dark text-white">
                                     <h1>Work In Progress....</h1>
            </Jumbotron>

        );
    }

}