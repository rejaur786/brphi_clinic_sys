import React, {Component} from 'react';

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faBackward} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';



import axios from 'axios';

export default class Consultation extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.consultationChange = this.consultationChange.bind(this);
        this.submitConsultancy = this.submitConsultancy.bind(this);
    }

    initialState = {
        problem:'', history:'', pastMedicalHistory:'', familyHistory:'', examination:'', medication:'', allergy:'', diagnoses:'', investigation:'', plan:'', prescription:''
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    submitConsultancy = event => {
        //alert('Title: ' + this.state.title+ ', Author: ' + this.state.author + ', Cover Photo URL : ' + this.state.coverPhotoURL + ', ISBN Number : ' + this.state.isbnNumber + ', Price : ' + this.state.price + ', Language : ' + this.state.language);
        event.preventDefault();

        var emridValue = "emrid_3";
        var consultationidValue = "consultation_10";

        const consultation = {
            consultationid: consultationidValue,
            emrid: emridValue,
            problem: this.state.problem,
            history: this.state.history,
            pastMedicalHistory : this.state.pastMedicalHistory,
            familyHistory: this.state.familyHistory,
            examination : this.state.examination,
            medication : this.state.medication,
            allergy : this.state.allergy,
            differentialDiagnoses : this.state.diagnoses,
            investigation : this.state.investigation,
            plan : this.state.plan,
            prescription: this.state.prescription,
        };

        alert('problem: ' + this.state.problem+ ', history: ' + this.state.history + ', pastMedicalHistory : ' +
        this.state.pastMedicalHistory + ', familyHistory : ' + this.state.familyHistory + ', examination : ' + this.state.examination + ', medication : ' +
        this.state.medication + ', allergy : ' + this.state.allergy + ', diagnoses : ' + this.state.diagnoses +
        ', investigation : ' + this.state.investigation + ', plan  : ' + this.state.plan + ', prescription : ' + this.state.prescription);


        axios.post("https://ji224k9a68.execute-api.ap-south-1.amazonaws.com/dev/gramgp/consultation", consultation)
            .then(response => {
                if(response.data != null){
                    this.setState(this.initialState);
                    alert("Consultation Saved Successfully");
                }
            });
    }

    consultationChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){

        const{problem, history, pastMedicalHistory, familyHistory, examination, medication, allergy, diagnoses, investigation, plan, prescription} = this.state;

            return(
                 <Card className={"border border-dark bg-dark text-white"}>
                                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Consultation</Card.Header>
                                <Card.Body>
                                    <Form onReset={this.resetBook} onSubmit={this.submitConsultancy} id="consultationFormId">
                                        <Form.Row>
                                          <Form.Group as={Col} controlId="formGridProblem">
                                            <Form.Label>Problem</Form.Label>
                                            <Form.Control required autoComplete="off"
                                                type="test"
                                                name="problem"
                                                value={problem}
                                                onChange={this.consultationChange}
                                                className={"bg-dark text-white"}
                                                placeholder="Enter Problem"
                                                as="textarea" rows="2" />
                                          </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                          <Form.Group as={Col} controlId="formGridHistory">
                                               <Form.Label>History</Form.Label>
                                                   <Form.Control required autoComplete="off"
                                                     type="test"
                                                     name="history"
                                                     value={history}
                                                     onChange={this.consultationChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter History"
                                                     as="textarea" rows="10"  />
                                          </Form.Group>
                                        </Form.Row>



                                        <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridPastMedicalHistory">
                                                       <Form.Label>Past Medical History</Form.Label>
                                                       <Form.Control required autoComplete="off"
                                                          type="test"
                                                          name="pastMedicalHistory"
                                                          value={pastMedicalHistory}
                                                          onChange={this.consultationChange}
                                                          className={"bg-dark text-white"}
                                                          placeholder="Enter Past Medical History"
                                                          as="textarea" rows="3" />
                                                    </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridFamilyHistory">
                                                       <Form.Label>Family History</Form.Label>
                                                       <Form.Control required autoComplete="off"
                                                          type="test"
                                                          name="familyHistory"
                                                          value={familyHistory}
                                                          onChange={this.consultationChange}
                                                          className={"bg-dark text-white"}
                                                          placeholder="Enter Family History"
                                                           as="textarea" rows="2" />
                                                       </Form.Group>
                                         </Form.Row>
                                         <Form.Row>
                                            <Form.Group as={Col} controlId="formGridExamination">
                                                <Form.Label>Examination</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                     type="test"
                                                     name="examination"
                                                     value={examination}
                                                     onChange={this.consultationChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter Examination"
                                                     as="textarea" rows="10" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridMedication">
                                                <Form.Label>Medication</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                    type="test"
                                                    name="medication"
                                                    value={medication}
                                                    onChange={this.consultationChange}
                                                    className={"bg-dark text-white"}
                                                    placeholder="Enter Medication"
                                                    as="textarea" rows="5"  />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridAllergy">
                                                    <Form.Label>Allergy</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="allergy"
                                                         value={allergy}
                                                         onChange={this.consultationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Allergies"
                                                         as="textarea" rows="3"  />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridDiagnoses">
                                                    <Form.Label>Diagnoses</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="diagnoses"
                                                         value={diagnoses}
                                                         onChange={this.consultationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Diagnoses"
                                                         as="textarea" rows="3"
                                                         />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridInvestigation">
                                                    <Form.Label>Investigation</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="investigation"
                                                         value={investigation}
                                                         onChange={this.consultationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Investigation Details"
                                                         as="textarea" rows="4" />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridPlan">
                                                    <Form.Label>Plan</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="plan"
                                                         value={plan}
                                                         onChange={this.consultationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Plan Details"
                                                         as="textarea" rows="3" />
                                                </Form.Group>
                                            </Form.Row>
                                             <Form.Row>
                                                <Form.Group as={Col} controlId="formGridPrescription">
                                                    <Form.Label>Prescription</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="prescription"
                                                         value={prescription}
                                                         onChange={this.consultationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Prescription Details"
                                                         as="textarea" rows="3" />
                                                </Form.Group>
                                             </Form.Row>

                                        <Card.Footer style={{"textAlign":"right"}}>
                                            <Button size="sm "variant="success" type="submit">
                                               <FontAwesomeIcon icon={faSave} /> Submit
                                            </Button>{'  '}
                                            <Button size="sm "variant="info" type="reset">
                                                <FontAwesomeIcon icon={faUndo} /> Reset
                                            </Button>{'  '}
                                             <Button size="sm" variant="outline-primary" >
                                                <Link to={{
                                                  pathname: "/patientDashboard"
                                                  }}><FontAwesomeIcon icon={faBackward} /> Back
                                                </Link>
                                             </Button>
                                        </Card.Footer>
                                    </Form>
                                </Card.Body>
                  </Card>
            );
        }
}

