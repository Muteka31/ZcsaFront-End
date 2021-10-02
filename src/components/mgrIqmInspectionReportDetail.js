import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { MDBRow, 
         MDBCol,
         MDBCard,
         MDBBtn,
         MDBTable,
         MDBTableBody,
         MDBBreadcrumb,
         MDBBreadcrumbItem,
         MDBContainer,MDBInput,
         MDBCardHeader,MDBCardBody} from 'mdbreact';
import InspectorNavBar from "./inspectorNavBar";
import UserService from "../redux/services/UserService";
import {allIqminspectionReports}  from "../redux/actions/inspectionReportCreators";
import swal from 'sweetalert';
import { useHistory} from "react-router-dom";


function ManagerIQMInspectionReportDetail(){

    const history = useHistory();
    const userId = UserService.getUserId();
    const { reportId } = useParams();

    const dispatch = useDispatch()
    const iqmInspectionReportsState  = useSelector((state) => state.iqmInspectionReport);
    const [iqmInspectionReport, setIqmInspectionReport] = useState();
    
    
    
    useEffect(() => {
      dispatch(allIqminspectionReports())
    }, []);
    
    useEffect(() => {
        setIqmInspectionReport(iqmInspectionReportsState.find(iqmInspectionReport => iqmInspectionReport.id === parseInt(reportId, 10)))
      }, [reportId, iqmInspectionReportsState]);  
    


return iqmInspectionReport ?(
    <>
    <InspectorNavBar></InspectorNavBar>
    <MDBContainer>
        <MDBCol md="15">
        <MDBBreadcrumb color="warning-color">
            <MDBBreadcrumbItem ><b>MANAGER Dashboard</b></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><b>Batch Inspection Report </b></MDBBreadcrumbItem>
       </MDBBreadcrumb>
        <MDBCard className="mt-3">
        <MDBCardHeader color='special-color'>
          Batch Inspection Report
        </MDBCardHeader>

        <MDBCardBody> 
        <MDBCol>            
            <MDBTable bordered>
            <MDBTableBody>
            <tr>
            <td className="text-left"><b>Product Name</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.inspectionChecklistId.productId.name}</td>
            <td className="text-left"><b>Brand Name </b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.inspectionChecklistId.brand_name}</td>
            <td className="text-left"><b>Applicable Standard</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.inspectionChecklistId.applicable_standard}</td>
            </tr>
            <tr>
            <td className="text-left"><b>Origin Country </b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.inspectionChecklistId.countryId.name}</td>
            <td className="text-left"><b>Entry Port</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.inspectionChecklistId.portOfEntryId.name}</td>
            <td className="text-left"><b>Batch No</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.inspectionChecklistId.batch_No}</td>
            </tr>
            <tr>
            <td className="text-left"><b>Date Sampled</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.dateSampled}</td>
            <td className="text-left"><b>Test Description</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.testDescription}</td>
            <td className="text-left"><b>Test Priority</b></td>
            <td className="text-left">{iqmInspectionReport.sampleSubmissionId.testPriority}</td>
            </tr>
            </MDBTableBody>
            </MDBTable>

                            

            </MDBCol>
            <h6>INSPECTION FINDINGS:</h6>
            <form >
                <div className="row">
                <div className="col-6">
                <MDBInput
                    label="Total non-conformities" 
                    outline
                    type="text" 
                    id="totalNonConformities"
                    disabled
                    value={iqmInspectionReport.totalNonConformities}
                    background 
                    className="form-control disabled"/>
                </div>
                <div className="col-6">
                <MDBInput 
                    label="Critical"
                    outline
                    type="text" 
                    id="critical"
                    disabled
                    value={iqmInspectionReport.critical}
                    background 
                    className="form-control disabled"/>
                </div>
                <div className="col">
                
                <MDBInput 
                    label="Major"
                    outline
                    type="text" 
                    id="major"
                    disabled
                    value={iqmInspectionReport.major}
                    background 
                    className="form-control disabled"/>
                </div>
                <div className="col">
            
                <MDBInput
                    label="Minor" 
                    outline
                    type="text" 
                    disabled
                    id="minor"
                    value={iqmInspectionReport.minor}
                    background 
                    className="form-control disabled"/>
                </div>
                </div>
                
                <button type="submit" className="mt-3 btn btn-sm btn-success">Approve Report</button>
                </form> 
                <br/>
                </MDBCardBody>  
          </MDBCard>
      </MDBCol>
      </MDBContainer>
  </>               
):null
}


export default ManagerIQMInspectionReportDetail;