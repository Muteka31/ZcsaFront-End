import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBInput,
    MDBBreadcrumbItem,
    MDBBreadcrumb, MDBTable, MDBTableHead, MDBTableBody, MDBDataTable
} from 'mdbreact';
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';
import axios from 'axios';
import SystemAdminNavBar from "./systemAdminNavBar";

export default function ProductChecklist() {

    const [productChecklist, setProductChecklist] = useState('');
    const [category, setCategory] = useState('');


    const handleOnSubmit = (event) => {
        event.preventDefault();

        axios.post('http://192.168.8.104:8084/zcsa_api_war/v1/station', {productChecklist})
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });

        console.log(productChecklist);
    }

    const productChecklists = useFetch('http://192.168.8.106:8090/zcsa_api_war/v1/getProductChecklist');
    console.log(productChecklists);

    const productChecklist_list = [];
    productChecklists.map((productChecklist) => (
        productChecklist_list.push({
            id:productChecklist.id,
            name:productChecklist.scope,
            action:
                <div>
                    <button className="btn btn-sm btn-info">view</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                </div>

        })
    ));

    const category_list = useFetch(
        'http://192.168.8.106:8090/zcsa_api_war/v1/getProductCategory'
    );

    const select_category_list = [];
    category_list.map((category) => (
        select_category_list.push({
            name:`${category.name}`,
            value:category.id
        })
    ));

    const categorySelect = (event) => {
        setCategory(parseInt(event.target.value));
    }

    return (
        <>
            <SystemAdminNavBar></SystemAdminNavBar>
            <MDBContainer>
                <MDBBreadcrumb>
                    <MDBBreadcrumbItem>Administrator Dashboard</MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>Product Checklist  Management </MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <MDBRow>
                    <MDBCol md='4'>
                        <MDBCard>
                            <MDBCardHeader color='special-color'>Create Station</MDBCardHeader>
                            <MDBCardBody>
                                <form onSubmit={handleOnSubmit}>
                                    <h5>Station</h5>
                                    <MDBRow className="">
                                        <MDBCol md="11">
                                            <MDBInput id="productChecklist" labelClass="labelBg" background outline type='text'
                                                      label='Enter Requirement Scope: '
                                                      value={productChecklist} onChange={(e) => setProductChecklist(e.target.value)}/>
                                        </MDBCol>

                                        <MDBCol md="11">
                                            <select id="category" name="category" className="cust_drop md-form"
                                                    value={category} onChange={(e) => setCategory(e.target.value)}>
                                                <option value="" disabled="" onChange={categorySelect}>Select Province:</option>
                                                {select_category_list.map((e, key) => {
                                                    return <option key={key} value={e.value}>{e.name}</option>;
                                                })}
                                            </select>
                                        </MDBCol>

                                        <MDBCol md="11">
                                            <div style={{marginTop: '1.1rem'}}></div>
                                            <button type='submit' className="btn btn-success">Create</button>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCard className="border border-light">
                            <MDBCardHeader color='special-color'>Station List</MDBCardHeader>
                            <MDBCardBody>
                                <MDBDataTable
                                    small
                                    striped
                                    bordered
                                    hover
                                    data={
                                        {
                                            columns: [
                                                {
                                                    label: 'Clause No.',
                                                    field: 'id',
                                                    sort: 'asc',
                                                    width: 150
                                                },
                                                {
                                                    label: 'Scope',
                                                    field: 'name',
                                                    sort: 'asc',
                                                    width: 300
                                                },
                                                {
                                                    label: 'Category',
                                                    field: 'category',
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
                                            rows: productChecklist_list
                                        }
                                    }
                                />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <br/>

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

