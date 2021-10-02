import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCol,
    MDBCardBody,
    MDBCard,
    MDBCardHeader,
    MDBAnimation,
    MDBDataTable,
    MDBIcon, MDBDropdownToggle
} from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {allIqmBatchInspections}  from "../redux/actions/iqmBatchInspectionCreators";
import {getAssignableInspectors} from "../redux/actions/assignedInspectorCreator";
import UserService from "../redux/services/UserService";
import InspectorNavBar from "./inspectorNavBar";

function BatchInspectionAssignedList(){

    //const userName = UserService.getFullName();


    const dispatch = useDispatch()
    const batchInspectionsState  = useSelector((state) => state.iqmBatchInspection);
    const batchInspections = [];

    //console.log(UserService.getAttributes());

    const station_code = "LIV";

    useEffect(() => {
        const userId = 'Malama Kangwa';
        dispatch(allIqmBatchInspections(userId))
        dispatch(getAssignableInspectors(station_code));
    }, []);


    batchInspectionsState
        .filter(inspection => inspection.userId != null )
        //.filter(inspection => inspection.userId.includes(userId))
        .map((inspectionsFiltered) => (
            batchInspections.push({
                id:inspectionsFiltered.id,
                entry_reg_number:inspectionsFiltered.entry_reg_number,
                exporter_name:inspectionsFiltered.exporter_name,
                consignee_name:inspectionsFiltered.consignee_name,
                declarant_name:inspectionsFiltered.declarant_name,
                item_description:inspectionsFiltered.item_description,
                action:<div>
                    <button className="btn btn-sm btn-success">
                    <Link className="text-white" to={`/inspector-dashboard/batch-inspection-details/${inspectionsFiltered.id}`}>Inspect</Link>
                    </button>
                </div>
        })
    ));


    return(
        <>
            <InspectorNavBar></InspectorNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem><b>Inspector Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Batch Inspections </b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBRow className="mt-1">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardHeader color='special-color'>
                                Batch Inspections
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
                                            rows: batchInspections
                                        }
                                    }
                                />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default BatchInspectionAssignedList;