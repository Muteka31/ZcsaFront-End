import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, 
  MDBBreadcrumb,MDBBreadcrumbItem, MDBModal, MDBModalHeader,MDBModalFooter, MDBModalBody, MDBAlert, MDBBadge, MDBAnimation, MDBCardBody,MDBBtn, MDBInput,MDBIcon, MDBDataTable} from 'mdbreact';
import React, { useState ,useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import SystemAdminNavBar from './systemAdminNavBar';
import {BASE_URL} from '../redux/constants';
import {Button, Modal} from "react-bootstrap";

function Product(){

    const [createShow, setCreateShow] = useState(false);

    const [product, setProduct] = useState('');
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');


    const [disableShow, setDisableShow] = useState(false);
    const [enableShow, setEnableShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);



    const [applicable_standard, setApplicableStandard] = useState('');
    const [category, setCategory] = useState('');
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);




    const products = useFetch(BASE_URL+'/v1/getProducts');

    const disableProduct = () => {
        axios.post(BASE_URL+'/v1/disable/product',{
            "id":productId
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

    const enableProduct = () => {
        axios.post(BASE_URL+'/v1/enable/product',{
            "id":productId
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

    const updateProduct = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/standard',{
            "id":productId,
            "name":productName
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


    const toggle = (param) =>() =>{
      if(param == '1'){
          setModal1(true)
          console.log("hjhjg")
      }
      if(param == 2){
          setModal2(true)
      }
     }
  

    console.log(products);
     const product_list = [];
     products.map((product) => (  
        product_list.push({
         id:product.id,
         name:<div><b>{product.name}</b></div>,
         status:<div>
                    <MDBBadge color="success" className="p-1">{ product.status ? 'Active' : null}</MDBBadge>
                    <MDBBadge color='danger'>{ !product.status ? 'Disabled' : null}</MDBBadge>
            </div>,
         action:<div>
                 <button className="mt-0 btn btn-sm btn-grey" onClick={() =>{
                     setProductId(product.id);
                     setProductName(product.name);
                     setUpdateShow(true);
                 }}>Update</button>
                { product.status ?
                  <MDBBtn className="mt-0 btn btn-sm btn-dark" onClick={toggle(1)}><b>Disable<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn> 
                  :null 
                }
                { !product.status ?
                  <button className="mt-0 btn btn-sm btn-success"><b>Enable<MDBIcon icon="check" className="ml-2"/></b></button> 
                  :null 
                }{
                    <MDBModal isOpen={modal1} toggle={toggle(1)} size="sm">
                        <MDBModalHeader toggle={toggle(1)}>MDBModal title</MDBModalHeader>
                        <MDBModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color="secondary" size="sm" toggle={toggle(1)}>Close</MDBBtn>
                        <MDBBtn color="primary" size="sm">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                }
         </div>
       })
     ));
    const standard_list = useFetch(BASE_URL+'/v1/getStandard');
    const category_list = useFetch(BASE_URL+'/v1/getProductCategory');

      const select_standard_list = [];
      standard_list.map((standard) => (  
        select_standard_list.push({
          name:`${standard.standard}`,
          value:standard.id
        })
      ));

      const select_category_list = [];
      category_list.map((category) => (  
        select_category_list.push({
          name:`${category.category}`,
          value:category.id
        })
      ));
      const standardSelect = (event) => {
        setApplicableStandard(parseInt(event.target.value));
      }
      const categorySelect = (event) => {
        setCategory(parseInt(event.target.value));
      }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'/v1/product', {
            "name":product,
            "productCategory":category,
            "standard":applicable_standard,
            "createdBy":"2"
            })
            .then(response => {
              console.log(response.data);
              window.location.reload(false);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });
        console.log(product, applicable_standard, category);
    }

    const createProduct = (event) => {
        event.preventDefault();

        console.log("Product: " + category);

        axios.post(BASE_URL+'/v1/product',{
            "name":productName,
            "category":category,
            "standard":applicable_standard
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

    return(
    <>
       <SystemAdminNavBar></SystemAdminNavBar>
       <MDBContainer>
       <MDBBreadcrumb color="warning-color">
        <MDBBreadcrumbItem ><b>Administrator Dashboard</b></MDBBreadcrumbItem>
        <MDBBreadcrumbItem active><b>Product Management</b></MDBBreadcrumbItem>
      </MDBBreadcrumb>
        <MDBRow>
            <MDBCol className="col-12">
            <MDBCard className="border-right border-light">
                <MDBCardHeader color='special-color'>Product Listing</MDBCardHeader>

                <div style={{ display: "flex" }}>
                    <button style={{ marginLeft: "auto" }} className="btn btn-sm btn-blue-grey"
                            onClick={() =>{setCreateShow(true);}}>
                        <i style={{marginRight:"0.2rem"}} className="fas fa-plus-circle fa-lg"></i>
                        Add Product
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
                        label: 'Product Name',
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
                    rows: product_list
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
                       <MDBCardHeader color='special-color'>Create Product </MDBCardHeader>
                       <MDBCardBody>
                           <form onSubmit={createProduct}>
                               <MDBRow className="">
                                   <MDBCol style={{marginTop: '-1.1rem'}} md="11">
                                       <MDBInput style={{paddingTop: '1rem'}} id="productName" labelClass="labelBg"
                                                 outline type='text' label='Enter Product Name: '
                                                 value={productName} onChange={(e) => setProductName(e.target.value)}/>
                                   </MDBCol>
                                   <MDBCol md="12">
                                       <select className="browser-default custom-select" onChange={standardSelect}>
                                           <option value="" disabled="">Select Standard: </option>
                                           {select_standard_list.map((e, key) => {
                                               return <option key={key} value={e.value}>{e.name}</option>;
                                           })}
                                       </select>
                                   </MDBCol>
                                   <MDBCol md="12" className="mt-3 mb-3">
                                       <select className="browser-default custom-select" onChange={categorySelect}>
                                           <option value="" disabled="">Select Category: </option>
                                           {select_category_list.map((e, key) => {
                                               return <option key={key} value={e.value}>{e.name}</option>;
                                           })}
                                       </select>
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
               size="sm" show={disableShow} centered
               onHide={() => setDisableShow(false)}
               aria-labelledby="example-modal-sizes-title-sm"
           >
               <Modal.Header closeButton>
                   <MDBBtn className="mt-0 btn btn-block btn-sm btn-dark" onClick={() =>{ disableProduct()}}>
                       <b>Disable Product {productName}<MDBIcon icon="ban" className="ml-2"/></b></MDBBtn>
               </Modal.Header>
           </Modal>
           <Modal
               size="sm" show={enableShow} centered
               onHide={() => setEnableShow(false)}
               aria-labelledby="example-modal-sizes-title-sm"
           >
               <Modal.Header closeButton>
                   <Button variant="success" className="mt-0 btn btn-block btn-sm btn-success" onClick={() =>{ enableProduct()}}>
                       <b>Enable Product {productName}<MDBIcon icon="check" className="ml-2"/></b></Button>
               </Modal.Header>
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
export default Product;