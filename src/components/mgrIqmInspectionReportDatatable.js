import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow, MDBBreadcrumb, MDBBreadcrumbItem,MDBCol,MDBCardBody,MDBCard,MDBCardHeader,MDBAnimation, MDBDataTable} from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InspectorNavBar from "./inspectorNavBar";
import {allIqminspectionReports}  from "../redux/actions/inspectionReportCreators";


function ManagerIQMInspectionReportDatatable(){

    const dispatch = useDispatch()
    const iqmInspectionReportsState  = useSelector((state) => state.iqmInspectionReport);
    const inspection_report_lists = [];
    
   useEffect(() => {
      dispatch(allIqminspectionReports())
    }, []);
    
    iqmInspectionReportsState.map((report) => (  
        
        inspection_report_lists.push({
          id:report.id,
          reportno:report.reportNo,
          product_name:report.sampleSubmissionId.inspectionChecklistId.productId.name,
          brand_ame:report.sampleSubmissionId.inspectionChecklistId.brand_name,
          totalnoncomformities:report.totalNonConformities,
          major:report.major,
          minor:report.minor,
          critical:report.critical,
          actions:<button className="btn btn-sm btn-success">
          <Link className="text-white" to={`/manager-dashboard/manager-iqm-inspection-report-detail/${report.id}`}>View</Link>
      </button>
        })
      ));

    return(
      <>
      <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
            <MDBBreadcrumb color="warning-color">
            <MDBBreadcrumbItem ><b>MANAGER DASHBOARD</b></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><b>IQM INSPECTION REPORTS </b></MDBBreadcrumbItem>
       </MDBBreadcrumb>
            <MDBRow className="mt-1">
            <MDBCol>
                    <MDBCard>
                        <MDBCardHeader color='special-color'>
                          Iqm Inspection Reports
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
                        label: 'Report No.',
                        field: 'reportno',
                        sort: 'asc',
                        width: 200
                    },
                    {
                        label: 'Product Name',
                        field: 'product_name',
                        sort: 'asc',
                        width: 200
                    },
                    {
                        label: 'Brand Name',
                        field: 'brand_name',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Total Non Comformities',
                        field: 'totalnoncomformities',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Major',
                        field: 'major',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Minor',
                        field: 'minor',
                        sort: 'asc',
                        width: 170
                    },
                    {
                        label: 'Critical',
                        field: 'critical',
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
                    rows: inspection_report_lists
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

export default ManagerIQMInspectionReportDatatable;