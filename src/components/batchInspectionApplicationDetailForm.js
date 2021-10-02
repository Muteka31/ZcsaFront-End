import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow, MDBCol,  MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBCardTitle,MDBInput, MDBCardBody,MDBTable, MDBTableBody, MDBBtn, MDBIcon } from 'mdbreact';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import InspectorNavBar from './inspectorNavBar';
import {getAscuydaApplications} from "../redux/actions/ascuydaApplicationCreators";
import {createIqmBatchInspection} from "../redux/actions/iqmBatchInspectionCreators";
import swal from 'sweetalert';
import { useHistory} from "react-router-dom";
import {allInspectors} from "../redux/actions/inspectorCreators";

function BatchInspectionApplicationDetailForm(){

  const history = useHistory();
  const { applicationId } = useParams();
  const dispatch = useDispatch();
  const ascuydaApplicationsState  = useSelector((state) => state.ascuydaApplication);
  const inspectorsState = useSelector((state) => state.inspector);
  const [ascuydaApplication, setAscuydaAppliation] = useState();
  const [inspector, setInspector] = useState();
  
  const select_inspector_list = [];

  useEffect(() => {
    dispatch(getAscuydaApplications());
    dispatch(allInspectors());
  },[]);

  useEffect(() => {
    setAscuydaAppliation(ascuydaApplicationsState.find(ascuydaApplication => ascuydaApplication.id === applicationId))
  },[applicationId, ascuydaApplicationsState]);  


  inspectorsState.map((inspector) => {select_inspector_list.push({
    name: inspector.firstName +" "+inspector.lastName,
    value:inspector.id,
  })
});

const inspectorSelect = (event) => {
  setInspector(parseInt(event.target.value));
}
  const createInspection = (event) =>{
        event.preventDefault();
        dispatch(createIqmBatchInspection({
            "exporter_name":ascuydaApplication.exporter_name,
            "exporter_address":ascuydaApplication.exporter_address,
            "consignee_name":ascuydaApplication.consignee_name,
            "consignee_address":ascuydaApplication.consignee_address,
            "consignee_tpin":ascuydaApplication.consignee_tpin,
            "consignee_contact":ascuydaApplication.consignee_contact,
            "declarant_name":ascuydaApplication.declarant_name,
            "declarant_address":ascuydaApplication.declarant_address,
            "declarant_contact":ascuydaApplication.declarant_contact,
            "declarant_tpin":ascuydaApplication.declarant_tpin,
            "Item_description": ascuydaApplication.item_description,
            "quantity":ascuydaApplication.quantity,
            "unit_of_measure":ascuydaApplication.unit_of_measure,
            "invoice":ascuydaApplication.invoice,
            "total_amount":ascuydaApplication.total_amount,
            "vehicle_reg_number": ascuydaApplication.vehicle_reg_number,
            "point_of_entry": ascuydaApplication.point_of_entry,
            "entry_reg_number":ascuydaApplication.entry_reg_number,
            "inspectorId":inspector
        })).then((response) => {
              console.log(response)
 
              if(response.type == "CREATE_IQM_BATCH_INSPECTION_SUCCESS"){
                const status = response.payload.status;
                if(status == 200) {
                  swal(
                    {
                    closeOnClickOutside: false,
                    title:"success",
                    text: "Inspection Assigned ",
                    icon: "success",
                    buttons: {
                      list: {
                        text:"Back",
                        value:"list",
                        className:"grey"
                      }
                      
                    },
                  })
                  .then((value) => {
                    switch (value) {
                      case "list":
                        history.push("/senior-inspector-dashboard/ascuyda-applications")
                        break;       
                      default:
                        
                    }
                  });

              }else{
              }
                 
              }else{
                console.log(response.type);
                swal(
                  {
                  title:"Error",
                  text: "Inspection Not Assigned ",
                  icon: "warning",
                  buttons: {
                    list: {
                      text:"Back",
                      value:"list",
                      className:"grey"
                    },
                    reject: {
                      text:"Reject Application",
                      value:"reject",
                      className:"red"
                    }
                    
                  },
                })
                .then((value) => {
                  switch (value) {
                    case "list":
                      history.push("/senior-inspector-dashboard/ascuyda-applications")
                      break;
                    case "reject":
                       /** Logic for rejecting Application */
                      break;         
                    default:
                      
                  }
                });  
              }
              
        })
  }

    return ascuydaApplication ?(
      <>
      <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>SNR Dashboard</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>ASYCUDA Application</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Details</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        <MDBCard className="mt-3">
          
          <MDBCardBody cascade className='text-center'>
          <MDBRow className="mt-3">
            <MDBCol>
            <MDBTable bordered>
              <MDBTableBody>
                <tr>
                  <td className="text-left"><b>Item Description:</b></td>
                  <td className="text-left">{ascuydaApplication.item_description}</td>
                  <td className="text-left"><b>Point of Entry:</b></td>
                  <td>{ascuydaApplication.point_of_entry}</td>
                </tr>
                <tr>
                  <td  className="text-left"><b>Quantity:</b></td>
                  <td className="text-left">{ascuydaApplication.quantity}</td>
                  <td className="text-left"><b>Unit of Measure:</b></td>
                  <td>{ascuydaApplication.unit_of_measure}</td>
                </tr>
                <tr>
                  <td className="text-left"><b>Invoice:</b></td>
                  <td className="text-left">{ascuydaApplication.invoice}</td>
                  <td className="text-left"><b>Total Amount</b></td>
                  <td className="text=left">{ascuydaApplication.total_amount}</td>
                </tr>
                <tr>
                  <td className="text-left"><b>Vehicle Registration:</b></td>
                  <td className="text-left">{ascuydaApplication.vehicle_reg_number}</td>
                  <td className="text-left"><b>Entry Registration</b></td>
                  <td className="text=left">{ascuydaApplication.entry_reg_number}</td>
                </tr>
                <tr>
                  <td>
                    <MDBBtn outline color="default" className="btn-block">
                    View Payment Details
                    <MDBIcon icon="money-check" className="ml-5"/>
                  </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBCol>
          </MDBRow>
           
            <hr />
            <MDBRow>
            <MDBCol md='4'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Declarant Details</MDBCardTitle>
                  <MDBTable>
                      <MDBTableBody>
                        <tr>
                          <td className="text-left">Name:</td>
                          <td className="text-left">{ascuydaApplication.declarant_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Contact</td>
                          <td className="text-left">{ascuydaApplication.declarant_contact}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Address</td>
                          <td className="text-left">{ascuydaApplication.declarant_address}</td>
                        </tr>
                        <tr>
                          <td className="text-left">TPIN</td>
                          <td className="text-left">{ascuydaApplication.declarant_tpin}</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Consignee Details</MDBCardTitle>
                  <MDBTable>
                      <MDBTableBody>
                        <tr>
                          <td className="text-left">Name:</td>
                          <td className="text-left">{ascuydaApplication.consignee_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Contact</td>
                          <td className="text-left">{ascuydaApplication.consignee_contact}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Address</td>
                          <td className="text-left">{ascuydaApplication.consignee_address}</td>
                        </tr>
                        <tr>
                          <td className="text-left">TPIN</td>
                          <td className="text-left">{ascuydaApplication.consignee_tpin}</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Exporter Details</MDBCardTitle>
                  <MDBTable>
                      <MDBTableBody>
                        <tr>
                          <td className="text-left">Name:</td>
                          <td className="text-left">{ascuydaApplication.exporter_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Contact</td>
                          <td className="text-left">{ascuydaApplication.exporter_contact}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Address</td>
                          <td className="text-left">{ascuydaApplication.exporter_address}</td>
                        </tr>
                        <tr>
                        <td className="text-left">Country</td>
                          <td className="text-left">{ascuydaApplication.exporter_country}</td>
                        </tr>
                        
                      </MDBTableBody>
                    </MDBTable>
                    
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            </MDBRow >
            
            <MDBRow className="mt-3">
            <MDBCol md='12' className="mb-3">
                <select className="browser-default custom-select" onChange={inspectorSelect}>
                    <option value="" disabled="">Select Inspector: </option>
                    {select_inspector_list.map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                    })}
                </select>
            </MDBCol>
            <MDBCol md='12'>
              <MDBBtn color="success" className="btn-block" onClick={createInspection}>Assign Application</MDBBtn>
            </MDBCol>
            </MDBRow>
            <MDBRow>

            <MDBCol md='12' className="mt-5">
            <form>
                <MDBInput type="textarea" rows="2" label="Kindly Enter Discard Comment" icon="pencil-alt" />
              <div className="text-center">
                <MDBBtn outline color="danger" className="btn-block">Reject
                <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
            </MDBCol>
            </MDBRow>
            
          </MDBCardBody>
        </MDBCard>
        </MDBContainer>
      </>
    ):null
}

export default BatchInspectionApplicationDetailForm;