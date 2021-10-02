import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBInput,
    MDBCardBody,
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from 'mdbreact';
import InspectorNavBar from "./inspectorNavBar";
import React from "react";


function SampleForm(){
    return(
    <div>
    <InspectorNavBar></InspectorNavBar>
    <MDBContainer>
        <MDBBreadcrumb color="warning-color">
            <MDBBreadcrumbItem ><b>Inspector Dashboard</b></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><b>Sample Form</b></MDBBreadcrumbItem>
        </MDBBreadcrumb>

            <MDBCard>
                <MDBCardHeader color='info-color'>Sample Request Form</MDBCardHeader>
                <MDBCardBody>
                    <MDBRow className="">
                        <MDBCol md='6'>
                            <h5>Purpose of Sampling</h5>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="samp_purp" labelClass="labelBg" background outline type='text' label='Enter Purpose: '/></MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md='6'>
                            <br/>
                        </MDBCol>
                    </MDBRow>
                    <div className="my_hr"><hr/></div>
                    <br/>

                    <MDBRow className="">
                        <MDBCol md='6'>
                            <h5>Consignee Details</h5>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conee_name" labelClass="labelBg" background outline type='text' label='Name: '/></MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conee_contact" labelClass="labelBg" background outline type='text' label='Contact: '/></MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conee_address" labelClass="labelBg" background outline type='text' label='Address: '/></MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conee_email" labelClass="labelBg" background outline type='text' label='Email: '/></MDBCol>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md='6'>
                            <h5>Consignor Details</h5>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conor_name" labelClass="labelBg" background outline type='text' label='Name: '/></MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conor_contact" labelClass="labelBg" background outline type='text' label='Contact: '/></MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conor_address" labelClass="labelBg" background outline type='text' label='Address: '/></MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md="11"><MDBInput id="conor_email" labelClass="labelBg" background outline type='text' label='Email: '/></MDBCol>
                            </MDBRow>
                            <p></p>
                        </MDBCol>
                    </MDBRow>
                    <div className="my_hr"><hr/></div>
                    <MDBRow>
                        <MDBCol md='6'>
                            <h5>Seal Numbers</h5>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md='6'>
                                    <MDBInput labelClass="labelBg" background outline id="old_sealNo" label='Old Number' type='text' />
                                </MDBCol>

                                <MDBCol md='5'>
                                    <MDBInput labelClass="labelBg" background outline id="old_sealNo" label='New Number' type='text' />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md='6'>
                                    <MDBInput labelClass="labelBg" background outline id='truk_no' label='Truck No' type='text' required />
                                </MDBCol>

                                <MDBCol md='6'>
                                    <button className="btn btn-info btn-sm" style={{marginTop: '25px'}}>Add</button>
                                    <button className="btn btn-danger btn-sm" style={{verticalAlign: 'bottom'}}>Remove</button>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md='6'>
                            <h5>Import Details</h5>
                            <br/>
                            <MDBRow className="my_row">
                                <MDBCol md='11'>
                                    <MDBInput labelClass="labelBg" background outline id="importer_name" label='Name of Importer' type='text' required />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="my_row">
                                <MDBCol md='11'>
                                    <MDBInput labelClass="labelBg" background type='textarea' label='Observations' rows='2' />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <div className="my_hr"><hr/></div>
                    <h5>Product Details</h5>
                    <MDBRow style={{marginRight:'25px'}}>
                        <MDBCol md='4'>
                            <MDBInput labelClass="labelBg" background outline id='prod_name' label='Product Name' type='text' required />
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBInput labelClass="labelBg" background outline id='cons_name' label='Consignment Size' type='text' required />
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBInput labelClass="labelBg" background outline id='id_marks' label='Identification Marks' type='text' required />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow style={{marginRight:'25px'}} className="my_row">
                        <MDBCol md='4'>
                            <MDBInput labelClass="labelBg" background outline id='samp_size' label='Sample Size' type='text' required />
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBInput labelClass="labelBg" background outline id='samp_marks' label='Identification Marks on Samples' type='text' required />
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBInput labelClass="labelBg" background outline id='app_stands' label='Applicable Standards' type='text' required />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow style={{float: 'right'}}>
                        <MDBCol md='4'>
                            <button className="btn btn-info btn-sm" style={{marginTop: '20px'}}>Add</button>

                        </MDBCol>
                        <MDBCol md='4'>
                            <button className="btn btn-danger btn-sm" style={{marginTop: '20px'}}>Remove</button>
                        </MDBCol>
                    </MDBRow>

                    <br/><br/>
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

export default SampleForm;