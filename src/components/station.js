import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader,
    MDBBreadcrumb,MDBBreadcrumbItem, MDBBadge, MDBAnimation, MDBCardBody,MDBBtn, MDBInput,MDBIcon, MDBDataTable} from 'mdbreact';
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';
import axios from 'axios';
import SystemAdminNavBar from './systemAdminNavBar';
import {BASE_URL} from '../redux/constants';
import {Modal} from "react-bootstrap";
import { Button } from 'react-bootstrap';



export default function Station() {

    const [enableStation, setEnableStation] = useState(false);
    const [disableStation, setDisableStation] = useState(false);
    const [updateStation, setUpdateStation] = useState(false);
    const [disableShow, setDisableShow] = useState(false);
    const [enableShow, setEnableShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);
    const [stationId, setStationId] = useState();
    const [createShow, setCreateShow] = useState(false);
    const[stationName, setStationName] = useState();


    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const [station, setStation] = useState('');
    const [province, setProvince] = useState('');
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const toggle = (param) =>() =>{
        if(param == '1'){
            setModal1(true)
            console.log("hjhjg")
        }
        if(param == 2){
            setModal2(true)
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        axios.post(BASE_URL+'/v1/station', {
            'name':station,
            'region':province,
            'cretedBy':2})
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                window.location.reload(false);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });

        console.log(station, province);
    }

    const stations = useFetch(BASE_URL+'/v1/getStation');

    const station_list = [];
    stations.map((station) => (
        station_list.push({
            id:station.id,
            name:<div><b>{station.name}</b></div>,
            province:station.provinceId && station.provinceId.name ? station.provinceId.name : 'print something for missing title',
            status:<div>
                <MDBBadge color="success" className="p-1">{ station.status ? 'Active' : null}</MDBBadge>
                <MDBBadge color='danger'>{ !station.status ? 'Disabled' : null}</MDBBadge>
            </div>,
            action:<div>
                <button className="mt-0 btn btn-sm btn-grey" onClick={() =>{
                    setStationId(station.id);
                    setStationName(station.station);
                    setUpdateShow(true);
                }}>Update</button>
                { station.status ?
                    <MDBBtn className="mt-0 btn btn-sm btn-dark" onClick={() =>{
                        setStationId(station.id);
                        setStationName(station.station);
                        setDisableShow(true);

                    }}><b>Disable<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn>
                    :null
                }
                { !station.status ?
                    <button className="mt-0 btn btn-sm btn-success" onClick={() =>{
                        setStationId(station.id);
                        setStationName(station.station);
                        setEnableShow(true);
                    }}><b>Enable<MDBIcon icon="check" className="ml-2"/></b></button>
                    :null
                }{

            }
            </div>

        })
    ));

    const province_list = useFetch(BASE_URL+'/v1/getProvince'
    );

    const select_province_list = [];
    province_list.map((province) => (
        select_province_list.push({
            name:`${province.name}`,
            value:province.id
        })
    ));

    const provinceSelect = (event) => {
        setProvince(parseInt(event.target.value));
    }

    const createStation = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/station',{
            "station":stationName
            //"provinceId"
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

    return (
        <>
            <SystemAdminNavBar></SystemAdminNavBar>

            <MDBContainer>
                <MDBBreadcrumb style={{marginTop:0}} color="warning-color">
                    <MDBBreadcrumbItem ><b>Administrator Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Station Management </b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBRow>

                    <MDBCol md='12'>
                        <MDBCard className="border border-light">
                            <MDBCardHeader color='special-color'>Station List</MDBCardHeader>
                            <div style={{ display: "flex" }}>
                                <button style={{ marginLeft: "auto" }} className="btn btn-sm btn-blue-grey"
                                        onClick={() =>{setCreateShow(true);}}>
                                    <i style={{marginRight:"0.2rem"}} className="fas fa-plus-circle fa-lg"></i>
                                    Add Station
                                </button>
                            </div>

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
                                                    width: 150
                                                },
                                                {
                                                    label: 'Station Name',
                                                    field: 'name',
                                                    sort: 'asc',
                                                    width: 300
                                                },
                                                {
                                                    label: 'Province',
                                                    field: 'province',
                                                    sort: 'asc',
                                                    width: 100
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
                                            rows: station_list
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
                            <MDBCardHeader color='special-color'>Create Station </MDBCardHeader>
                            <MDBCardBody>
                                <form onSubmit={createStation}>
                                    <MDBRow className="">
                                        <MDBCol style={{marginTop: '-1.1rem'}} md="11">
                                            <MDBInput style={{paddingTop: '1rem'}} id="stationName" labelClass="labelBg"
                                                      outline type='text' label='Enter Station Name: '
                                                      value={stationName} onChange={(e) => setStationName(e.target.value)}/>
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
                        <MDBBtn className="mt-0 btn btn-block btn-sm btn-dark" onClick={() =>{ disableStation()}}><b>Disable Station {stationName}<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn>
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
                        <Button variant="success" className="mt-0 btn btn-block btn-sm btn-success" onClick={() =>{ enableStation()}} ><b>Enable Station {stationName}<MDBIcon icon="check" className="ml-2"/></b></Button>
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
                            <MDBCardHeader color='special-color'>Station: {stationName} </MDBCardHeader>
                            <MDBCardBody>
                                <form onSubmit={updateStation}>
                                    <MDBRow className="">
                                        <MDBCol md="11">
                                            <MDBInput id="stationName" labelClass="labelBg"  outline type='text' label='Enter Station Name: '
                                                      value={stationName} onChange={(e) => setStationName(e.target.value)}/>
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
