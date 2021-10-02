import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../utils/style.css';
import {MDBContainer,MDBRow, MDBCardHeader,MDBInputGroup,
   MDBCol,  MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardTitle,MDBInput, MDBCardBody,MDBTable, MDBTableBody, MDBBtn, MDBIcon } from 'mdbreact';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import InspectorNavBar from './inspectorNavBar';
import {getAscuydaApplications} from "../redux/actions/ascuydaApplicationCreators";
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';
import { useHistory} from "react-router-dom";

function FactoryInspectionNoticeOfInspection(){

  const history = useHistory();
  const dispatch = useDispatch();
  const [inspDate, setInspDate] = useState(new Date());
  const [inspectionNotice, setInspectionNotice] = useState(
    {
      "orgName":"",
      "orgPhone":"",
      "orgLocation":"",
      "orgContact":"",
      "purpose":"",
      "specification":""

    }
  );


  useEffect(() => {
    dispatch(getAscuydaApplications());
  },[]);



  const handleChange = e => {
    const { name, value } = e.target;
    setInspectionNotice(prevState => ({
        ...prevState,
        [name]: value
      }));
  };
  
  return(
      <>
      <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem >SNR Dashboard</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Factory Inspection</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Notice Of Inspection</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        <MDBCard className="mt-3">
        <MDBCardHeader color="special-color">
          Create Inspection Notice
        </MDBCardHeader>
          <MDBCardBody>
            <MDBRow className="mt-1">
            <MDBCol>
              <label htmlFor="formGroupExampleInput">Proof Of Payment</label>
                <MDBInputGroup
                  prepend="Upload"
                  inputs={
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                      />
                      <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Upload Proof of Payment
                      </label>
                    </div>
                  }
                  containerClassName="mb-3"
                />
                <div>
                 <label htmlFor="formGroupExampleInput">Inspection Date</label>
                <Form.Control placeholder="Manufaturer Date" type="date"/>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="formGroupExampleInput">Inspection Time</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
               
                <h5 style={{color:"grey"}}>Organization Details</h5>

                <MDBRow>
                  <MDBCol className="6">
                    <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                    />
                  </div>
                  </MDBCol>
                  <MDBCol className="6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                    />
                  </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="6">
                    <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                    />
                  </div>
                  </MDBCol>
                  <MDBCol className="6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                    />
                  </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol className="col-md-12">
                  <select 
                  id="purpose"
                  name="purpose" 
                  className="cust_drop md-outline md-form"
                  onChange={handleChange}>
                      <option defaultValue>Select Inspection Purpose</option>
                      <option value="NEW CERTIFICATE">INITIAL</option>
                      <option value="RENEWAL">FOLLOW-UP</option>
                      <option value="SURVEILLANCE">SURVEILLANCE</option>
                      <option value="RE-INSPECTION">RENEWAL</option>
                      <option value="FOLLOW UP">OTHERS</option>
                  </select>
              </MDBCol>
              <MDBCol className="col-md-12">
              <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                  Specify
                  </label>
                  <textarea
                  className="form-control"
                  id="specification"
                  name="specification"
                  rows="3"
                  />
              </div>
              </MDBCol>
              <MDBCol className="col-md-12">
                <p>for the Manufacture and Supply</p>
              </MDBCol>
             
                </MDBRow>
                <br/>
                
            </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </MDBContainer>
      </>
    )
}

export default FactoryInspectionNoticeOfInspection;