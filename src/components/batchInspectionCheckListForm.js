import React, {useState } from "react";
import {MDBContainer, MDBRow, MDBCol,  MDBCard } from 'mdbreact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import '../../utilities/style.css';


function InspectionChecklist() {

    const [manfDate, setManfDate] = useState(new Date());
    const [expiDate, setExpiDate] = useState(new Date());

    return (
        <MDBContainer className="container-fluid">
                <MDBCard className="card-body">
                    <h1 className="text-center h1">Outline Inputs</h1>
                    <h5>Importer Details</h5>
                    <MDBRow className="my_row">
                        <MDBCol className="col-md-6">
                            <select id="legal_st" className="cust_drop md-outline md-form">
                                <option value="" disabled="" selected="">Legal Status</option>
                            </select>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="my_row">

                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <input type="text" id="legal_name" className="form-control" />
                                <label for="legal_name" className="">Legal Name of Company</label>
                            </div>
                        </MDBCol>

                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <input type="text" id="impo_tpin" className="form-control" />
                                <label for="impo_tpin" className="">TPIN No</label>
                            </div>
                        </MDBCol>

                    </MDBRow>


                    <MDBRow className="my_row">
                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <input type="text" id="cont_per" className="form-control"/>
                                <label htmlFor="cont_per" className="">Contact Person</label>
                            </div>
                        </MDBCol>

                        <MDBCol className="col-md-6 mb-1">
                            <select id="cont_title" className="cust_drop md-form md-outline">
                                <option value="" disabled="" selected="">Select Title</option>
                            </select>
                        </MDBCol>

                    </MDBRow>

                    <MDBRow className="my_row">

                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <i className="fas fa-envelope prefix"></i>
                                <input type="email" id="cont_email" className="form-control validate" />
                                    <label htmlFor="cont_email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </MDBCol>

                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <i className="fas fa-lock prefix"></i>
                                <input type="password" id="cont_num" className="form-control validate" />
                                <label htmlFor="cont_num" data-error="wrong" data-success="right">Contact Number</label>
                            </div>
                        </MDBCol>

                    </MDBRow>

                    <br/>
                    <h5 className="">Exporter Details</h5>

                    <MDBRow className="my_row">

                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <input type="text" id="expo_name" className="form-control" />
                                    <label htmlFor="expo_name" className="">Name</label>
                            </div>
                        </MDBCol>


                        <MDBCol className="col-md-6 mb-1">
                            <div className="md-form md-outline">
                                <input type="text" id="phys_add" className="form-control" />
                                    <label htmlFor="phys_add" className="">Physical Address</label>
                            </div>
                        </MDBCol>

                    </MDBRow>


                    <MDBRow className="my_row">

                        <MDBCol className="col-md-6 mb-1">
                            <select id="expo_country" className="cust_drop md-outline md-form">
                                <option value="" disabled="" selected="">Select Country</option>
                                <option value="0">Other</option>
                            </select>
                        </MDBCol>

                        <MDBCol className="col-md-6 mb-1">
                            <select id="expo_city" className="cust_drop md-outline md-form">
                                <option value="" disabled="" selected="">Select City / Town</option>
                                <option value="0">Other</option>
                            </select>
                        </MDBCol>

                    </MDBRow>

                    <br/><br/>
                    <h5 className="">Inspection Details</h5>

                    <MDBRow className="my_row">

                        <MDBCol className="col-md-4">

                            <select id="insp_purp" class="cust_drop md-outline md-form">
                                <option value="" disabled="" selected="">Select Inspection Purpose</option>
                                <option value="0">Other</option>
                            </select>

                        </MDBCol>

                        <MDBCol className="col-md-4">

                            <select id="inspec_city" class="cust_drop md-outline md-form">
                                <option value="" disabled="" selected="">Select City / Town</option>
                                <option value="0">Other</option>
                            </select>

                        </MDBCol>

                        <MDBCol className="col-md-4">

                            <div class="md-form md-outline">
                                <input type="text" id="inpec_add" class="form-control"/>
                                    <label for="inpec_add" class="">Physical Address</label>
                            </div>

                        </MDBCol>
                    </MDBRow>


                    <MDBRow className="my_row">

                        <MDBCol class="col-md-4">
                            <div className="md-form md-outline">
                                <input type="text" id="prod_name" className="form-control"/>
                                    <label htmlFor="prod_name" className="">Product Name</label>
                            </div>
                        </MDBCol>

                        <MDBCol class="col-md-4">
                            <div className="md-form md-outline">
                                <input type="text" id="prod_brand" className="form-control"/>
                                    <label htmlFor="prod_brand" className="">Product Brand</label>
                            </div>
                        </MDBCol>

                        <MDBCol class="col-md-4">
                            <div className="md-form md-outline">
                                <input type="text" id="prod_stand" className="form-control"/>
                                    <label htmlFor="prod_stand" className="">Applicable Standard</label>
                            </div>
                        </MDBCol>
                    </MDBRow>

                    <br/><br/>
                    <h5>Findings</h5>

                    <MDBRow className="my_row">

                        <MDBCol className="col-md-8">
                            <MDBRow className="">
                                <MDBCol className="col-md-6">
                                    <select id="fnd_country" className="cust_drop md-outline md-form">
                                        <option value="" disabled="" selected="">Select Country of Origin</option>
                                        <option value="0">Other</option>
                                    </select>
                                </MDBCol>
                                <MDBCol className="col-md-6">
                                    <select id="fnd_port" className="cust_drop md-outline md-form">
                                        <option value="" disabled="" selected="">Select Port of Entry</option>
                                        <option value="0">Other</option>
                                    </select>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="">
                                <MDBCol className="col-md-6">
                                    <div className="switch">
                                        <label>
                                            Is Packaging Satisfactory:
                                            <input name="pack_sta" value="1" style={{marginLeft: '10px'}} type="radio" /> Yes
                                            <input name="pack_sta" value="0" style={{marginLeft: '10px'}} type="radio" /> No
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol className="col-md-6">
                                    <label>
                                            Is Labelling in English:
                                            <input name="eng_lbl" value="1" style={{marginLeft: '10px'}} type="radio" /> Yes
                                            <input name="eng_lbl" value="0" style={{marginLeft: '10px'}} type="radio" /> No
                                    </label>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>


                        <MDBCol className="col-md-4">
                            <div className="md-form md-outline">
                                <textarea type="text" id="fnd_comments" className="md-textarea form-control" rows="3"></textarea>
                                <label htmlFor="fnd_comments">Comments</label>
                            </div>
                        </MDBCol>
                    </MDBRow>


                    <br/><br/>
                        <MDBRow className="my_row">

                            <MDBCol className="col-md-3">
                                <div className="md-form">
                                    Manufacture Date:<DatePicker id="manf_date" dateFormat="dd/MM/yyyy" selected={manfDate} onChange={date => setManfDate(date)} />
                                </div>
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                    <div className="md-form">
                                        Expiry Date:<DatePicker id="exp_date" dateFormat="dd/MM/yyyy" selected={expiDate} onChange={date => setExpiDate(date)} />
                                    </div>
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <label>
                                    Where samples collected: <br/>
                                    <input style={{marginLeft: '5px'}} type="radio" value="1" name="samps_coll" /> Yes
                                    <input style={{marginLeft: '5px'}} type="radio" value="0" name="samps_coll" /> No
                                </label>
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="batch_size" className="form-control" />
                                        <label htmlFor="batch_size" className="">Batch Size</label>
                                </div>
                            </MDBCol>

                        </MDBRow>

                        <MDBRow className="my_row">

                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input type="text" id="batch_no" className="form-control" />
                                        <label htmlFor="batch_no" className="">Batch No:</label>
                                </div>
                            </MDBCol>


                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input type="text" id="batch_quant" className="form-control" />
                                        <label htmlFor="batch_quant" className="">Quantity</label>
                                </div>
                            </MDBCol>

                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input type="text" id="pack_size" className="form-control" />
                                        <label htmlFor="pack_size" className="">Packaging Size</label>
                                </div>
                            </MDBCol>

                        </MDBRow>


                        <MDBRow className="my_row">

                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input type="text" id="vessel_vrn" className="form-control" />
                                        <label htmlFor="vessel_vrn" className="">Vessel VRN No:</label>
                                </div>
                            </MDBCol>


                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input type="text" id="old_seal" className="form-control" />
                                        <label htmlFor="old_seal" className="">Old Seal Numbers:</label>
                                </div>
                            </MDBCol>

                            <MDBCol className="col-md-4">
                                <div className="md-form md-outline">
                                    <input type="text" id="new_seal" className="form-control"/>
                                        <label htmlFor="new_seal" className="">New Seal Number(s):</label>
                                </div>
                            </MDBCol>

                        </MDBRow>


                        <br/><br/>
                        <h5>Inspection Summary and Conclusions</h5>
                        <p>Current Non-conformities</p>

                        <MDBRow className="my_row">
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="nonconf_total" className="form-control" />
                                        <label htmlFor="nonconf_total" className="">Total:</label>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="nonconf_crit" className="form-control" />
                                        <label htmlFor="nonconf_crit" className="">Critical:</label>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="nonconf_maj" className="form-control" />
                                        <label htmlFor="nonconf_maj" className="">Major:</label>
                                </div>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="nonconf_min" className="form-control" />
                                        <label htmlFor="nonconf_min" className="">Minor:</label>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="my_row">
                            <MDBCol className="col-md-3">
                                <select id="init_rec" className="cust_drop md-outline md-form">
                                    <option value="" disabled="" selected="">Initial Recommendations</option>
                                    <option value="0">Other</option>
                                </select>
                            </MDBCol>
                            <MDBCol className="col-md-3">
                                <select id="final_rec" className="cust_drop md-outline md-form">
                                    <option value="" disabled="" selected="">Final Recommendations</option>
                                    <option value="0">Other</option>
                                </select>
                            </MDBCol>

                            <MDBCol className="col-md-3">
                                <div className="md-form md-outline">
                                    <input type="text" id="zs_req" placeholder="Applicable Standards" className="form-control" />
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <br/><br/>
                            <MDBRow className="row" style={{float: 'right', marginRight: '10px'}}>
                                <div className="">
                                    <button type="button" className="btn btn-blue-grey waves-effect waves-light">Save
                                        Draft
                                    </button>
                                    <button type="button" className="btn btn-success waves-effect waves-light">Submit
                                    </button>
                                </div>
                            </MDBRow>

                </MDBCard>
        </MDBContainer>
    )
}

export default InspectionChecklist;
