import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow, MDBBreadcrumb, MDBBreadcrumbItem,MDBCol,MDBCardBody,MDBCard,MDBCardHeader,MDBAnimation, MDBDataTable} from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InspectorNavBar from "./inspectorNavBar";
import {allForeignTankerApplications}  from "../redux/actions/iqmForeignTankerCreators";
import UserService from "../redux/services/UserService";

function ForeignInspectionJobListDatatable(){

    const dispatch = useDispatch()
    const foreignTankerInspectionsState  = useSelector((state) => state.iqmForeignTankerInspection);
    const foreignTankerInspections = [];

    console.log(foreignTankerInspections);

    useEffect(() => {
        dispatch(allForeignTankerApplications('2'))
    }, []);

    /* foreignTankerInspectionsState.map((inspection) => (
        foreignTankerInspections.push({
            id:inspection.id,
            entry_reg_number:inspection.entry_reg_number,
            exporter_name:inspection.exporter_name,
            consignee_name:inspection.consignee_name,
            declarant_name:inspection.declarant_name,
            item_description:inspection.item_description,
            action:<button className="btn btn-sm btn-success">
                <Link className="text-white" to={`/inspector-dashboard/foreign-tanker-inspection-details/${inspection.id}`}>Inspect</Link>
            </button>
        })
    )); */


    return(
        <>
            <InspectorNavBar></InspectorNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem ><b>Inspector Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Foreign Tanker Inspections </b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBRow className="mt-1">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardHeader color='special-color'>
                                Foreign Tanker Inspections
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
                                                    label: 'Vehicle Reg #',
                                                    field: 'vehicle_reg_number',
                                                    sort: 'asc',
                                                    width: 100
                                                },
                                                {
                                                    label: 'Company Name',
                                                    field: 'company_name',
                                                    sort: 'asc',
                                                    width: 170
                                                },
                                                {
                                                    label: 'Vehicle Type',
                                                    field: 'vehicle_type',
                                                    sort: 'asc',
                                                    width: 200
                                                },
                                                {
                                                    label: 'Vehicle Model',
                                                    field: 'vehicle_model',
                                                    sort: 'asc',
                                                    width: 100
                                                },
                                                {
                                                    label: 'Year of Make',
                                                    field: 'year_of_make',
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
                                            //rows: foreignTankerInspections
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

export default ForeignInspectionJobListDatatable;