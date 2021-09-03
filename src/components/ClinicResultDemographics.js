import React, { useState, useEffect } from 'react';
//import './App.css';
import MaterialTable from 'material-table'
import {Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash, faBackward} from '@fortawesome/free-solid-svg-icons';


function App() {

  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const columns2 = [
        { title: "Date", field: "dateOfInvestigation" },
        { title: "Renal Profile", field: "renalProfile" },
        { title: "Liver Function", field: "liverFunction" },
        { title: "Hba1c", field: "hba1c" },
        { title: "Lipid Profile", field: "lipidProfile" },
        { title: "eGFR", field: "egfr" },
        { title: "FBC", field: "fbc" },
        { title: "Urine", field: "urine" },
        { title: "Other Investigations", field: "otherInvestigations" }
      ]

  const columns = [
      { title: "Date", field: "demographicDate" },
      { title: "BP", field: "bp" },
      { title: "Pulse", field: "pulse" },
      { title: "Weight", field: "weight" },
      { title: "BMI", field: "bmi" },
      { title: "RBG", field: "rbg" },
      { title: "O2 Sat", field: "o2Sat" },
      { title: "PERF", field: "perf" },
      { title: "Carbon Monoxide", field: "bmi" }
    ]



   useEffect(() => {
      fetch("https://ji224k9a68.execute-api.ap-south-1.amazonaws.com/dev/gramgp/demographics/emrid_1")
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          setData(resp)
        })
    }, [])

    useEffect(() => {
        fetch("https://ji224k9a68.execute-api.ap-south-1.amazonaws.com/dev/gramgp/investigations/emrid_1")
          .then(resp => resp.json())
          .then(resp => {
            console.log(resp)
            setList(resp)
          })
      }, [])

  return (
   <Jumbotron className="bg-dark text-white">

    <div className="App">
      <h1 align="center">Results and Clinical Demographics</h1>
      <MaterialTable
        title="Vitals Chart"
        data={data}
        columns={columns}
        options={{
        filtering:true,
        exportButton:true
        }}
      />
    </div>

    <div className="App">
                   <h1 align="center"></h1>
                   <MaterialTable
                     title="Investigations"
                     data={list}
                     columns={columns2}
                     options={{
                     filtering:true,
                     exportButton:true
                     }}
                   />
                   <p/>
                   <Button size="sm" variant="outline-primary" >
                      <Link to={{
                         pathname: "/patientDashboard"
                      }}><FontAwesomeIcon icon={faBackward} /> Back
                      </Link>
                   </Button>
                 </div>
    </Jumbotron>
  );
}

export default App;