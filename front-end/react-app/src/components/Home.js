import React from 'react'
import {useCookies} from 'react-cookie';
import {useNavigate,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { Container, Row, Button ,Col,Form,Checkbox } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as settings from '../settings';
import axios from 'axios';
import {faFileMedicalAlt} from '@fortawesome/fontawesome-free-solid'
function Home() {
    //this is to redirect the user to articles page when he logs
    const [ value, setValue ] = useState(0); 
   
  
  

     // React hook state variable - parameters
     const [parameters, setParameters] = React.useState({
       gender:1,
age:0,
hypertension:0,
heart_disease:0,
ever_married:0,
work_type:0,
Residence_type:0,
avg_glucose_level:0, 
bmi:0,
smoking_status:0
    });
    const {   gender
    } = parameters;
    // React hook state variable - Prediction
    const [prediction, setPrediction] = React.useState(".........")
    const convert=(c)=>{
       
    }
    const onchangecheck=e=>{
        console.log(e.target.value)
    }
    // Function to update the parameters state upon slider value change
    const handleChange = e => setParameters({ ...parameters, [e.target.name]: e.target.type === "checkbox" ? e.target.checked?1:0 : parseFloat(e.target.value) });
 
    // Function to make the predict API call and update the state variable - Prediction 
    const handlePredict = event => {
        // Submit Iris Flower measured dimensions as form data
        let strokeFormData = new FormData();
        strokeFormData.append("gender", parseInt(parameters.gender));
        strokeFormData.append("age", parseFloat(parameters.age));
        strokeFormData.append("hypertension", parameters.hypertension);
        strokeFormData.append("heart_disease", parameters.heart_disease);
        strokeFormData.append("ever_married", parameters.ever_married);
        strokeFormData.append("work_type", parameters.work_type);
        strokeFormData.append("Residence_type", parseInt(parameters.Residence_type));
        strokeFormData.append("avg_glucose_level", parseFloat(parameters.avg_glucose_level));
        strokeFormData.append("bmi", parseFloat(parameters.bmi));
        strokeFormData.append("smoking_status", parseInt(parameters.smoking_status));
       
        //Axios variables required to call the predict API
        let url = settings.API_SERVER + '/api/predict/';
        let method = 'post';
        let config = { method, url, data: 
        strokeFormData
        };
        
        //Axios predict API call
        axios(config).then(
            res => {setPrediction(res.data["Predicted Stroke"])
            }).catch(
                error => {alert(error)})

    }

    return (
        <React.Fragment >
           
           
            <div >
          
            <Container fluid>
                <Row style={{backgroundColor:"silver"}} className="text-dark">
                    <Col sm={6} >
                        <Row className="text-center" style={{backgroundColor:"white",margin:10}}>
                        <h2 class="text-justify">Predict Stroke-risk</h2></Row>
                        <Row style={{backgroundColor:"white",margin:10,padding:10}}>
             
                    <Form.Group  controlId="exampleForm.ControlInput1" style={{marginRight:20}}>
                    <label><strong>Gender</strong></label>
                    <Form.Select  aria-label="Default select example" style={{marginRight:10}}  value={gender}
  name="gender"   onChange={changeEvent => handleChange(changeEvent)} >
  <option>Select gender</option>
  <option value="1">Male</option>
  <option value="0">Female</option>

</Form.Select>
</Form.Group>

<br/>
<Form.Group>
<label><strong>Age</strong></label>
<RangeSlider variant="dark"  min="0" max="200" 
name="age"
      value={value}
      onChange={changeEvent => {setValue(changeEvent.target.value)
    setParameters(
        {
            ...parameters,
            ...{ "age":  value}
        }
    )}}
    
      />
                  
                  </Form.Group>
                <Row>
                 <Col>
                      <Form.Check label="hypertension?" value={parameters.hypertension}  style={{marginTop:25}} name="hypertension" onChange={e=>handleChange(e)}></Form.Check>
                      </Col>
                      <Col>
                      <Form.Check label="heart desease?"  value={parameters.heart_disease} onChange={e=>handleChange(e)}style={{marginTop:25}} name="heart_disease"></Form.Check>
                      </Col>
                      <Col>
                      <Form.Check label="ever maried?"  value={parameters.ever_married} onChange={e=>handleChange(e)}style={{marginTop:25}} name="ever_married"></Form.Check>
                      </Col>
                  </Row>
                  <Form.Group  controlId="exampleForm.ControlInput1" style={{marginRight:20}}>
                    <label><strong>Work Type</strong></label>
                    <Form.Select aria-label="Default select example" style={{marginRight:10}} name="work_type" onChange={e=>handleChange(e)} name="work_type"> 
  <option>Select wrok type</option>
  <option value="0">Private</option>
  <option value="1">Self-employed</option>
  <option value="2">Govt job</option>
  <option value="3">children</option>
  <option value="4">Never worked</option>
</Form.Select>
</Form.Group>
<Form.Group  controlId="exampleForm.ControlInput1" style={{marginRight:20}}>
                    <label><strong>Residence_type</strong></label>
                    <Form.Select aria-label="Default select example" style={{marginRight:10}} name="Residence_type" onChange={e=>handleChange(e)}>
  <option>Select Residence type</option>
  <option value="1">Urban</option>
  <option value="0">Rural</option>

</Form.Select>
</Form.Group>

<Form.Group>
<label><strong> Averege glucose level: </strong></label>
    <input  type='number'
                step="0.1"
                min='0'
                max='10000'
                className='form-control' name="avg_glucose_level" onChange={e=>handleChange(e)}></input>
</Form.Group>

<Form.Group>
<label><strong> BMI: </strong></label>
    <input  type='number'
                step="0.1"
                min='0'
                max='10000'
                className='form-control'
                name="bmi"
                onChange={e=>handleChange(e)}></input>
</Form.Group>

<Form.Group  controlId="exampleForm.ControlInput1" style={{marginRight:20}}>
                    <label><strong>Smoking status</strong></label>
                    <Form.Select aria-label="Default select example" style={{marginRight:10}} name="smoking_status" onChange={e=>handleChange(e)}>
  <option>Select smoking status</option>
  <option value="0">never smoked</option>
  <option value="1">formerly smoked</option>
  <option value="2">smokes</option>
  <option value="4">Unknown</option>
</Form.Select>
</Form.Group>
            </Row>
                    </Col>
                    <Col sm={2} style={{marginTop:50,marginBottom:0,marginLeft:0,marginRight:10}}>
                        <Button className="btn btn-dark text-white " style={{width:"100%"}} onClick={handlePredict}>Predict</Button>
                       
                    </Col>
                    <Col className="text-center" sm={3} style={{margin:10,height:100}}>
                        <Row className="text-center" style={{backgroundColor:"white",height:100,marginRight:10}}>
                        <h2 class="text-justify ">Stroke-risk <FontAwesomeIcon icon={faFileMedicalAlt} /></h2>
                        <p><strong>Result:</strong><span><strong> {prediction}</strong></span></p>
                        </Row>
                    </Col>
                
        </Row>

        
        </Container>
        
            </div>

        </React.Fragment>
    )
}

export default Home