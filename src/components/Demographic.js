import React, {Component} from 'react';

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faBackward} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Demographic extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.demographicChange = this.demographicChange.bind(this);
        this.submitDemographic = this.submitDemographic.bind(this);
    }

    initialState = {
        carbonMonoxide:'', perf:'', o2Sat:'', pulse:'', weight:'', bp:'', rpg:'', demographicDate:'', urine:'', bmi:''
    }

    resetDemographic = () => {
        this.setState(() => this.initialState);
    }

    submitDemographic = event => {
        //alert('Title: ' + this.state.title+ ', Author: ' + this.state.author + ', Cover Photo URL : ' + this.state.coverPhotoURL + ', ISBN Number : ' + this.state.isbnNumber + ', Price : ' + this.state.price + ', Language : ' + this.state.language);
        event.preventDefault();

        var emridValue = "emrid_1";
        var demographicidValue = "demographics_7";

        const demographic = {
            demographicid: demographicidValue,
            emrid: emridValue,
            carbonMonoxide: this.state.carbonMonoxide,
            perf: this.state.perf,
            o2Sat : this.state.o2Sat,
            pulse: this.state.pulse,
            weight : this.state.weight,
            bp : this.state.bp,
            rbg : this.state.rbg,
            demographicDate : this.state.demographicDate,
            urine : this.state.urine,
            bmi : this.state.bmi
        };

        alert('carbonMonoxide: ' + this.state.carbonMonoxide + ', perf: ' + this.state.perf + ', o2Sat : ' +
        this.state.o2Sat + ', pulse : ' + this.state.pulse + ', weight : ' + this.state.weight + ', bp : ' +
        this.state.bp + ', rbg : ' + this.state.rbg + ', demographicDate : ' + this.state.demographicDate +
        ', urine : ' + this.state.urine + ', bmi  : ' + this.state.bmi);


        axios.post("https://ji224k9a68.execute-api.ap-south-1.amazonaws.com/dev/gramgp/demographics", demographic)
            .then(response => {
                if(response.data != null){
                    this.setState(this.initialState);
                    alert("Demographic Saved Successfully");
                }
            });
    }

    demographicChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){

        const{carbonMonoxide, perf, o2Sat, pulse, weight, bp, rbg, demographicDate, urine, bmi} = this.state;

            return(
                 <Card className={"border border-dark bg-dark text-white"}>
                                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Demographic</Card.Header>
                                <Card.Body>
                                    <Form onReset={this.resetDemographic} onSubmit={this.submitDemographic} id="demographicFormId">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridBp">
                                                 <Form.Label>Date</Form.Label>
                                                 <Form.Control required autoComplete="off"
                                                   type="test"
                                                   name="demographicDate"
                                                   value={demographicDate}
                                                   onChange={this.demographicChange}
                                                   className={"bg-dark text-white"}
                                                   placeholder="Enter Date"
                                                   as="textarea" rows="1" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                          <Form.Group as={Col} controlId="formGridBp">
                                            <Form.Label>BP</Form.Label>
                                            <Form.Control required autoComplete="off"
                                                type="test"
                                                name="bp"
                                                value={bp}
                                                onChange={this.demographicChange}
                                                className={"bg-dark text-white"}
                                                placeholder="Enter BP"
                                                as="textarea" rows="1" />
                                          </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                          <Form.Group as={Col} controlId="formGridPulse">
                                               <Form.Label>Pulse</Form.Label>
                                                   <Form.Control required autoComplete="off"
                                                     type="test"
                                                     name="pulse"
                                                     value={pulse}
                                                     onChange={this.demographicChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter Pulse"
                                                     as="textarea" rows="1"  />
                                          </Form.Group>
                                        </Form.Row>



                                        <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridWeight">
                                                       <Form.Label>Weight</Form.Label>
                                                       <Form.Control required autoComplete="off"
                                                          type="test"
                                                          name="weight"
                                                          value={weight}
                                                          onChange={this.demographicChange}
                                                          className={"bg-dark text-white"}
                                                          placeholder="Enter Weight"
                                                          as="textarea" rows="1" />
                                                    </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridBmi">
                                                       <Form.Label>BMI</Form.Label>
                                                       <Form.Control required autoComplete="off"
                                                          type="test"
                                                          name="bmi"
                                                          value={bmi}
                                                          onChange={this.demographicChange}
                                                          className={"bg-dark text-white"}
                                                          placeholder="Enter BMI"
                                                           as="textarea" rows="1" />
                                                       </Form.Group>
                                         </Form.Row>
                                         <Form.Row>
                                            <Form.Group as={Col} controlId="formGridRbg">
                                                <Form.Label>RBG</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                     type="test"
                                                     name="rbg"
                                                     value={rbg}
                                                     onChange={this.demographicChange}
                                                     className={"bg-dark text-white"}
                                                     placeholder="Enter RBG"
                                                     as="textarea" rows="1" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridO2Sat">
                                                <Form.Label>O2 Sat</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                    type="test"
                                                    name="o2Sat"
                                                    value={o2Sat}
                                                    onChange={this.demographicChange}
                                                    className={"bg-dark text-white"}
                                                    placeholder="Enter O2 Sat"
                                                    as="textarea" rows="1" />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridPerf">
                                                    <Form.Label>Perf</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="perf"
                                                         value={perf}
                                                         onChange={this.demographicChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter PERF"
                                                         as="textarea" rows="1"  />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCarbonMonoxide">
                                                    <Form.Label>Carbon Monoxide</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="carbonMonoxide"
                                                         value={carbonMonoxide}
                                                         onChange={this.demographicChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Carbon Monoxide"
                                                         as="textarea" rows="1"
                                                         />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridUrine">
                                                    <Form.Label>Urine</Form.Label>
                                                        <Form.Control required autoComplete="off"
                                                         type="test"
                                                         name="urine"
                                                         value={urine}
                                                         onChange={this.demographicChange}
                                                         className={"bg-dark text-white"}
                                                         placeholder="Enter Urine"
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

