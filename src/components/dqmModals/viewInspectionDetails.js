/* eslint-disable */
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCol, MDBDataTable, MDBIcon, MDBInput,
    MDBRow, MDBTable, MDBTableBody
} from "mdbreact";
import ModalHeader from "react-bootstrap/ModalHeader";

export default function Child({ parentToChild }) {

    console.log(parentToChild.id);


    if (parentToChild.id) {

        const [detailsShow, setDetailsShow] = useState(true);
        const closeDetails = () => {
            setDetailsShow(false);
        }

        return (
            <>
                <Modal size="lg" show={detailsShow} onHide={() => setDetailsShow(false)}>
                    <Modal.Body>
                        <MDBCard>
                            <MDBCardHeader color='special-color'>Application Details </MDBCardHeader>
                            <MDBCardBody cascade className='text-center'>
                                <MDBRow className="mt-3">
                                    <MDBCol>
                                        <MDBTable bordered>
                                            <MDBTableBody>
                                                <tr>
                                                    <td className="text-left"><b>Item Description:</b></td>
                                                    <td className="text-left">{parentToChild.item_description}</td>
                                                    <td className="text-left"><b>Port of Entry:</b></td>
                                                    <td>{parentToChild.portOfEntry}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left"><b>Quantity:</b></td>
                                                    <td className="text-left">{parentToChild.quantity}</td>
                                                    <td className="text-left"><b>Unit of Measure:</b></td>
                                                    <td>{parentToChild.unit_of_measure}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left"><b>Invoice:</b></td>
                                                    <td className="text-left">{parentToChild.invoice}</td>
                                                    <td className="text-left"><b>Total Amount</b></td>
                                                    <td className="text=left">{parentToChild.total_amount}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left"><b>Vehicle Registration:</b></td>
                                                    <td className="text-left">{parentToChild.vehicle_reg_number}</td>
                                                    <td className="text-left"><b>Entry Registration</b></td>
                                                    <td className="text=left">{parentToChild.entry_reg_number}</td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCol>
                                </MDBRow>

                                <hr/>
                                <MDBRow>
                                    <MDBCol md='6'>
                                        <MDBCard>
                                            <MDBCardBody>
                                                <MDBCardTitle>Declarant Details</MDBCardTitle>
                                                <MDBTable>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td className="text-left">Name:</td>
                                                            <td className="text-left">{parentToChild.declarant_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Contact</td>
                                                            <td className="text-left">{parentToChild.declarant_contact}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Address</td>
                                                            <td className="text-left">{parentToChild.declarant_address}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">TPIN</td>
                                                            <td className="text-left">{parentToChild.declarant_tpin}</td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>

                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md='6'>
                                        <MDBCard>
                                            <MDBCardBody>
                                                <MDBCardTitle>Consignee Details</MDBCardTitle>
                                                <MDBTable>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td className="text-left">Name:</td>
                                                            <td className="text-left">{parentToChild.consignee_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Contact</td>
                                                            <td className="text-left">{parentToChild.consignee_contact}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Address</td>
                                                            <td className="text-left">{parentToChild.consignee_address}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">TPIN</td>
                                                            <td className="text-left">{parentToChild.consignee_tpin}</td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>

                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className="mt-3">
                                    <MDBCol md='6'>
                                        <MDBCard>
                                            <MDBCardBody>
                                                <MDBCardTitle>Exporter Details</MDBCardTitle>
                                                <MDBTable>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td className="text-left">Name:</td>
                                                            <td className="text-left">{parentToChild.exporter_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Contact</td>
                                                            <td className="text-left">{parentToChild.exporter_contact}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Address</td>
                                                            <td className="text-left">{parentToChild.exporter_address}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">TPIN</td>
                                                            <td className="text-left">{parentToChild.exporter_tpin}</td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>

                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                    <MDBBtn outline color="danger" className="ml-3 mt-3"
                                            onClick={() => {
                                                closeDetails();
                                            }}>
                                        Close Details
                                        <MDBIcon icon="money-check" className="ml-5"/>
                                    </MDBBtn>
                                </MDBRow>


                            </MDBCardBody>
                        </MDBCard>
                    </Modal.Body>
                </Modal>
            </>
        )
    } else {
        return (
            <>.</>
        )
    }


}

