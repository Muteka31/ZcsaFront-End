import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTableHead,
    MDBCard,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCardTitle,
    MDBCardBody,
    MDBCardHeader,
    MDBInput,
    MDBTable,
    MDBTableBody,
    MDBIcon, MDBDataTable
} from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../utils/style.css';
import InspectorNavBar from './inspectorNavBar';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';

import { useHistory} from "react-router-dom";

function ForeignTankerInspectionChecklist(){

    const checklists = [
        {
            id: '1',
            requirement: 'Is the appearance acceptable',
            cat: <select className="browser-default custom-select" aria-label="Default select example">
                <option selected>-- Select --</option>
                <option value="compliant">Critical</option>
                <option value="non-compliant">Major</option>
                <option value="not-inspected">Minor</option>
            </select>,
            group: 'General',
            compliance:
                <select className="browser-default custom-select" aria-label="Default select example">
                    <option selected>-- Select --</option>
                    <option value="compliant">Compliant</option>
                    <option value="non-compliant">Non Compliant</option>
                    <option value="not-inspected">Not Inspected</option>
                    <option value="not-applicable">Not Applicable</option>
                </select>,
            comments: <div className="md-form md-outline">
                <input type="text"
                       id="comments"
                       name="comments"
                       className="form-control white"
                       placeholder="Comments" />
            </div>

        },
        {
            id: '2',
            requirement: 'Is the paint acceptable',
            cat: <select className="browser-default custom-select" aria-label="Default select example">
                <option selected>-- Select --</option>
                <option value="compliant">Compliant</option>
                <option value="non-compliant">Non Compliant</option>
                <option value="not-inspected">Not Inspected</option>
                <option value="not-applicable">Not Applicable</option>
            </select>,
            group: 'General',
            compliance:
                <select className="browser-default custom-select" aria-label="Default select example">
                    <option selected>-- Select --</option>
                    <option value="compliant">Compliant</option>
                    <option value="non-compliant">Non Compliant</option>
                    <option value="not-inspected">Not Inspected</option>
                    <option value="not-applicable">Not Applicable</option>
                </select>,
            comments: <div className="md-form md-outline">
                <input type="text"
                       id="comments"
                       name="comments"
                       className="form-control white"
                       placeholder="Comments" />
            </div>

        },
        {
            id: '3',
            requirement: 'Provision for orange diamond',
            cat: <select className="browser-default custom-select" aria-label="Default select example">
                    <option selected>-- Select --</option>
                    <option value="compliant">Compliant</option>
                    <option value="non-compliant">Non Compliant</option>
                    <option value="not-inspected">Not Inspected</option>
                    <option value="not-applicable">Not Applicable</option>
                </select>,
            group: 'General',
            compliance:
                <select className="browser-default custom-select" aria-label="Default select example">
                    <option selected>-- Select --</option>
                    <option value="compliant">Compliant</option>
                    <option value="non-compliant">Non Compliant</option>
                    <option value="not-inspected">Not Inspected</option>
                    <option value="not-applicable">Not Applicable</option>
                </select>,
            comments: <div className="md-form md-outline">
                        <input type="text"
                               id="comments"
                               name="comments"
                               className="form-control white"
                               placeholder="Comments" />
                    </div>
        }
    ];



    return (
        <>
            <InspectorNavBar></InspectorNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem><b>INSPECTOR Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Fuel Tanker Inspection</b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBCard className="mt-3">
                    <MDBCardHeader color='special-color'>
                        Inspection Checklist
                    </MDBCardHeader>
                </MDBCard>

                <MDBCard className="card-body">
                    <MDBRow className="my_row mt-2">
                        <MDBCol className="col-md-6">
                            <MDBTable bordered>
                                <MDBTableBody>
                                    <tr>
                                        <td className="text-left"><b>Vehicle Registration Number:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b>Make of Vehicle:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b>Year of Make:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b>Assert Size No.:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b>Capacity (Ltrs):</b></td>
                                        <td> Placeholder </td>
                                    </tr>


                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>

                        <MDBCol className="col-md-6">
                            <MDBTable bordered>
                                <MDBTableBody>
                                    <tr>
                                        <td className="text-left"><b>Company Name:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b> Physical Address:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b> Contact No.:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b> Email Address:</b></td>
                                        <td> Placeholder </td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

                <MDBCard className="mt-3">
                    <h4 className="ml-3">Inspection Details</h4>

                    <MDBCardBody>
                        <MDBRow className="mb-3">
                            <MDBCol className="col-md-6">
                                <select
                                    id="year_of_make"
                                    name="yearOfMake"
                                    className="browser-default custom-select"
                                >
                                    <option defaultValue>Select Inspection Purpose</option>
                                    <option value="initial">Initial</option>
                                    <option value="renewal">Renewal</option>
                                    <option value="re-inspection">Re-Inspection</option>
                                </select>
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <input id="address" name="address" className="form-output"
                                    placeholder="Physical Address"/>
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <input id="town" name="town" className="form-output"
                                       placeholder="City / Town"/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol className="col-md-3">
                                Current Non-conformities -
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <input type="text" id="critical" name="critical" className="form-control white"
                                       placeholder="No. Critical" />
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <input type="text" id="major" name="major" className="form-control white"
                                       placeholder="No. Major" />
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <input type="text" id="minor" name="minor" className="form-control white"
                                       placeholder="Minor" />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol className="col-md-6">
                                Final Recommendations: 	The road tank vehicle has been inspected and with the requirement of ZS 371: 2008.
                                And was found be:

                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="defaultChecked"
                                           name="defaultExampleRadios" checked>
                                        <label className="custom-control-label" htmlFor="defaultChecked">Default
                                            checked
                                        </label>
                                    </input>
                                </div>
                            </MDBCol>

                            <MDBCol className="col-md-6">

                            </MDBCol>

                        </MDBRow>

                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="mt-3">
                    <h4 className="ml-3">Checklist Form</h4>

                    <MDBCardBody>
                        <MDBDataTable
                            striped
                            bordered
                            hover
                            data={
                                {
                                    columns: [
                                        {
                                            label: 'Id',
                                            field: 'id',
                                            sort: 'asc',
                                            width: 150
                                        },
                                        {
                                            label: 'Requirement',
                                            field: 'requirement',
                                            sort: 'asc',
                                            width: 170
                                        },
                                        {
                                            label: 'CAT',
                                            field: 'cat',
                                            sort: 'asc',
                                            width: 40
                                        },
                                        {
                                            label: 'Group',
                                            field: 'group',
                                            sort: 'asc',
                                            width: 90
                                        },
                                        {
                                            label: 'Compliance',
                                            field: 'compliance',
                                            sort: 'asc',
                                            width: 70
                                        },
                                        {
                                            label: 'Comments',
                                            field: 'comments',
                                            sort: 'asc',
                                            width: 70
                                        },
                                    ],
                                    rows: checklists
                                }
                            }
                        />
                    <br/><br/>
                    <MDBRow className="row">
                        <div className="">
                            <button type="submit" className="btn btn-success waves-effect waves-light">Submit
                            </button>
                        </div>
                    </MDBRow>
                    </MDBCardBody>
                </MDBCard>


            </MDBContainer>
        </>
    )
}

export default ForeignTankerInspectionChecklist;
