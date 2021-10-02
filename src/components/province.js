import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader,
    MDBBreadcrumb,MDBBreadcrumbItem, MDBBadge, MDBCardBody,MDBBtn, MDBInput,MDBIcon, MDBDataTable} from 'mdbreact';
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import SystemAdminNavBar from "./systemAdminNavBar";
import {BASE_URL} from '../redux/constants';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export default function Province(){

    const[provinceId, setProvinceId] = useState(false);
    const [disableShow, setDisableShow] = useState(false);
    const [enableShow, setEnableShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);

    const[provinceName, setProvinceName] = useState();

    const [province, setProvince] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [temp, setTemp] =useState();
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

    const enableProvince = () => {
        axios.post(BASE_URL+'/v1/enable/province',{
            "id":provinceId
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

    const disableProvince = () => {
        axios.post(BASE_URL+'/v1/disable/province',{
            "id":provinceId
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

    const updateProvince = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/province',{
            "id":provinceId,
            "name":provinceName
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


    const provinces = useFetch(BASE_URL+'/v1/getProvince');
    console.log(provinces);
    const province_list = [];

    provinces.map((province) => (
        province_list.push({
            id:province.id,
            name:<div><b>{province.name}</b></div>,
            status:<div>
                <MDBBadge color="success" className="p-1">{ province.status ? 'Active' : null}</MDBBadge>
                <MDBBadge color='danger'>{ !province.status ? 'Disabled' : null}</MDBBadge>
            </div>,
            action:
            <div>
                <button className="mt-0 btn btn-sm btn-grey" onClick={() =>{
                    setProvinceId(province.id);
                    setProvinceName(province.province);
                    setUpdateShow(true);
                }}>Update</button>
                { province.status ?
                    <MDBBtn className="mt-0 btn btn-sm btn-dark" onClick={() =>{
                        setProvinceId(province.id);
                        setProvinceName(province.province);
                        setDisableShow(true);

                    }}><b>Disable<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn>
                    :null
                }

                { !province.status ?
                    <button className="mt-0 btn btn-sm btn-success" onClick={() =>{
                        setProvinceId(province.id);
                        setProvinceName(province.province);
                        setEnableShow(true);
                    }}><b>Enable<MDBIcon icon="check" className="ml-2"/></b></button>
                    :null
                }
            </div>

        })
    ));



    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(province)

        axios.post(BASE_URL+'/v1/province',{
            "name":province,
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

    const createProvince = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/province',{
            //"id":provinceId,
            "name":provinceName
        })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                setCreateShow(false);
                window.location.reload(false);
            }).catch(error => {
            //console.log("Status:",error);

        });
    }


    return(
        <>
            <SystemAdminNavBar></SystemAdminNavBar>
            <MDBContainer>
                <MDBBreadcrumb color="warning-color">
                    <MDBBreadcrumbItem ><b>Administrator Dashboard</b></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><b>Provinces Management </b></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBRow>
                    <MDBCol md='12'>
                        <MDBCard className="border border-light">
                            <MDBCardHeader color='special-color'>Province List</MDBCardHeader>

                            <div style={{ display: "flex" }}>
                                <button style={{ marginLeft: "auto" }} className="btn btn-sm btn-blue-grey"
                                        onClick={() =>{setCreateShow(true);}}>
                                    <i style={{marginRight:"0.2rem"}} className="fas fa-plus-circle fa-lg"></i>
                                    Add Province
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
                                                    label: 'Province',
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
                                            rows: province_list
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
                            <MDBCardHeader color='special-color'>Create Province </MDBCardHeader>
                            <MDBCardBody>
                                <form onSubmit={createProvince}>
                                    <MDBRow className="">
                                        <MDBCol style={{marginTop: '-1.1rem'}} md="11">
                                            <MDBInput style={{paddingTop: '1rem'}} id="provinceName" labelClass="labelBg"
                                                      outline type='text' label='Enter Province Name: '
                                                      value={provinceName} onChange={(e) => setProvinceName(e.target.value)}/>
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
                        <MDBBtn className="mt-0 btn btn-block btn-sm btn-dark" onClick={() =>{ disableProvince()}}><b>Disable Province{provinceName}<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn>
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
                        <Button variant="success" className="mt-0 btn btn-block btn-sm btn-success" onClick={() =>{ enableProvince()}} ><b>Enable Province {provinceName}<MDBIcon icon="check" className="ml-2"/></b></Button>
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
                            <MDBCardHeader color='special-color'>Province: {provinceName} </MDBCardHeader>
                            <MDBCardBody>
                                <form onSubmit={updateProvince}>
                                    <MDBRow className="">
                                        <MDBCol md="11">
                                            <MDBInput id="provinceName" labelClass="labelBg"  outline type='text' label='Enter Province Name: '
                                                      value={provinceName} onChange={(e) => setProvinceName(e.target.value)}/>
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