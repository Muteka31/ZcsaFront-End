import React, { useEffect, useState } from "react";
import {Form} from 'react-bootstrap';

import {
    MDBContainer, MDBRow, MDBCol, MDBTableHead, MDBBtn, MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardBody,
    MDBCardHeader, MDBTable, MDBTableBody, MDBDataTable, MDBInput
} from 'mdbreact';
import InspectorNavBar from './inspectorNavBar';
import { Modal } from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIqmProductCheckLists} from "../redux/actions/iqmProductCheckListCreators";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import {createIqmSampleSubmission} from "../redux/actions/iqmSampleRequestFormCreators";
import swal from "sweetalert";
import moment from "moment";
import {useHistory} from "react-router-dom";
import UserService from "../redux/services/UserService";

function BatchInspectionSampleRequestDetails(){

    const productCheckListsState = useSelector((state) => state.iqmProductCheckList);
    const history = useHistory();
    const {applicationId}  = useParams();
    const dispatch = useDispatch();
    const [showLabSubmission, setShowLabSubmission] = useState(false);
    const specificChecklist = [];

    const product_checklists_list = [];
    const [checklistId, setChecklistId] = useState();

    const [sampleDate, setSampleDate] = useState(new Date());
    console.info(sampleDate.toISOString());



    //INPUTS
    const [sampleTime, setSampleTime] = React.useState(moment());
    const sampleTimeChange = value => { setSampleTime(value); };
    const [labSubContracted, setLabSubContracted] = useState();
    const handleLabSubcontracted = (event) => {setLabSubContracted(event.target.value);}
    const [customerAcceptance, setCustomerAcceptance] = useState();
    const handleCustomerAcceptance = (event) => {setCustomerAcceptance(event.target.value);}
    const [disposalPreference, setDisposalPreference] = useState();
    const handleDisposalPreference = (event) => {setDisposalPreference(event.target.value);}
    const [testPriority, setTestPriority] = useState();
    const handleTestPriority = (event) => {setTestPriority(event.target.value);}
    const [sampleTemp, setSampleTemp] = useState();
    const [submitTemp, setSubmitTemp] = useState();
    const [testDescription, setTestDescription] = useState();
    const [sampleSubmissionNo, setSampleSubmissionNo] = useState();
    const [sampleRetentionNo, setSampleRetentionNo] = useState();




    useEffect(() => {
        dispatch(getIqmProductCheckLists(applicationId));
    }, [productCheckListsState]);

    productCheckListsState.map((productCheckList) => {
        product_checklists_list.push({
            id:productCheckList.id,
            product_name:productCheckList.productId.name,
            brand_name:productCheckList.brand_name,
            application_standard:productCheckList.productId.standard.standard,
            batch_no:productCheckList.batch_No,
            inspection_purpose:productCheckList.purpose_of_inspection,
            action:
                <div>
                    <button
                        onClick={() =>{setChecklistId(productCheckList.id); setShowLabSubmission(true);}}
                        className="btn btn-sm btn-grey">Send to Lab
                    </button>
                    <button className="btn btn-sm btn-dark-green">Generate Form</button>
                </div>
        })
    });

    const newList = [];
    if (checklistId) {
    newList.push(productCheckListsState.find(productCheckListsState => productCheckListsState.id === parseInt(checklistId)))

    newList.map((productCheck) => {
        specificChecklist.push({
            id:productCheck.id,
            product_name:productCheck.productId.name,
            brand_name:productCheck.brand_name,
            applicable_standard:productCheck.productId.standard.standard,
            batch_No:productCheck.batch_No,
            inspection_purpose:productCheck.purpose_of_inspection,
            country: productCheck.countryId.name,
            port_of_entry: productCheck.port_of_entry,
            manufacture_date: productCheck.manufacture_date,
            expiry_date: productCheck.expiry_date,
            quantity: productCheck.quantity,

        })
    });
    }

    let userName = UserService.getUsername();

    const submitLabSubmission = (event) => {
        event.preventDefault();
        dispatch(createIqmSampleSubmission({

            "applicationId":applicationId,
            "inspectionChecklistId": checklistId,
            "dateSampled":sampleDate,
            "timeSampled":sampleTime.format('HH:mm:ss'),
            "laboratorySubContracted":labSubContracted,
            "customerAcceptanceDecision":customerAcceptance,
            "sampleDisposal":disposalPreference,
            "sampleRetentionNo":sampleRetentionNo,
            "sampleSubmissionNo":sampleSubmissionNo,
            "temperatureSubmitted":submitTemp,
            "temperatureSampled":sampleTemp,
            "testDescription":testDescription,
            "testPriority":testPriority,
            "createdBy":userName,
        })).then((response) => {

            console.info(response);
            const status = response.payload.status;
            const sampleRequestFormId =  response.payload.data.id;

            if(status == 200) {
                swal(
                    {
                        closeOnClickOutside: false,
                        title:"success",
                        text: "Sample Submission Created",
                        icon: "success",
                        buttons: {
                            list: {
                                text:"Back",
                                value:"list",
                                className:"grey"
                            },
                            print: {
                                text: "Print",
                                value: "print",
                                className: "orange"
                            },
                            open: {
                                text: "Open",
                                value: "open",
                                className: "green"
                            }
                        },
                    })
                    .then((value) => {
                        switch (value) {

                            case "list":
                                history.push("/inspector-dashboard/sample-request-details")
                                //sample-request-details
                                break;
                            case "print":
                                /*The Logic for Printing the Sample Request Come here*/
                                break;

                            case "open":

                                break;

                            default:

                        }
                    });

            }else{


            }


        })
        //history.push("/inspector-dashboard/sample-form");

    }

    return (
    <>
    <InspectorNavBar></InspectorNavBar>
     <MDBContainer>
     <MDBBreadcrumb>
        <MDBBreadcrumbItem color='warning-color'>INSPECTOR Dashboard</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Batch Inspections Sample Request Details </MDBBreadcrumbItem>
     </MDBBreadcrumb>

         <MDBCard>
             <MDBCardHeader color='special-color'>Sample Request Details</MDBCardHeader>
             <MDBCardBody>
                 <MDBCardBody>
                     <MDBDataTable
                         striped
                         bordered
                         hover
                         data={
                             {
                                 columns: [
                                     {
                                         label: '#',
                                         field: 'id',
                                         sort: 'asc',
                                         width: 150
                                     },
                                     {
                                         label: 'Product Name',
                                         field: 'product_name',
                                         sort: 'asc',
                                         width: 100
                                     },
                                     {
                                         label: 'Application Standard',
                                         field: 'application_standard',
                                         sort: 'asc',
                                         width: 170
                                     },
                                     {
                                         label: 'Batch No.',
                                         field: 'batch_no',
                                         sort: 'asc',
                                         width: 200
                                     },
                                     {
                                         label: 'Inspection Purpose',
                                         field: 'inspection_purpose',
                                         sort: 'asc',
                                         width: 100
                                     },
                                     {
                                         label: 'Action',
                                         field: 'action',
                                         sort: 'asc',
                                         width: 100
                                     }
                                 ],
                                 rows: product_checklists_list
                             }
                         }
                     />
                 </MDBCardBody>
             </MDBCardBody>
         </MDBCard>


         <Modal size='xl' show={showLabSubmission} onHide={() => setShowLabSubmission(false)} >
            <Modal.Body scrollable="true">
            <MDBCard className="border" >
                <MDBCardHeader color='special-color'>Submit Sample To Laboratory</MDBCardHeader>
                <MDBCardBody>
                    <MDBCol>
                            {specificChecklist.map(item => (
                                <MDBTable bordered>
                                <MDBTableBody>
                                <tr>
                                <td className="text-left"><b>Product Name</b></td>
                                <td className="text-left">{item.product_name}</td>
                                <td className="text-left"><b>Brand Name </b></td>
                                <td className="text-left">{item.brand_name}</td>
                                <td className="text-left"><b>Applicable Standard</b></td>
                                <td className="text-left">{item.applicable_standard}</td>
                                </tr>
                                <tr>
                                <td className="text-left"><b>Origin Country </b></td>
                                <td className="text-left">{item.country}</td>
                                <td className="text-left"><b>Entry Port</b></td>
                                <td className="text-left">{item.port_of_entry}</td>
                                <td className="text-left"><b>Batch No</b></td>
                                <td className="text-left">{item.batch_No}</td>
                                </tr>
                                <tr>
                                <td className="text-left"><b>Manufactured Date</b></td>
                                <td className="text-left">{item.manufacture_date}</td>
                                <td className="text-left"><b>Expiry Date</b></td>
                                <td className="text-left">{item.expiry_date}</td>
                                <td className="text-left"><b>Quantity </b></td>
                                <td className="text-left">{item.quantity}</td>
                                </tr>
                                </MDBTableBody>
                                </MDBTable>
                            ))}
                    </MDBCol>
            <MDBCol>
              <form>

              <MDBRow>
              <MDBCol md="6">
              <div className="switch">
                  <label htmlFor="lab_to_be_sub_contracted">
                      Laboratory to be Sub-Contracted :
                  </label>
                  <div onChange={handleLabSubcontracted}>
                      <input
                      id="lab_to_be_sub_contracted" 
                      name="lab_to_be_sub_contracted"
                      value={true}
                      style={{marginLeft: '10px'}} 
                      type="radio" /> Yes
                      <input 
                      id="lab_to_be_sub_contracted" 
                      name="lab_to_be_sub_contracted"
                      value={false}
                      style={{marginLeft: '10px'}} 
                      type="radio" /> No
                  </div>
              </div>
              </MDBCol>
              <MDBCol>
                  <div className="switch mt-3">
                      <label htmlFor="accept_decision_rule">
                          Customer Accept Decision Rule :
                      </label>
                      <div onChange={handleCustomerAcceptance}>
                      <input
                          id="accept_decision_rule"
                          name="accept_decision_rule"
                          value={true}
                          style={{marginLeft: '10px'}}
                          type="radio" /> Yes
                      <input
                          id="accept_decision_rule"
                          name="accept_decision_rule"
                          value={false}
                          style={{marginLeft: '10px'}}
                          type="radio" /> No
                      </div>
                  </div>
              </MDBCol>
              </MDBRow>

                <MDBRow>
                    <MDBCol md="3">
                          <MDBCol md="11">
                          <div className="form-group mt-3">
                              <div className="md-form">
                                  <p>Date Sampled:</p>
                                  <DatePicker onChange={date => setSampleDate(date)} id="sample_date" dateFormat="yyyy-MM-dd"
                                              selected={sampleDate} isClearable
                                  />
                              </div>
                          </div>
                          </MDBCol>
                      </MDBCol>
                    <MDBCol md="3">
                          <div className="mt-3">
                              <MDBCol md='12'>
                                  <label htmlFor="">Time: </label>
                              </MDBCol>
                              <MDBCol md=''>
                                  <TimePicker onChange={sampleTimeChange} id="time_sampled" placeholder="hh : mm" showSecond={false} />
                              </MDBCol>

                          </div>
                      </MDBCol>
                    <MDBCol md="3">
                          <div className="form-group mt-3">
                              <label htmlFor="formGroupExampleInput">Temp at Sampling:</label>
                              <input type="number" className="form-control" id="sampleTemp"
                                     value={sampleTemp} onChange={(e) => setSampleTemp(e.target.value)}
                              />
                          </div>
                      </MDBCol>
                      <MDBCol md="3">
                          <div className="form-group mt-3">
                              <label htmlFor="submissionTemp">Temp at Submission:</label>
                              <input type="number" className="form-control" id=""
                                value={submitTemp} onChange={(e) => setSubmitTemp(e.target.value)}
                              />
                          </div>
                      </MDBCol>
                  </MDBRow>

                <MDBRow>
                <MDBCol md="3">
                    <div className="form-group mt-3">
                      <label htmlFor="sampleSubmissionNo">Number of Sample(s) to Submit</label>
                      <input type="text" className="form-control" id="sampleSubmissionNo"
                        value={sampleSubmissionNo} onChange={(e) =>setSampleSubmissionNo(e.target.value)}
                      />
                    </div>
                </MDBCol>
                <MDBCol md="3">
                    <div className="form-group mt-3">
                      <label htmlFor="sampleRetentionNo">Number of Sample(s) Retention</label>
                      <input type="text" className="form-control" id="sampleRetentionNo"
                             value={sampleRetentionNo} onChange={(e) =>setSampleRetentionNo(e.target.value)}
                      />
                    </div>
                </MDBCol>
                <MDBCol md="3">
                    <div className="switch mt-3">
                    <label htmlFor="test_priority">
                        Testing Priority :
                    </label>
                        <select onChange={handleTestPriority} className="browser-default custom-select">
                            <option defaultValue disabled="">Select Priority</option>
                            <option value="high">High</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="3">
                    <div className="switch mt-3">
                        <label htmlFor="test_priority">
                            Disposal of Residual Samples:
                        </label>
                        <select onChange={handleDisposalPreference} className="browser-default custom-select">
                            <option defaultValue disabled="">Select Disposal Preference: </option>
                            <option value="laboratory disposal">Laboratory Disposal</option>
                            <option value="customer collect">Customer to Collect</option>
                        </select>
                    </div>
                </MDBCol>
                </MDBRow>

                  <MDBRow>
                      <MDBCol md="12">
                          <div className="form-group">
                              <label htmlFor="testDescription">Test to be Performed</label>
                              <textarea
                                  value={testDescription} onChange={(e) =>setTestDescription(e.target.value)}
                                  type="text"
                                  id="testDescription"
                                  name="testDescription"
                                  className="md-textarea form-control"
                                  rows="3">
                        </textarea>
                          </div>
                      </MDBCol>
                  </MDBRow>

                    <div className="text-center mt-4">
                        <MDBBtn color="success" type="button" onClick={submitLabSubmission} className="btn btn-sm btn-block">Submit Sample(s)</MDBBtn>
                    </div>
              </form>
            </MDBCol>
            </MDBCardBody>
                </MDBCard>
            </Modal.Body>
            </Modal> 
        </MDBContainer>
      </>  
    )
}

export default BatchInspectionSampleRequestDetails