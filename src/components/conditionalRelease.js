import {MDBContainer, MDBBtn, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';
import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from "moment";
import {useSelector} from "react-redux";



function ConditionalRelease(){

    const select_station_list = [];
    const stationsState  = useSelector((state) => state.station);

    stationsState.map((station) => {
        select_station_list.push({name: station.name, value:station.id, })
    });

    const stationSelect = (event) => {
        setStation(parseInt(event.target.value));
    }

    const [inputList, setInputList] = useState([{ sampleID: "", labRefNo: "" }]);

    //INPUTS
    const [releaseReason, setReleaseReason] = React.useState();
    const [contactName, setContactName] = React.useState();
    const [contactMobileNo, setContactMobileNo] = React.useState();
    const [contactAddress, setContactAddress] = React.useState();
    const [destinationTown, setDestinationTown] = React.useState();
    const [location, setLocation] = React.useState();
    const [station, setStation] = React.useState();
    const [oldSealNo, setOldSealNo] = React.useState();
    const [newSealNo, setNewSealNo] = React.useState();
    const [quantity, setQuantity] = React.useState();
    const [brandName, setBrandName] = React.useState();
    const [inspectionDate, setInspectionDate] = React.useState();
    const [inspectionLocation, setInspectionLocation] = React.useState();
    const [brandsNo, setBrandsNo] = React.useState();
    const [productsNo, setProductsNo] = React.useState();
    const [samplesDrawnNo, setSamplesDrawnNo] = React.useState();
    const [transportMode, setTransportMode] = React.useState();


    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { sampleID: "", labRefNo: "" }]);
    };



    /*
    conditionalReleaseList.push({
        //id:productCheck.id,
        "destinationContactPerson": contactName,
       "destinationMobile":contactMobileNo,
       "destinationPhysicalAddress":destinationLocation,
       "destinationTown":destinationTown,
       //"entryNo":,
       "stationId":stationSelect.id,
       "newSealNo":newSealNo,
       "oldSealNo":oldSealNo,
       "conditionReleaseReason":releaseReason,
       "transportMode":transportMode,
       "inspectionPlace":location,
       "brandName":brandName,
       "quantity":quantity,
       //"userId":,
        
    })
     */



    return (
        <MDBContainer>

            <MDBCard>
                <MDBCardHeader color='special-color'>Conditional Release Form</MDBCardHeader>
                <MDBCardBody>
                    <MDBRow className="">
                        <MDBCol md='12'>
                            <MDBRow className="my_row">
                                <MDBCol md="6">
                                    <MDBInput name="releaseReason" id="releaseReason" labelClass="labelBg" outline type='text' label='Reason for Conditional Release: '
                                              value={releaseReason} onChange={(e) => setReleaseReason(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <br/><br/>
                            <h5>Destination Details</h5>
                            <MDBRow className="my_row">
                                <MDBCol md="4">
                                    <MDBInput name="contactName" id="contactName" labelClass="labelBg" outline type='text' label='Contact Person: '
                                              value={contactName} onChange={(e) => setContactName(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="contactMobileNo" id="contactMobileNo" labelClass="labelBg" outline type='text' label='Mobile No: '
                                              value={contactMobileNo} onChange={(e) => setContactMobileNo(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="contactAddress" id="contactAddress" labelClass="labelBg" outline type='text' label='Physical Address: '
                                              value={contactAddress} onChange={(e) => setContactMobileNo(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="my_row">
                                <MDBCol md="4">
                                    <MDBInput name="destinationTown" id="destinationTown" labelClass="labelBg" outline type='text' label='Town: '
                                              value={destinationTown} onChange={(e) => setDestinationTown(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="location" id="destinationLocation" labelClass="labelBg" outline type='text' label='Location: '
                                              value={location} onChange={(e) => setLocation(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <select className="browser-default custom-select" onChange={stationSelect}>
                                        <option value="" disabled="">Select Station: </option>
                                        {select_station_list.map((e, key) => {
                                            return <option key={key} value={e.value}>{e.name}</option>;
                                        })}
                                    </select>
                                </MDBCol>
                            </MDBRow>

                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <br/><br/>
                            <h5>Product Details</h5>
                            <MDBRow className="my_row">
                                <MDBCol md="4">
                                    <MDBInput name="oldSealNo" id="oldSealNo" labelClass="labelBg" outline type='text' label='Old Seal No: '
                                              value={oldSealNo} onChange={(e) => setOldSealNo(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="newSealNo" id="newSealNo" labelClass="labelBg" outline type='text' label='New Seal No: '
                                              value={newSealNo} onChange={(e) => setNewSealNo(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="quantity" id="quantity" labelClass="labelBg" outline type='text' label='Quantity: '
                                              value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="my_row">
                                <MDBCol md="4">
                                    <MDBInput name="brandName" id="brandName" labelClass="labelBg" outline type='text' label='Brand Name: '
                                              value={brandName} onChange={(e) => setBrandName(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="inspectionDate" id="inspectionDate" labelClass="labelBg" outline type='text' label='Date of Inspection: '
                                              value={inspectionDate} onChange={(e) => setInspectionDate(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="inspectionLocation" id="inspectionLocation" labelClass="labelBg" outline type='text' label='Location of Inspection: '
                                              value={inspectionLocation} onChange={(e) => setInspectionLocation(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="my_row">
                                <MDBCol md="4">
                                    <MDBInput name="brandsNo" id="brandsNo" labelClass="labelBg" outline type='text' label='No of Brands: '
                                              value={brandsNo} onChange={(e) => setBrandsNo(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="productsNo" id="productsNo" labelClass="labelBg" outline type='text' label='No of Products: '
                                              value={productsNo} onChange={(e) => setProductsNo(e.target.value)}
                                    />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput name="samplesDrawnNo" id="samplesDrawnNo" labelClass="labelBg" outline type='text' label='No of Samples Drawn: '
                                              value={samplesDrawnNo} onChange={(e) => setSamplesDrawnNo(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBInput name="transportMode" id="transportMode" labelClass="labelBg" outline type='text' label='No of Samples Drawn: '
                                              value={transportMode} onChange={(e) => setTransportMode(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <br/><br/>
                    <h5>Sample Details</h5>

                    {inputList.map((x, i) => {
                        return (
                            <MDBRow className="box">
                            <MDBCol md="4">
                                <Form.Control placeholder="Manufaturer Date"  type="date"/>
                            </MDBCol>
                            <MDBCol md="2">
                                <MDBInput
                                    outline
                                    label="Sample ID:"
                                    name="sampleID"
                                    value={x.sampleID}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </MDBCol>
                            <MDBCol md="2">
                                <MDBInput
                                    outline
                                    label="Lab Ref #:"
                                    name="labRefNo"
                                    value={x.labRefNo}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </MDBCol>
                            <MDBCol md="">
                                <div className="btn-box">
                                    {inputList.length !== 1 && <button
                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                                </div>
                            </MDBCol>
                            </MDBRow>
                        );
                    })}
                    <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>


                </MDBCardBody>
            </MDBCard>

            <br/>
            <br/>
            <br/>




        </MDBContainer>
    )
}

export default ConditionalRelease;