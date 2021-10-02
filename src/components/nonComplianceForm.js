import React, { useEffect, useState } from "react";
import {MDBContainer,
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
    MDBIcon } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../utils/style.css';
import InspectorNavBar from './inspectorNavBar';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {allIqmBatchInspections}  from "../redux/actions/iqmBatchInspectionCreators";
import {getTowns} from "../redux/actions/townCreators";
import {getCountries}  from "../redux/actions/countryCreators";
import {getProducts} from "../redux/actions/productCreators";
import {getIqmProductCheckLists} from "../redux/actions/iqmProductCheckListCreators";
import {deleteIqmProductCheckList} from "../redux/actions/iqmProductCheckListCreators";
import {createIqmProductCheckList} from "../redux/actions/iqmProductCheckListCreators";
import {createIqmSampleRequestForm} from "../redux/actions/iqmSampleRequestFormCreators";
import { allInspectors} from "../redux/actions/inspectorCreators";
import {getStations} from "../redux/actions/stationCreators";
import swal from 'sweetalert';

import { useHistory} from "react-router-dom";

function NonComplianceForm(){

    const { batchInspectionId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const batchInspectionsState  = useSelector((state) => state.iqmBatchInspection);
    const productCheckListsState = useSelector((state) => state.iqmProductCheckList);
    const townsState  = useSelector((state) => state.town);
    const countriesState  = useSelector((state) => state.country);
    const productsState  = useSelector((state) => state.product);
    const stationsState  = useSelector((state) => state.station);

    const [batchInspection, setBatchInspection] = useState();
    const [product, setProduct] = useState();
    const [station, setStation] = useState();
    const [country, setCountry] = useState();
    const [town, setTown] = useState();
    const [purposeOfSampling, setPurposeOfSampling] = useState();
    const [observation, setObservation] = useState();
    const [manfDate, setManfDate] = useState(new Date());
    const [expiDate, setExpiDate] = useState(new Date());





    return (
        <>
            <InspectorNavBar></InspectorNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem ><b>INSPECTOR Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Non-Compliance Form</b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBCard className="mt-3">
                    <MDBCardHeader color='special-color'>
                        Non-Compliance Details
                    </MDBCardHeader>
                </MDBCard>

                <MDBCard className="card-body">
                        <MDBRow className="my_row">
                            <MDBCol className="col-md-6">
                                <MDBInput label="NC Report No" outline
                                          id="nc_report_no"
                                          name="ncReportNo"
                                          className="form-control"
                                          />
                            </MDBCol>

                            <MDBCol className="col-md-6">
                                <div className="md-form">
                                    Date of Inspection: <DatePicker
                                    id="inspectionDate"
                                    dateFormat="dd/MM/yyyy"
                                    selected={manfDate}
                                    className="ml-3"
                                    />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="col-md-3">
                                <MDBInput label="Establishment"
                                          outline
                                          id="establishment"
                                          name="establishment"
                                          className="form-control"
                                />
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <MDBInput label="Area / Unit of Establishment"
                                          outline
                                          id="establishment-unit"
                                          name="establishmentUnit"
                                          className="form-control"
                                />
                            </MDBCol>

                            <MDBCol className="col-md-6">
                                <MDBInput label="Location"
                                          outline
                                          id="location"
                                          name="location"
                                          className="form-control"
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol className="col-md-3">
                                <MDBInput label="Classification"
                                          outline
                                          id="classification"
                                          name="classification"
                                          className="form-control"
                                />
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <MDBInput label="Applicable Standard"
                                          outline
                                          id="standard"
                                          name="standard"
                                          className="form-control"
                                />
                            </MDBCol>

                            <MDBCol className="col-md-6">
                                <MDBInput label="Clause No."
                                          outline
                                          id="clauseNo"
                                          name="clauseNo"
                                          className="form-control"
                                />
                            </MDBCol>
                        </MDBRow>



                        <br/><br/>
                        <MDBRow className="my_row">
                            <MDBCol className="col-md-6">
                                <div className="m-3">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Upload Signed Form: </label>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol className="col-md-6">
                                <div className="md-form">
                                    <div>Date of Verification:</div> <DatePicker
                                    id="verification-date"
                                    dateFormat="dd/MM/yyyy"
                                />
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <br/><br/>
                        <MDBRow className="row">
                            <div className="">
                                <button type="submit" className="btn btn-success waves-effect waves-light">Submit
                                </button>
                            </div>
                        </MDBRow>
                </MDBCard>


            </MDBContainer>
        </>
    )
}

export default NonComplianceForm;
