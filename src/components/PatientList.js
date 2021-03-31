import React, {Component} from 'react';

import {Card, Table, Image, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class PatientList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patients :[]
        };
    }




    componentDidMount(){
        //axios.get("http://localhost:8081/rest/books")
            //.then(response => console.log(response.data));
         //axios.get("http://localhost:8081/rest/books")
         //.then(response => response.data)
         //.then((data) => {
            //this.setState({patients: data});
         //});


        var data;
        data = [{"time":"Fri Dec 16 2020 09:15", "patientName":"Amjad Khan", "emrNo":"1234", "dob":"17-09-1988", "reason":"I can't sleep"},
                   {"time":"Fri Dec 16 2020 09:30", "patientName":"Bilal Khan", "emrNo":"786", "dob":"10-09-1978", "reason":"High Blood Pressure"},
                   {"time":"Fri Dec 16 2020 09:45", "patientName":"Nasima Begum", "emrNo":"987", "dob":"23-07-1997", "reason":"Diabetes"}]

        this.setState({patients: data});

    }




    render(){
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Clinic List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                              <th>Time</th>
                              <th>Patient Name</th>
                              <th>EMR No.</th>
                              <th>Date Of Birth</th>
                              <th>Reason</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/*
                                this.state.books.length === 0 ?
                                 <tr align="center">
                                      <td colSpan="6">{this.state.books.length} Books Available.</td>
                                 </tr> :
                                 this.state.books.map((book) => (
                                 <tr key={book.id}>
                                     <td>
                                            <Image src={book.coverPhotoURL} roundedCircle width="25" height="25" /> {book.title}
                                     </td>
                                     <td>{book.author}</td>
                                     <td>{book.isbnNumber}</td>
                                     <td>{book.price}</td>
                                     <td>{book.language}</td>
                                     <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>{''}
                                            <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>
                                        </ButtonGroup>

                                     </td>
                                 </tr>
                                 ))
                            */}

                            {this.state.patients.map((patient) => (
                                                             <tr key={patient.emrNo}>
                                                                 <td>
                                                                       {patient.time}
                                                                 </td>
                                                                 <td>{patient.patientName}</td>
                                                                 <td>{patient.emrNo}</td>
                                                                 <td>{patient.dob}</td>
                                                                 <td>{patient.reason}</td>
                                                                 <td>
                                                                    <ButtonGroup>
                                                                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>{''}
                                                                        <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>
                                                                    </ButtonGroup>

                                                                 </td>
                                                             </tr>
                                                             ))}
                          </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

//export default BookList; refactored