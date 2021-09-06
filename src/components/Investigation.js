import React, {Component} from 'react';

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faBackward} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class Investigation extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.investigationChange = this.investigationChange.bind(this);
        this.submitInvestigation = this.submitInvestigation.bind(this);
    }

    initialState = {
        dateOfInvestigation:'', renalProfile:'', liverFunction:'', hba1c:'', lipidProfile:'', egfr:'', fbc:'', urine:'', otherInvestigations:''
    }

    resetInvestigation = () => {
        this.setState(() => this.initialState);
    }


    submitInvestigation = event => {
        //alert('Title: ' + this.state.title+ ', Author: ' + this.state.author + ', Cover Photo URL : ' + this.state.coverPhotoURL + ', ISBN Number : ' + this.state.isbnNumber + ', Price : ' + this.state.price + ', Language : ' + this.state.language);
        event.preventDefault();

        var emridValue = "emrid_1";
        var investigationidValue = "investigation_" + uuidv4();

        const investigation = {
            investigationid: investigationidValue,
            emrid: emridValue,
            dateOfInvestigation: this.state.dateOfInvestigation,
            renalProfile: this.state.renalProfile,
            liverFunction : this.state.liverFunction,
            hba1c: this.state.hba1c,
            lipidProfile : this.state.lipidProfile,
            egfr : this.state.egfr,
            fbc : this.state.fbc,
            urine : this.state.urine,
            otherInvestigations : this.state.otherInvestigations
        };

        alert('dateOfInvestigation: ' + this.state.dateOfInvestigation + ', renalProfile: ' + this.state.renalProfile + ', liverFunction : ' +
        this.state.liverFunction + ', hba1c : ' + this.state.hba1c + ', lipidProfile : ' + this.state.lipidProfile + ', egfr : ' +
        this.state.egfr + ', fbc : ' + this.state.fbc + ', urine : ' + this.state.urine + ', otherInvestigations  : ' + this.state.otherInvestigations);


        axios.post("https://ji224k9a68.execute-api.ap-south-1.amazonaws.com/dev/gramgp/investigations", investigation)
            .then(response => {
                if(response.data != null){
                    this.setState(this.initialState);
                    alert("Investigation Saved Successfully");
                }
            });
    }

    investigationChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }



    render(){

        const{dateOfInvestigation, renalProfile, liverFunction, hba1c, lipidProfile, egfr, fbc, urine, otherInvestigations} = this.state;

            return(
                 <Card className={"border border-dark bg-dark text-white"}>
                                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Investigation</Card.Header>
                                <Card.Body>
                                    <Form onReset={this.resetInvestigation} onSubmit={this.submitInvestigation} id="investigationFormId">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridDateOfInvestigation">
                                                 <Form.Label>Date Of Investigation</Form.Label>
                                                 <Form.Control required autoComplete="off"
                                                   type="test"
                                                   name="dateOfInvestigation"
                                                   value={dateOfInvestigation}
                                                   onChange={this.investigationChange}
                                                   className={"bg-dark text-white"}
                                                   placeholder="Enter Date"
                                                   as="textarea" rows="1" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                          <Form.Group as={Col} controlId="formGridRenalProfile">
                                            <Form.Label>Renal Profile</Form.Label>
                                            <Form.Control required autoComplete="off"
                                                type="test"
                                                name="renalProfile"
                                                value={renalProfile}
                                                onChange={this.investigationChange}
                                                className={"bg-dark text-white"}
                                                placeholder="Enter Renal Profile"
                                                as="textarea" rows="1" />
                                          </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                          <Form.Group as={Col} controlId="formGridLiverFunction">
                                               <Form.Label>Liver Function</Form.Label>
                                                   <Form.Control required autoComplete="off"
                                                     type="test"
                                                     name="liverFunction"
                                                     value={liverFunction}
                                                     onChange={this.investigationChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter Liver Function"
                                                     as="textarea" rows="1"  />
                                          </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridHba1c">
                                                       <Form.Label>Hba1c</Form.Label>
                                                       <Form.Control required autoComplete="off"
                                                          type="test"
                                                          name="hba1c"
                                                          value={hba1c}
                                                          onChange={this.investigationChange}
                                                          className={"bg-dark text-white"}
                                                          placeholder="Enter Hba1c"
                                                          as="textarea" rows="1" />
                                                    </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridLipidProfile">
                                                       <Form.Label>Lipid Profile</Form.Label>
                                                       <Form.Control required autoComplete="off"
                                                          type="test"
                                                          name="lipidProfile"
                                                          value={lipidProfile}
                                                          onChange={this.investigationChange}
                                                          className={"bg-dark text-white"}
                                                          placeholder="Enter Lipid Profile"
                                                           as="textarea" rows="1" />
                                                       </Form.Group>
                                         </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEgfr">
                                                <Form.Label>eGFR</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                    type="test"
                                                    name="egfr"
                                                    value={egfr}
                                                    onChange={this.investigationChange}
                                                    className={"bg-dark text-white"}
                                                    placeholder="Enter eGFR"
                                                    as="textarea" rows="1" />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridFbc">
                                                    <Form.Label>FBC</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="fbc"
                                                         value={fbc}
                                                         onChange={this.investigationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter FBC"
                                                         as="textarea" rows="1"  />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridUrine">
                                                    <Form.Label>Urine</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="urine"
                                                         value={urine}
                                                         onChange={this.investigationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Urine"
                                                         as="textarea" rows="1"
                                                         />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridOtherInvestigations">
                                                    <Form.Label>Other Investigations</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="otherInvestigations"
                                                         value={otherInvestigations}
                                                         onChange={this.investigationChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Other Investigations"
                                                         as="textarea" rows="1" />
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
                                                  pathname: "/clinicResultDemographics"
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

