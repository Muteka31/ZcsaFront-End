import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, 
    MDBBreadcrumb,MDBBreadcrumbItem, MDBModal, MDBModalHeader,MDBModalFooter, MDBModalBody, MDBAlert, MDBBadge, MDBAnimation, MDBCardBody,MDBBtn, MDBInput,MDBIcon, MDBDataTable} from 'mdbreact';
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import SystemAdminNavBar from "./systemAdminNavBar";
import {BASE_URL} from '../redux/constants';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


export default function Standard(){


    const [disableShow, setDisableShow] = useState(false);
    const [enableShow, setEnableShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [standardId, setStandardId] = useState();
    const [standardName, setStandardName] = useState();
    const [standard, setStandard] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    
    const disableStandard = () => {
        axios.post(BASE_URL+'/v1/disable/standard',{
            "id":standardId
        })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                setDisableShow(false); 
                window.location.reload(false);
            }).catch(error => {
                console.log("Status:",error);  
        });
    }

    const enableStandard = () => {
        axios.post(BASE_URL+'/v1/enable/standard',{
            "id":standardId
        })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                setEnableShow(false); 
                window.location.reload(false);
            }).catch(error => {
                console.log("Status:",error);
                
        });
    }

    const updateStandard = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/standard',{
            "id":standardId,
            "standard":standardName
        })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                setUpdateShow(false); 
                window.location.reload(false);
            }).catch(error => {
                console.log("Status:",error);
                
        });
    }

    const standards = useFetch(BASE_URL+'/v1/getStandard');
    console.log(standards);
    const standards_list = [];

    standards.map((standard) => (
        standards_list.push({
            id:standard.id,
            name:standard.standard,
            status:<div>
                    <MDBBadge color="success" className="p-1">{ standard.status ? 'Active' : null}</MDBBadge>
                    <MDBBadge color='danger'>{ !standard.status ? 'Disabled' : null}</MDBBadge>
                </div>,
            action:<div>
                <button className="mt-0 btn btn-sm btn-grey" onClick={() =>{
                  setStandardId(standard.id);
                  setStandardName(standard.standard);
                  setUpdateShow(true);  
                }}>Update</button>
                { standard.status ?
                  <MDBBtn className="mt-0 btn btn-sm btn-dark" onClick={() =>{
                      setStandardId(standard.id);
                      setStandardName(standard.standard);
                      setDisableShow(true);
                    
                    }}><b>Disable<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn> 
                  :null 
                }
                { !standard.status ?
                  <button className="mt-0 btn btn-sm btn-success" onClick={() =>{
                    setStandardId(standard.id);
                    setStandardName(standard.standard);
                    setEnableShow(true);
                  }}><b>Enable<MDBIcon icon="check" className="ml-2"/></b></button> 
                  :null 
                }{
                    
                }
         </div>
            
        })
    ));

    const createStandard = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/standard',{
            //"id":provinceId,
            "standard":standardName
        })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                setCreateShow(false);
                window.location.reload(false);
            }).catch(error => {
            console.log("Status:",error);

        });
    }


    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(standard)

        
        
        axios.post(BASE_URL+'/v1/standard',{
            "standard":standard,
            "createdBy":2
        })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                window.location.reload(false);
                setIsSuccess(true);
                
            }).catch(error => {
                console.log("Status:",error);
                console.error('Something went wrong!', error);
                setIsFailed(true);
        });
    }
    return(
    <>
      <SystemAdminNavBar></SystemAdminNavBar>
       <MDBContainer>
       <MDBBreadcrumb color="warning-color">
        <MDBBreadcrumbItem ><b>Administrator Dashboard</b></MDBBreadcrumbItem>
        <MDBBreadcrumbItem active><b>Standard Management </b></MDBBreadcrumbItem>
      </MDBBreadcrumb>
            <MDBRow>
                <MDBCol md='12'>
                    <MDBCard>
                        <MDBCardHeader color='special-color'>
                        <MDBRow>
                            <MDBCol className="col-1">
                                 <MDBAnimation type="pulse" infinite>
                                   <h5 color="info-color"><b> {standards_list.length}</b></h5>
                                </MDBAnimation>
                            </MDBCol>
                            <MDBCol className="col-9">Compulsory Standards </MDBCol> 
                            <MDBCol className="col-2 p-0">
                                <div style={{ display: "flex" }}>
                                    <button style={{ marginLeft: "auto" }} 
                                            className="btn btn-sm btn-blue-grey"
                                            onClick={() =>{setCreateShow(true);}}>
                                        <i style={{marginRight:"0.2rem"}} className="fas fa-plus-circle fa-lg"></i>
                                        Add Standard
                                    </button>
                                </div>
                            </MDBCol> 
                         </MDBRow>  
                        </MDBCardHeader>
                        <MDBCardBody style={{paddingTop:"0rem"}}>
                            <MDBDataTable
                                small
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
                                                width: 300
                                            },
                                            {
                                                label: 'Applicable Standard',
                                                field: 'name',
                                                sort: 'asc',
                                                width: 300
                                            },
                                            {
                                                label: 'Status',
                                                field: 'status',
                                                sort: 'asc',
                                                width: 100
                                            },
                                            {
                                                label: 'Action',
                                                field: 'action',
                                                sort: 'asc',
                                                width: 100
                                            },
                                            
                                        ],
                                        rows: standards_list
                                    }
                                }
                            />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <br/>

           <Modal size="sm" show={createShow} onHide={() => setCreateShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm" style={{verticalAlign:"middle"}}>

               <Modal.Body closeButton>
                   <MDBCard>
                       <MDBCardHeader color='special-color'>Create Standard </MDBCardHeader>
                       <MDBCardBody>
                           <form onSubmit={createStandard}>
                               <MDBRow className="">
                                   <MDBCol style={{marginTop: '-1.1rem'}} md="11">
                                       <MDBInput style={{paddingTop: '1rem'}} id="standardName" labelClass="labelBg"
                                                 outline type='text' label='Enter Standard Name: '
                                                 value={standardName} onChange={(e) => setStandardName(e.target.value)}/>
                                   </MDBCol>
                                   <MDBCol md="11">
                                       <div style={{marginTop: '-1.1rem'}}></div>
                                       <button type='submit' className="btn btn-block btn-sm btn-success">Create</button>
                                   </MDBCol>
                               </MDBRow>
                           </form>
                       </MDBCardBody>
                   </MDBCard>
               </Modal.Body>
           </Modal>

            <Modal
                size="sm"
                show={disableShow}
                onHide={() => setDisableShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
                >
                <Modal.Header closeButton>
                {/* <MDBAnimation type="pulse" infinite> */}
                <MDBBtn className="mt-0 btn btn-block btn-sm btn-dark" onClick={() =>{ disableStandard()}}><b>Disable Standard {standardName}<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn> 
                {/* </MDBAnimation> */}
                </Modal.Header>
            </Modal>
            <Modal
                size="sm"
                show={enableShow}
                onHide={() => setEnableShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
                >
                <Modal.Header closeButton>
                {/* <MDBAnimation type="pulse" infinite> */}
                <Button variant="success" className="mt-0 btn btn-block btn-sm btn-success" onClick={() =>{ enableStandard()}} ><b>Enable Standard {standardName}<MDBIcon icon="check" className="ml-2"/></b></Button> 
                {/* </MDBAnimation> */}
                </Modal.Header>
            </Modal>

            <Modal
                size="sm"
                show={updateShow}
                onHide={() => setUpdateShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
                >
                
                <Modal.Body closeButton>
                <MDBCard>
                        <MDBCardHeader color='special-color'>Standard: {standardName} </MDBCardHeader>
                        <MDBCardBody>
                            <form onSubmit={updateStandard}>
                                <MDBRow className="">
                                    <MDBCol md="11">
                                        <MDBInput id="standardName" labelClass="labelBg"  outline type='text' label='Enter Standard Name: '
                                                  value={standardName} onChange={(e) => setStandardName(e.target.value)}/>
                                    </MDBCol>
                                    <MDBCol md="11">
                                        <div style={{marginTop: '1.1rem'}}></div>
                                        <button type='submit' className="btn btn-block btn-sm btn-grey">Update</button>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </Modal.Body>
            </Modal>

        </MDBContainer>
        </>
    )
}
function useFetch(url) {
    const [data, setData] = useState([]);
    async function fetchUrl() {
        axios.post(url, null,null)
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
