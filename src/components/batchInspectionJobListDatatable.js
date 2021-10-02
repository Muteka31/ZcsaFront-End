/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
    MDBContainer, MDBRow, MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBCardBody, MDBCard, MDBCardHeader,
    MDBDataTable
} from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import {unassignedIqmBatchInspections}  from "../redux/actions/iqmBatchInspectionCreators";
import SeniorInspectorNavBar from "./seniorInspectorNavBar";
import {Modal} from "react-bootstrap";
import axios from "axios";
import {BASE_URL} from "../redux/constants";
import {getAssignableInspectors} from "../redux/actions/assignedInspectorCreator";
import swal from "sweetalert";
import Child from "./dqmModals/viewInspectionDetails";


export default function BatchInspectionJobListDatatable(){

    const dispatch = useDispatch()
    const batchInspectionsState  = useSelector((state) => state.iqmBatchInspection);
    const batchInspections = [];
    const [assignShow, setAssignShow] = useState(false);
    const [selectedInspector, setSelectedInspector] = useState();

    const inspectorSelect = (event) => {
        setSelectedInspector(event.target.value);
        console.debug(selectedInspector);
    }

    const [appId, setAppId] = useState();

    const portOfEntry = 'VIC';
    useEffect(() => {
        dispatch(unassignedIqmBatchInspections(portOfEntry));
        dispatch(getAssignableInspectors());
    }, []);

    const currentAppId = (id) => {
        setAppId(id);
        console.debug("APP ID: ", appId);
    }

    const assignInspector = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/assignTask',{
            "appId": appId,
            "userId": selectedInspector,
        }).then(response => {
            console.debug("Status: ", response.status);
            console.debug("Data: ", response.data);
            setAssignShow(false);
            //setAlertShow(true);
            alertSuccess();
        }).catch(error => {
            console.log("Status:",error);
        });
    }

    const alertSuccess = () =>  {
        swal(
            {
                closeOnClickOutside: false,
                title:"success",
                text: "Task was successfully assigned!",
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
                        window.location.reload(false);
                        break;
                    default:

                }
            });
    }

    const [data, setData] = useState("");
    const [inspection, setInspection] = useState("");

    const parentToChild = () => {
        setData(inspection);
    };


    batchInspectionsState.map((inspection) => (
        batchInspections.push({
            id:inspection.id,
            entry_reg_number:inspection.entry_reg_number,
            exporter_name:inspection.exporter_name,
            consignee_name:inspection.consignee_name,
            declarant_name:inspection.declarant_name,
            item_description:inspection.item_description,
            action:
                <div>
                    <Child parentToChild={data} />

                    <button className="btn btn-sm btn-info"
                            onClick={() => {
                                parentToChild();
                                setInspection(inspection);
                            }}>
                        View
                    </button>

                    <button className="btn btn-sm btn-success"
                            onClick={() =>{
                                setAssignShow(true);
                                currentAppId(inspection.id);
                            }}>
                        Assign
                    </button>

                </div>

        })
    ));

    const assigneeState  = useSelector((state) => state.assignedInspector);
    const select_inspectors_list = [];
    assigneeState.map((assignedInspector) => {
        select_inspectors_list.push({
            firstName: assignedInspector.firstName,
            lastName: assignedInspector.lastName,
            value:assignedInspector.firstName + " " + assignedInspector.lastName,
        })
    });

    return(
        <>
            <SeniorInspectorNavBar></SeniorInspectorNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem ><b>Senior Inspector Dashboard</b></MDBBreadcrumbItem>
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

            <Modal size="sm" show={assignShow} onHide={() => setAssignShow(false)}
                   aria-labelledby="example-modal-sizes-title-sm" style={{verticalAlign:"middle"}}>

                <Modal.Body>
                    <MDBCard>
                        <MDBCardHeader color='special-color'> Select Officer </MDBCardHeader>
                        <MDBCardBody>
                            <form>
                                <MDBRow className="">
                                    <MDBCol style={{marginTop: '-1.1rem'}} md="11">
                                        <p><label>Select Inspector</label></p>
                                        <select className="browser-default custom-select mb-1" onChange={inspectorSelect}>
                                            <option disabled="">Select Inspector: </option>
                                            {select_inspectors_list.map((e, key) => {
                                                return <option key={key} value={e.value}>{e.firstName} {e.lastName}</option>;
                                            })}
                                        </select>
                                    </MDBCol>
                                    <MDBCol md="11">
                                        <div style={{marginTop: '-1.1rem'}}></div>
                                        <button onClick={assignInspector} type='submit' className="btn btn-block btn-sm btn-success">Assign</button>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </Modal.Body>
            </Modal>

        </>
    )
}


