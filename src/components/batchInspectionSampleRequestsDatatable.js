import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow, MDBCol,MDBCardBody,MDBCard,MDBCardHeader,
    MDBDataTable,MDBBreadcrumb,MDBBreadcrumbItem} from 'mdbreact';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {BASE_URL} from '../redux/constants';
import InspectorNavBar from './inspectorNavBar';
import {allSamplesRequestForm} from "../redux/actions/iqmSampleRequestFormCreators";
import {Link} from "react-router-dom";


function BatchInspectionSampleRequestsDatatable(){

    //const sample_requests = useFetch(BASE_URL+'/v1/getInspectorSample','2');

    const dispatch = useDispatch();
    const sampleRequestsState = useSelector((state) => state.iqmSampleRequestForm);
    const sample_requests_list = [];


    useEffect(() => {
        dispatch(allSamplesRequestForm('2'))
    }, []);

    sampleRequestsState.map((sample_request) => (
        sample_requests_list.push({
            id:sample_request.applicationId.id,
            entry_reg_number:sample_request.applicationId.entry_reg_number,
            exporter_name:sample_request.applicationId.exporter_name,
            consignee_name:sample_request.applicationId.consignee_name,
            declarant_name:sample_request.applicationId.declarant_name,
            item_description:sample_request.applicationId.item_description,
            action:<button className="btn btn-sm btn-blue-grey">
                <Link className="text-white" to={`/inspector-dashboard/sample-request-details/${sample_request.applicationId.id}`}>Sample Request Form</Link>
            </button>
        })
    ));

    return(
        <div>
            <InspectorNavBar></InspectorNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem ><b>Inspector Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Sample Requests</b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBRow className="mt-1">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardHeader color='special-color'>
                                Batch Inspection Sample Requests
                            </MDBCardHeader>
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
                                                    label: 'Entry Reg Number',
                                                    field: 'entry_reg_number',
                                                    sort: 'asc',
                                                    width: 100
                                                },
                                                {
                                                    label: 'Exporter Name',
                                                    field: 'exporter_name',
                                                    sort: 'asc',
                                                    width: 170
                                                },
                                                {
                                                    label: 'Consignee Name',
                                                    field: 'consignee_name',
                                                    sort: 'asc',
                                                    width: 200
                                                },
                                                {
                                                    label: 'Declarant Name',
                                                    field: 'declarant_name',
                                                    sort: 'asc',
                                                    width: 100
                                                },
                                                {
                                                    label: 'Item Description',
                                                    field: 'item_description',
                                                    sort: 'asc',
                                                    width: 150
                                                },
                                                {
                                                    label: 'Action',
                                                    field: 'action',
                                                    sort: 'asc',
                                                    width: 100
                                                }
                                            ],
                                            rows: sample_requests_list
                                        }
                                    }
                                />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

function useFetch(url,inspectorId) {
    const [data, setData] = useState([]);
    async function fetchUrl() {
        axios.post(url, null, { params: {
                inspectorId
            }})
            .then(response => {
                setData(response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
}

export default BatchInspectionSampleRequestsDatatable;