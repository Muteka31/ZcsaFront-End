
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
  MDBTable, 
  MDBTableBody,
  MDBIcon, 
  MDBBtn
} from 'mdbreact';

import InspectorNavBar from './inspectorNavBar';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import swal from 'sweetalert';

import { Link} from "react-router-dom";

function seniorDashIndex(){

    //const history = useHistory();

    return (
    <>
        <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
        <MDBBreadcrumb>
            <MDBBreadcrumbItem >SENIOR INSPECTOR Dashboard</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Batch Inspections </MDBBreadcrumbItem>
       </MDBBreadcrumb>
            <MDBRow className="mt-1">
             <MDBCol>

             <MDBBtn outline color="warning"
             style={{width:200,height:200}}>
                 <MDBRow >
                 <MDBIcon style={{color:"grey"}} className="ml-3" size="9x" icon="globe-africa" />
                 </MDBRow>
                <MDBRow className="mt-2">
                <Link to="/senior-inspector-dashboard/ascuyda-applications">  
                
                <h6>ASCUYDA Applications</h6></Link> 
                </MDBRow>
                                     
            </MDBBtn>

            <MDBBtn outline color="warning"
             style={{width:200,height:200}}>
                 <MDBRow >
                 <MDBIcon style={{color:"grey"}} className="ml-3" size="9x" far icon="file-alt" />
                 </MDBRow>
                <MDBRow className="mt-2">
                <Link to="/senior-inspector-dashboard/ascuyda-applications">  
                <h6>Inspections Reports</h6></Link> 
                </MDBRow>
                                     
            </MDBBtn>
            
            <MDBBtn outline color="warning"
             style={{width:200,height:200}}>
                 <MDBRow >
                 <MDBIcon style={{color:"grey"}} className="ml-3" size="9x" icon="users" />
                 </MDBRow>
                <MDBRow className="mt-2">
                <Link to="/senior-inspector-dashboard/ascuyda-applications">  
                <h6>Station Inspectors</h6></Link> 
                </MDBRow>
                                     
            </MDBBtn>

            

             </MDBCol>
            </MDBRow>   
      
        </MDBContainer>
    </>  
    )
}

export default seniorDashIndex;
