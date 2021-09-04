import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Consultation from './components/Consultation';
import PatientList from './components/PatientList';
import PatientDashboard from './components/PatientDashboard';
import WorkInProgress from './components/WorkInProgress';
import ClinicResultDemographics from './components/ClinicResultDemographics';
import Demographic from './components/Demographic';

function App() {
  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
            <NavigationBar/>
            <Container>
                <Row>
                   <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact component={Dashboard}/>
                            <Route path="/consultation" exact component={Consultation}/>
                            <Route path="/patientList" exact component={PatientList}/>
                            <Route path="/patientDashboard" exact component={PatientDashboard}/>
                            <Route path="/workInProgress" exact component={WorkInProgress}/>
                            <Route path="/clinicResultDemographics" exact component={ClinicResultDemographics}/>
                            <Route path="/demographic" exact component={Demographic}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer/>
    </Router>
  );
}

export default App;
