import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBInput,
    MDBCardBody,
    MDBBreadcrumbItem,
    MDBBreadcrumb
} from 'mdbreact';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import InspectorNavBar from "./inspectorNavBar";


function SampleSubmission(){

    const [sampleDate, setSampleDate] = useState(null);
    const [submissionDate, setSubmissionDate] = useState(null);

    return(
        <div>
        <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
            <MDBBreadcrumb color="warning-color">
                <MDBBreadcrumbItem ><b>Inspector Dashboard</b></MDBBreadcrumbItem>
                <MDBBreadcrumbItem active><b>Sample Submission</b></MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBCard>
                <MDBCardHeader color='special-color'>Sample Submission Form</MDBCardHeader>
                <MDBCardBody>
                    <h5>Client Details</h5>
                    <MDBRow className="">
                        <MDBCol md='6'>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="6">
                                    <MDBInput id="contact_person" labelClass="labelBg" background outline type='text' label='Contact Person: '/>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBInput id="Email:" labelClass="labelBg" background outline type='email' label='Email: '/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="6">
                                    <MDBInput id="company_name" labelClass="labelBg" background outline type='text' label='Company Name: '/>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBInput id="consignor_name" labelClass="labelBg" background outline type='text' label='Consignor Name: '/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md='6'>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="6">
                                    <MDBInput id="contact_no" labelClass="labelBg" background outline type='text' label='Contact No: '/>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBInput id="telephone" labelClass="labelBg" background outline type='text' label='Tel / Fax: '/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11">
                                    <MDBInput id="client_address" labelClass="labelBg" background outline type='text' label='Address: '/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>


                    <div className="my_hr"><hr/></div>
                    <h5>Sample Submission</h5>
                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBRow className="my_row">
                                <MDBCol md='6'>
                                    <div className="md-form">
                                        <span className="small_header">Date Sampled:</span>
                                        <div style={{paddingLeft: '7px'}}>
                                            <DatePicker id="sample_date" placeholder="dd:mm:yyyy" dateFormat="dd/MM/yyyy"
                                                        selected={sampleDate} onChange={date => setSampleDate(date)} />
                                        </div>

                                    </div>
                                </MDBCol>

                                <MDBCol md='2'>
                                    <div style={{marginTop: '1.9rem'}}>
                                        <h8 style={{color: 'grey', fontWeight: '300'}}>Time:</h8>
                                    </div>
                                </MDBCol>
                                <MDBCol md='2'>
                                    <div className="md-form">
                                        <TimePicker id="minute_sampled" placeholder="hh : mm" showSecond={false} />
                                    </div>
                                </MDBCol>

                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md='6'>
                                    <MDBInput labelClass="labelBg" background outline id='receipt_no' label='Receipt No' type='text' required />
                                </MDBCol>
                                <MDBCol md='5'>
                                    <MDBInput labelClass="labelBg" background outline id='batch_tl_no' label='Batch TL No' type='text' required />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBRow className="my_row">
                                <MDBCol md='6'>
                                    <div className="md-form">
                                        <div className="">
                                            <span className="small_header">Date Submitted:</span>
                                            <div style={{paddingLeft: '7px'}}>
                                                <DatePicker id="submission_date" placeholder="dd:mm:yyyy" dateFormat="dd/MM/yyyy"
                                                            selected={submissionDate} onChange={date => setSubmissionDate(date)} />
                                            </div>
                                        </div>
                                    </div>
                                </MDBCol>

                                <MDBCol md='2'>
                                    <div style={{marginTop: '1.9rem'}}>
                                        <h8 style={{color: 'grey', fontWeight: '300'}}>Time:</h8>
                                    </div>
                                </MDBCol>
                                <MDBCol md='2'>
                                    <div className="md-form">
                                        <TimePicker id="minute_sampled" placeholder="hh : mm" showSecond={false} />
                                    </div>
                                </MDBCol>

                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md='6'>
                                    <MDBInput labelClass="labelBg" background outline id='sample_temp' label='Temperature at Sample' type='text' required />
                                </MDBCol>
                                <MDBCol md='5'>
                                    <MDBInput labelClass="labelBg" background outline id='receipt_temp' label='Temperature at Receipt' type='text' required />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <div className="my_hr"><hr/></div>
                    <h5>Tests to be Performed</h5>
                    <MDBRow className="">
                        <MDBCol md='6'>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="11">
                                    <MDBInput id="state_desc" labelClass="labelBg" background outline type='text' label='Sate Description: '/>
                                </MDBCol>

                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="6">
                                    <select id="test_priority" className="cust_drop md-form">
                                        <option value="" disabled="" selected="">Priority: </option>
                                        <option value="High" disabled="" selected="">High </option>
                                        <option value="Normal" disabled="" selected="">Normal: </option>
                                    </select>
                                </MDBCol>
                                <MDBCol md="5">
                                    <select id="test_priority" className="cust_drop md-form">
                                        <option value="" disabled="" selected="">Sample Disposal: </option>
                                        <option value="High" disabled="" selected=""> Collected by Customer </option>
                                        <option value="Normal" disabled="" selected=""> Laboratory to Dispose </option>
                                    </select>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md='6'>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="6">
                                    <MDBInput id="sample_sub_no" labelClass="labelBg" background outline type='text' label='No of Samples Submitted: '/>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBInput id="reten_no" labelClass="labelBg" background outline type='text' label='No Samples for Retention: '/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11">
                                    <MDBInput id="comments" labelClass='labelBg' background type='textarea' label='Comments:' rows='1' />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="">
                        <MDBCol md="12">
                            <div className='md-form'>
                                <h7 className="options_header">Laboratory to be Sub-Contracted: </h7>
                                <input type='radio' className='' id='sub_contratced' name='sub_contratced' required />
                                <h8 className="my_options">Yes</h8>
                                <input type='radio' className='' id='sub_contratced' name='sub_contratced' required />
                                <h8 className="my_options">No</h8>
                            </div>
                            <div className='invalid-feedback'>More example invalid feedback text </div>
                        </MDBCol>
                    </MDBRow>

                    <div className="my_hr"><hr/></div>

                    <h5>Laboratory Capability Assessment</h5>
                    <br/>
                    <MDBRow>
                        <MDBCol md="4">
                            <label className='options_header'>Customers Requirements Understood</label>
                            <input type='checkbox' className='my_checkbx' id='cust_req' required />
                        </MDBCol>

                        <MDBCol md="4">
                            <label className='options_header' htmlFor='approp_method'>Appropriate Method(s) Available</label>
                            <input type='checkbox' className='my_checkbx' id='approp_method' required />
                        </MDBCol>

                        <MDBCol md="4">
                            <label className='options_header' htmlFor='approp_equipment'>Appropriate Equipment</label>
                            <input type='checkbox' className='my_checkbx' id='approp_equipment' required />
                        </MDBCol>
                    </MDBRow>
                    <br/>
                    <MDBRow>
                        <MDBCol md="4">
                            <label className='options_header' htmlFor='competent'>Competent Personnel </label>
                            <input type='checkbox' className='my_checkbx' id='cust_req' required />
                        </MDBCol>

                        <MDBCol md="4">
                            <label className='options_header' htmlFor='consumables'>Consumables and Other Resources</label>
                            <input type='checkbox' className='my_checkbx' id='consumables' required />
                        </MDBCol>

                        <MDBCol md="4">
                            <label className='options_header' htmlFor='round_time'>Round Time Can be Met</label>
                            <input type='checkbox' className='my_checkbx' id='' required />
                        </MDBCol>
                    </MDBRow>

                    <div className="my_hr"><hr/></div>
                    <MDBRow>
                        <MDBCol md='6'>
                            <button className="btn btn-blue-grey">Save Draft</button>
                            <button className="btn btn-success">Submit</button>
                        </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>

            <br/>

        </MDBContainer>
        </div>
    )
}

export default SampleSubmission;