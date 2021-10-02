import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow, MDBBreadcrumb, MDBBreadcrumbItem,MDBCol,MDBCardBody,MDBCard,MDBCardHeader,MDBAnimation, MDBDataTable} from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InspectorNavBar from "./inspectorNavBar";
import {allIqmSampleSubmission}  from "../redux/actions/iqmSampleSubmissionCreators";
import UserService from "../redux/services/UserService";

function IQMSampleSubmissionDatatable(){

    const dispatch = useDispatch()
    const sampleSubmissionsState  = useSelector((state) => state.iqmSampleSubmission);
    const sampleSubmissions = [];


    useEffect(() => {
      dispatch(allIqmSampleSubmission())
    }, []);
    
    sampleSubmissionsState.map((sampleSubmission) => (  
        sampleSubmissions.push({
          id:sampleSubmission.id,
          product_name:sampleSubmission.inspectionChecklistId.productId.name,
          standard:sampleSubmission.inspectionChecklistId.applicable_standard,
          brand_name:sampleSubmission.inspectionChecklistId.brand_name,
          date_sampled:sampleSubmission.dateSampled,
          testDescription:sampleSubmission.testDescription,
          action:<button className="btn btn-sm btn-default">
              <Link className="text-white" to={`/inspector-dashboard/iqm-batch-inspection-report/${sampleSubmission.id}`}>Generate Inspection Report</Link>
          </button>
        })
      ));

    return(
      <>
      <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
            <MDBBreadcrumb color="warning-color">
            <MDBBreadcrumbItem ><b>INSPECTOR Dashboard</b></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><b>Sample Submission </b></MDBBreadcrumbItem>
       </MDBBreadcrumb>
            <MDBRow className="mt-1">
            <MDBCol>
                    <MDBCard>
                        <MDBCardHeader color='special-color'>
                          Sample Submission
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
                        label: 'Product Name',
                        field: 'product_name',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Standard',
                        field: 'standard',
                        sort: 'asc',
                        width: 170
                    },
                    {
                        label: 'Brand Name',
                        field: 'brand_name',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Date Sample',
                        field: 'date_sampled',
                        sort: 'asc',
                        width: 200
                    },
                    
                    {
                        label: 'Test Description',
                        field: 'testDescription',
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
                    rows: sampleSubmissions
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

export default IQMSampleSubmissionDatatable;