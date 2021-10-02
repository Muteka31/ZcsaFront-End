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
  MDBInput,
  MDBTable, 
  MDBTableBody,
  MDBIcon } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../utils/style.css';
import InspectorNavBar from './inspectorNavBar';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {getTowns} from "../redux/actions/townCreators";
import {getCountries}  from "../redux/actions/countryCreators";
import {getProducts} from "../redux/actions/productCreators";
import {getIqmProductCheckLists} from "../redux/actions/iqmProductCheckListCreators";
import {deleteIqmProductCheckList} from "../redux/actions/iqmProductCheckListCreators";
import {createIqmProductCheckList} from "../redux/actions/iqmProductCheckListCreators";
import {createIqmSampleRequestForm} from "../redux/actions/iqmSampleRequestFormCreators";
import { allInspectors} from "../redux/actions/inspectorCreators";
import {getStations} from "../redux/actions/stationCreators";
import swal from 'sweetalert';

import { useHistory} from "react-router-dom";

function BatchInspectionDetailForm(){

    const { batchInspectionId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const batchInspectionsState  = useSelector((state) => state.iqmBatchInspection);
    const productCheckListsState = useSelector((state) => state.iqmProductCheckList);
    const townsState  = useSelector((state) => state.town);
    const countriesState  = useSelector((state) => state.country);
    const productsState  = useSelector((state) => state.product);
    const stationsState  = useSelector((state) => state.station);
    
    const [batchInspection, setBatchInspection] = useState();
    const [product, setProduct] = useState();
    const [station, setStation] = useState();
    const [country, setCountry] = useState();
    const [town, setTown] = useState();
    const [purposeOfSampling, setPurposeOfSampling] = useState();
    const [observation, setObservation] = useState();
    const [manfDate, setManfDate] = useState(new Date());
    const [expiDate, setExpiDate] = useState(new Date());

    const [inspectionChecklist, setInspectionChecklist] = useState({
          "purpose_of_inspection":"",
          "productId":null,
          "brand_name":"",
          "applicable_standard":"REMOVE",
          "packaging_labelling_statisfactory":false,
          "labelling_language_english":false,
          "countryId":null,
          "portOfEntryId":null,
          "comment":"",
          "manufacture_date":"",
          "expired":"",
          "expiry_date":"",
          "batch_No":"",
          "quantity":"",
          "packaging_size":"",
          "samples_collected":false,
          "sample_size":"",
          "old_seal_no":"",
          "new_seal_no":"",
          "non_conformities_total":"",
          "non_conformities_critical":"",
          "non_conformities_major":"",
          "non_conformities_minor":"",
          "initial_recommendations":"",
          "final_recommendations":"",
          "inspectorId":"",
          "lead_inspector":"",
          "applicationId":""
    })
    const productCheckListArray = [];
    const considatedChecklists = [];
    const select_product_list = [];
    const select_country_list = [];
    const select_station_list = [];
    const select_town_list = [];
    
      useEffect(() => {
        dispatch(getTowns());
        dispatch(getProducts());
        dispatch(getStations());
        dispatch(getCountries());
        dispatch(allInspectors());
      },[]);

      useEffect(() => {
        dispatch(getIqmProductCheckLists(batchInspectionId));
      },[productCheckListsState]);
  

      useEffect(() => {
        setBatchInspection(batchInspectionsState.find(batchInspection => batchInspection.id === parseInt(batchInspectionId, 10)))
      }, [batchInspectionId, batchInspectionsState]);  
    
    productCheckListsState.map((productCheckList) => {
        productCheckListArray.push({
            id:productCheckList.id,
            name:productCheckList.productId.name,
            brand_name:productCheckList.brand_name,
            standard:productCheckList.productId.standard.standard,
            batch_No:productCheckList.batch_No,
            purpose_of_inspection:productCheckList.purpose_of_inspection,
        }) 
        considatedChecklists.push(productCheckList.id)
      })



    productsState.map((product) => {
      select_product_list.push({
          name: product.name +" : "+product.standard.standard,
          value:product.id,
        })
    });
    
    countriesState.map((country) => {
        select_country_list.push({
          name: country.name,
          value:country.id,
        })
    });

    stationsState.map((station) => { select_station_list.push({
        name: station.name,
        value:station.id,
      })
    });

  
    townsState.map((town) => { select_town_list.push({
        name: town.name,
        value:town.id
      })
    });

    const stationSelect = (event) => {
      setStation(parseInt(event.target.value));
    }
    const countrySelect = (event) => {
      setCountry(parseInt(event.target.value));
    }
    const townSelect = (event) => {
      setTown(parseInt(event.target.value));
    }

    const productSelect = (event) => {
      setProduct(parseInt(event.target.value));
    }

    const handlePOS = (event) => {
      setPurposeOfSampling(event.target.value);
    }

    const handleObservation = (event) => {
      setObservation(event.target.value);
    }
    
    const handleChange = e => {
      setInspectionChecklist({...inspectionChecklist,
        applicationId:batchInspection.id,
        inspectorId:"2",
        productId:product,
        countryId:country,
        portOfEntryId:station,
        lead_inspector:"4",
        town:town
        })
      const { name, value } = e.target;
      setInspectionChecklist(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    
    const handleOnSubmit =(event) => {
      event.preventDefault();
      setInspectionChecklist({...inspectionChecklist,
        applicationId:batchInspection.id,
        inspectorId:"2",
        productId:product,
        countryId:country,
        portOfEntryId:station,
        lead_inspector:"4",
        town:town
        })
        dispatch(createIqmProductCheckList(inspectionChecklist))
    }

    const generateSampleRequestForm = (event) => {
            event.preventDefault();
            dispatch(createIqmSampleRequestForm({
                "applicationId":batchInspection.id,
                "inspectorId":2,
                "inspectionChecklistId":considatedChecklists,
                "purposeOfSampling":purposeOfSampling,
                "observation":observation,
                "createdBy":"2"
             })).then((response) => {

              const status = response.payload.status;
              const sampleRequestFormId =  response.payload.data.id;
              console.log(sampleRequestFormId);
              if(status == 200) {
                swal(
                  {
                  closeOnClickOutside: false,
                  title:"success",
                  text: "Consolidated Sample Request Form Created",
                  icon: "success",
                  buttons: {
                    list: {
                      text:"Back",
                      value:"list",
                      className:"grey"
                    },
                    print: {
                      text: "Print",
                      value: "print",
                      className: "orange"
                    },
                    open: {
                      text: "Open",
                      value: "open",
                      className: "green"
                    }
                  },
                })
                .then((value) => {
                  switch (value) {
                 
                    case "list":
                      history.push("/inspector-dashboard/batch-inspection-datatable")
                      break;
                    case "print":
                      /*The Logic for Printing the Sample Request Come here*/
                      break;
  
                    case "open":
                      
                      break;
                    default:
                  }
                });

              }else{
              }
             })
             
    }


    return batchInspection ?(
    <>
    <InspectorNavBar></InspectorNavBar>
     <MDBContainer>
     <MDBBreadcrumb color="warning-color">
            <MDBBreadcrumbItem ><b>INSPECTOR Dashboard</b></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><b>Batch Inspection Details </b></MDBBreadcrumbItem>
       </MDBBreadcrumb>
        <MDBCard className="mt-3">
        <MDBCardHeader color='special-color'>
          Batch Inspection Details
        </MDBCardHeader>
          <MDBCardBody cascade className='text-center'>
          <MDBRow className="mt-3">
            <MDBCol>
            <MDBTable bordered>
              <MDBTableBody>
                <tr>
                  <td className="text-left"><b>Item Description:</b></td>
                  
                  <td className="text-left">{batchInspection.id}</td>
                  <td className="text-left"><b>Port of Entry:</b></td>
                  <td>{batchInspection.portOfEntry}</td>
                </tr>
                <tr>
                  <td  className="text-left"><b>Quantity:</b></td>
                  <td className="text-left">{batchInspection.quantity}</td>
                  <td className="text-left"><b>Unit of Measure:</b></td>
                  <td>{batchInspection.unit_of_measure}</td>
                </tr>
                <tr>
                  <td className="text-left"><b>Invoice:</b></td>
                  <td className="text-left">{batchInspection.invoice}</td>
                  <td className="text-left"><b>Total Amount</b></td>
                  <td className="text=left">{batchInspection.total_amount}</td>
                </tr>
                <tr>
                  <td className="text-left"><b>Vehicle Registration:</b></td>
                  <td className="text-left">{batchInspection.vehicle_reg_number}</td>
                  <td className="text-left"><b>Entry Registration</b></td>
                  <td className="text=left">{batchInspection.entry_reg_number}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            </MDBCol>
          </MDBRow>
            <hr />
            <MDBRow>
            <MDBCol md='4'>
              <MDBCard >
                <MDBCardBody>
                  <MDBCardTitle>Declarant Details</MDBCardTitle>
                  <MDBTable>
                      <MDBTableBody>
                        <tr>
                          <td className="text-left">Name:</td>
                          <td className="text-left">{batchInspection.declarant_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Contact</td>
                          <td className="text-left">{batchInspection.declarant_contact}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Address</td>
                          <td className="text-left">{batchInspection.declarant_address}</td>
                        </tr>
                        <tr>
                          <td className="text-left">TPIN</td>
                          <td className="text-left">{batchInspection.declarant_tpin}</td>
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
                          <td className="text-left">{batchInspection.consignee_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Contact</td>
                          <td className="text-left">{batchInspection.consignee_contact}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Address</td>
                          <td className="text-left">{batchInspection.consignee_address}</td>
                        </tr>
                        <tr>
                          <td className="text-left">TPIN</td>
                          <td className="text-left">{batchInspection.consignee_tpin}</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard >
                <MDBCardBody>
                  <MDBCardTitle>Exporter Details</MDBCardTitle>
                  <MDBTable>
                      <MDBTableBody>
                        <tr>
                          <td className="text-left">Name:</td>
                          <td className="text-left">{batchInspection.exporter_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Contact</td>
                          <td className="text-left">{batchInspection.exporter_contact}</td>
                        </tr>
                        <tr>
                          <td className="text-left">Address</td>
                          <td className="text-left">{batchInspection.exporter_address}</td>
                        </tr>
                        <tr>
                        <td className="text-left">Country</td>
                          <td className="text-left">{batchInspection.exporter_country}</td>
                        </tr>         
                      </MDBTableBody>
                    </MDBTable>
                    
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            </MDBRow >
          </MDBCardBody>
        </MDBCard>
        <MDBRow>
        <MDBCol className="col-md-4">
          <MDBCardHeader className="mt-4 rounded-left rounded-right" color='green darken-1'>
            <b>Fill Checklist/Sampling details</b><MDBIcon icon="list-alt" className="ml-3"/></MDBCardHeader>
        </MDBCol>
        </MDBRow>
        
        <MDBCard className="card-body mt-3">
        <form onSubmit={handleOnSubmit}>
                    <h5 className="">Inspection Details</h5>
                    <MDBRow className="my_row">
                        <MDBCol className="col-md-6">

                            <select 
                            id="purpose_of_inspection"
                            name="purpose_of_inspection" 
                            className="browser-default custom-select mt-3"
                            onChange={handleChange}>
                                <option defaultValue>Select Inspection Purpose</option>
                                <option value="NEW CERTIFICATE">NEW CERTIFICATE</option>
                                <option value="RENEWAL">RENEWAL</option>
                                <option value="SURVEILLANCE">SURVEILLANCE</option>
                                <option value="FOLLOW UP">FOLLOW UP</option>
                                <option value="RE-INSPECTION">RE-INSPECTION</option>
                            </select>
                        </MDBCol>

                        <MDBCol className="mt-3 col-md-6">
                        <select className="browser-default custom-select" onChange={townSelect}>
                            <option value="" disabled="">Select Town: </option>
                            {select_town_list.map((e, key) => {
                                return <option key={key} value={e.value}>{e.name}</option>;
                            })}
                        </select>
                        </MDBCol>

                        <MDBCol className="col-md-6">
                          <MDBInput label="Physical Address" outline
                          id="physical_address" 
                          name="physical_address" 
                          className="form-control ml-2"
                          onChange={handleChange}/>
                        </MDBCol>
                    
                       <MDBCol className="mt-3 col-md-6">
                        <select className="browser-default custom-select mt-2" onChange={productSelect}>
                            <option value="" disabled="">Select Product: </option>
                            {select_product_list.map((e, key) => {
                                return <option key={key} value={e.value} id={e.name}>{e.name}</option>;
                            })}
                        </select>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol>
                          <MDBInput label="Product Brand"
                              outline 
                              id="brand_name"
                              name="brand_name"
                              className="form-control"
                            onChange={handleChange}/>
                        </MDBCol>

                      </MDBRow>
                        
                
                    
                    <h5>Findings</h5>
                    <MDBRow className="my_row">    
                            <MDBCol md="6" className="mt-4 col-6">
                              <select className="browser-default custom-select" onChange={countrySelect}>
                                  <option value="" disabled="">Select Country Orgin: </option>
                                  {select_country_list.map((e, key) => {
                                      return <option key={key} value={e.value}>{e.name}</option>;
                                  })}
                              </select>
                              </MDBCol>
                                <MDBCol md="6" className="mt-4 col-6">
                                <select className="browser-default custom-select" onChange={stationSelect}>
                                    <option value="" disabled="">Select Entry Port: </option>
                                    {select_station_list.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.name}</option>;
                                    })}
                                </select>
                                </MDBCol>
                            
                
                                <MDBCol className="col-md-6 mt-4">
                                    <div className="switch">
                                        <label className="ml-2">
                                            Is Packaging Satisfactory:
                                            <input
                                            id="packaging_labelling_statisfactory" 
                                            name="packaging_labelling_statisfactory"
                                            value={true}
                                            onChange={handleChange}
                                            style={{marginLeft: '10px'}} 
                                            type="radio" /> Yes
                                            <input 
                                            id="packaging_labelling_statisfactory" 
                                            name="packaging_labelling_statisfactory"
                                            value={false}
                                            onChange={handleChange} 
                                            style={{marginLeft: '10px'}} 
                                            type="radio" /> No
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol className="col-md-6 mt-4">
                                    <label>
                                            Is Labelling in English:
                                            <input 
                                            name="labelling_language_english" 
                                            style={{marginLeft: '10px'}} 
                                            value={true}
                                            onChange={handleChange}  
                                            type="radio" /> Yes
                                            <input 
                                            name="labelling_language_english" 
                                            style={{marginLeft: '10px'}} 
                                            value={false}
                                            onChange={handleChange}  
                                            type="radio" /> No
                                    </label>
                                </MDBCol>
                            

                            <MDBCol className="col-12">
                            <MDBInput type="textarea"
                                    label="Comment"
                                    outline
                                    id="comment"
                                    name="comment" 
                                    onChange={handleChange} 
                                    className="md-textarea form-control" 
              
                                    rows="2"
                                />
                            </MDBCol>
                    </MDBRow>
                    <br/><br/>
                        <MDBRow className="my_row">
                            <MDBCol className="col-md-3">
                                <div className="md-form">
                                    Manufacture Date:<DatePicker 
                                    id="manufacture_date" 
                                    dateFormat="dd/MM/yyyy" 
                                    selected={manfDate} 
                                    onChange={date => setInspectionChecklist({
                                      ...inspectionChecklist,
                                      manufacture_date:date
                                    })} />
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                    <div className="md-form">
                                        Expiry Date:<DatePicker 
                                        id="exp_date" 
                                        dateFormat="dd/MM/yyyy" 
                                        selected={expiDate} 
                                        onChange={date => setInspectionChecklist({
                                          ...inspectionChecklist,
                                          expiry_date:date
                                        })} />
                                    </div>
                            </MDBCol>
                            <MDBCol className="col-md-3 mt-4">
                                <label>
                                    Has It Expired: <br/>
                                    <input 
                                    style={{marginLeft: '5px'}} 
                                    type="radio" 
                                    name="expired"
                                    id="expired" 
                                    value={true}
                                    onChange={handleChange} 
                                    /> Yes
                                    <input 
                                    style={{marginLeft: '5px'}} 
                                    type="radio" 
                                    id="expired" 
                                    name="expired" 
                                    value={false}
                                    onChange={handleChange} 
                                    /> No
                                </label>
                            </MDBCol>
                            <MDBCol className="col-md-3 mt-4">
                                <label>
                                    Where samples collected: <br/>
                                    <input 
                                    style={{marginLeft: '5px'}} 
                                    type="radio" 
                                    name="samples_collected"
                                    id="samples_collected" 
                                    value={true}
                                    onChange={handleChange} 
                                    /> Yes
                                    <input 
                                    style={{marginLeft: '5px'}} 
                                    type="radio" 
                                    id="samples_collected" 
                                    name="samples_collected" 
                                    value={false}
                                    onChange={handleChange} 
                                    /> No
                                </label>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="sample_size" 
                                    name="sample_size"
                                    placeholder="Sample Size"
                                    onChange={handleChange}
                                    className="form-control" 
                                    />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="my_row">
                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="batch_No" 
                                    name="batch_No"
                                    placeholder="Batch No:"
                                    className="form-control"
                                    onChange={handleChange} />
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="quantity"
                                    name="quantity" 
                                    placeholder="Batch Quantity"
                                    className="form-control" 
                                    onChange={handleChange}/>
                                        
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="packaging_size" 
                                    name="packaging_size"
                                    className="form-control" 
                                    onChange={handleChange}
                                    placeholder="Packaging Size"/>
              
                                </div>
                            </MDBCol>

                        </MDBRow>


                        <MDBRow className="my_row">

                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input
                                     type="text" 
                                     id="vrn" 
                                     name="vrn"
                                     className="form-control" 
                                     placeholder="VRN"
                                     onChange={handleChange}/>  
                                </div>
                            </MDBCol>


                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text"
                                    id="old_seal_no"
                                    name="old_seal_no"
                                    className="form-control" 
                                    onChange={handleChange}
                                    placeholder="Old Seal Number"/>
                                </div>
                            </MDBCol>

                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="new_seal_no"
                                    name="new_seal_no" 
                                    onChange={handleChange}
                                    placeholder="New Seal Number(s):"
                                    className="form-control"/>
                                </div>
                            </MDBCol>

                        </MDBRow>


                        <br/><br/>
                        <h5>Inspection Summary and Conclusions</h5>
                        <p>Current Non-conformities</p>

                        <MDBRow className="my_row">
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input
                                    type="text"
                                    id="non_conformities_total"
                                    name="non_conformities_total"
                                    onChange={handleChange}
                                    placeholder="Total"
                                    className="form-control" />
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="non_conformities_critical" 
                                    name="non_conformities_critical"
                                    onChange={handleChange}
                                    placeholder="Critical:"
                                    className="form-control" />
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="non_conformities_major"
                                    name="non_conformities_major" 
                                    onChange={handleChange}
                                    className="form-control" 
                                    placeholder="Major:"/>   
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input 
                                    type="text" 
                                    id="non_conformities_minor"
                                    name="non_conformities_minor"
                                    placeholder="Minor" 
                                    className="form-control"
                                    onChange={handleChange}
                                     />
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="my_row">
                            <MDBCol className="col-md-3">
                                <select id="initial_recommendations" name="initial_recommendations" className="cust_drop md-outline md-form" onChange={handleChange}>
                                    <option defaultValue>Initial Recommendations</option>
                                    <option value="PROCEED">PROCEED</option>
                                    <option value="ESCORT">ESCORT</option>
                                    <option value="DENY_ENTRY">DENY ENTRY</option>
                                    <option value="SEIZE">SEIZE</option>
                                    <option value="FOR_IN_LAND_INSPECTION">FOR IN LAND INSPECTION</option>

                                </select>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <select id="final_recommendations" name="final_recommendations"className="cust_drop md-outline md-form" onChange={handleChange}>
                                    <option defaultValue >Final Recommendations</option>
                                    <option value="COMPLY">COMPLY</option>
                                    <option value="NOT_COMPLY">NOT COMPLY</option>
                                </select>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="zs" name="zs" placeholder="Applicable Standards" className="form-control"onChange={handleChange} />
                                </div>
                            </MDBCol>
                        </MDBRow>
                      

                        <br/><br/>
                        <MDBRow className="row">
                            <div className="">
                                <button type="submit" className="btn btn-success waves-effect waves-light">Add
                                </button>
                            </div>
                        </MDBRow>
                  </form>
                </MDBCard>
               

              <MDBCard className="mt-5">
              <MDBCardHeader color='cyan darken-4'>Consolidated Sample Request Form</MDBCardHeader>
                <MDBCardBody>  
                  <MDBTable small bordered>
                <MDBTableHead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Brand Name</th>
                    <th>Applicable Standard</th>
                    <th>Batch No:</th>
                    <th>Inspection Purpose</th>
                    <th>Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                {productCheckListArray.map(productCheckList => (
                  <tr>
                      <td>{productCheckList.id}</td>
                      <td>{productCheckList.name}</td>
                      <td>{productCheckList.brand_name}</td>
                      <td>{productCheckList.standard}</td>
                      <td>{productCheckList.batch_No}</td>
                      <td>{productCheckList.purpose_of_inspection}</td>
                      <td><div>
                      <button className="btn btn-sm btn-dark" onClick={()=>{
                        dispatch(deleteIqmProductCheckList(productCheckList));
                      }}
                      >Remove</button>        
                      </div></td>
                  </tr>
                ))}   
              </MDBTableBody>
              </MDBTable>
              <MDBCol className="col-md-12">
                  <div className="md-form md-outline">
                      <input type="text" 
                      id="purposeOfSampling"
                      name="purposeOfSampling"
                      className="form-control"
                      placeholder="Purpose Of Sampling"
                      onChange={handlePOS}/>
                  </div>
              </MDBCol>
              <MDBCol className="col-md-12">
                            <div className="md-form md-outline">
                                <textarea 
                                type="text" 
                                id="observation"
                                name="observation" 
                                onChange={handleObservation} 
                                className="md-textarea form-control" 
                                placeholder="Observation"
                                rows="3"></textarea> 
                            </div>
                        </MDBCol>
              <button className="btn btn-success block" onClick={generateSampleRequestForm}>Generate Sample Request Form</button> 
              </MDBCardBody>
              </MDBCard>
        </MDBContainer>
      </>  
    ):null
}

export default BatchInspectionDetailForm;
