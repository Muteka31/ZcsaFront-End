import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { MDBRow, 
         MDBCol,
         MDBCard,
         MDBBtn,
         MDBTable,
         MDBTableBody,
         MDBBreadcrumb,
         MDBBreadcrumbItem,
         MDBContainer,MDBInput,
         MDBCardHeader,MDBCardBody} from 'mdbreact';
import {createInspectionReport} from "../redux/actions/inspectionReportCreators";
import InspectorNavBar from "./inspectorNavBar";
import UserService from "../redux/services/UserService";
import {allIqmSampleSubmission}  from "../redux/actions/iqmSampleSubmissionCreators";
import swal from 'sweetalert';
import { useHistory} from "react-router-dom";



function InspectionReport(){

const history = useHistory();
const userId = UserService.getUserId();
const [inputList, setInputList] = useState([{ recommendations: ""}]);
const recommsTemp = [] ;
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
    setInputList([...inputList, { recommendations: ""}]);
};

const { sampleSubmissionId } = useParams();

const dispatch = useDispatch()
const sampleSubmissionsState  = useSelector((state) => state.iqmSampleSubmission);
const [sampleSubmission, setSampleSubmission] = useState();



useEffect(() => {
  dispatch(allIqmSampleSubmission())
}, []);

useEffect(() => {
    setSampleSubmission(sampleSubmissionsState.find(sampleSubmission => sampleSubmission.id === parseInt(sampleSubmissionId, 10)))
  }, [sampleSubmissionId, sampleSubmissionsState]);  

  
  const [inspectionReport, setInspectionReport] = useState({
    "reportNo":123,
    "sampleSubmissionId":sampleSubmissionId, 
    "totalNonConformities":3,
    "critical":"",
    "major":"",
    "minor":"",
    "recommendations":null,
    "createdBy":""
  })

  const handleChange = e => {
    inputList.forEach(element =>{
        recommsTemp.push(element.recommendations);
    })
    setInspectionReport({...inspectionReport,
        recommendations:recommsTemp,
        sampleSubmissionId: sampleSubmissionId,
        createdBy:userId
      })
    const { name, value } = e.target;
    setInspectionReport(prevState => ({
        ...prevState,
        [name]: value
      }));
  };


  const handleSubmit = e => {
    e.preventDefault();

    inputList.forEach(element =>{
        recommsTemp.push(element.recommendations);
    })
    setInspectionReport({...inspectionReport,
        recommendations:recommsTemp,
        createdBy:userId
      })
      
      console.log(recommsTemp);
      console.log(inspectionReport);

      dispatch(createInspectionReport(inspectionReport)).then((response) => {
                    console.log(response)

                    if(response.type == "CREATE_INSPECTION_REPORT_SUCCESS"){
                    const status = response.payload.status;
                    if(status == 200) {
                        swal(
                        {
                        closeOnClickOutside: false,
                        title:"success",
                        text: "Report Has Been Submitted ",
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
                            history.push("/inspector-dashboard/sample-submission")
                            break;       
                            default:
                        }
                        });

                    }else{
                                    
                    }
                    
                    }else{
                    console.log(response.type);
                    swal(
                        {
                        title:"Error",
                        text: "Report Not Generated! ",
                        icon: "warning",
                        buttons: {
                        list: {
                            text:"Back",
                            value:"list",
                            className:"grey"
                        },
                        reject: {
                            text:"Reject Application",
                            value:"reject",
                            className:"red"
                        }
                        
                        },
                    })
                    .then((value) => {
                        switch (value) {
                        case "list":
                            history.push("/senior-inspector-dashboard/ascuyda-applications")
                            break;
                        case "reject":
                            /** Logic for rejecting Application */
                            break;         
                        default:
                            
                        }
                    });  
                    }
                    
            })
  }


return sampleSubmission ?(
    <>
    <InspectorNavBar></InspectorNavBar>
    <MDBContainer>
        <MDBCol md="15">
        <MDBBreadcrumb color="warning-color">
            <MDBBreadcrumbItem ><b>INSPECTOR Dashboard</b></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><b>Batch Inspection Report </b></MDBBreadcrumbItem>
       </MDBBreadcrumb>
        <MDBCard className="mt-3">
        <MDBCardHeader color='special-color'>
          Batch Inspection Report
        </MDBCardHeader>

        <MDBCardBody> 
        <MDBCol>            
            <MDBTable bordered>
            <MDBTableBody>
            <tr>
            <td className="text-left"><b>Product Name</b></td>
            <td className="text-left">{sampleSubmission.inspectionChecklistId.productId.name}</td>
            <td className="text-left"><b>Brand Name </b></td>
            <td className="text-left">{sampleSubmission.inspectionChecklistId.brand_name}</td>
            <td className="text-left"><b>Applicable Standard</b></td>
            <td className="text-left">{sampleSubmission.inspectionChecklistId.applicable_standard}</td>
            </tr>
            <tr>
            <td className="text-left"><b>Origin Country </b></td>
            <td className="text-left">{sampleSubmission.inspectionChecklistId.countryId.name}</td>
            <td className="text-left"><b>Entry Port</b></td>
            <td className="text-left">{sampleSubmission.inspectionChecklistId.portOfEntryId.name}</td>
            <td className="text-left"><b>Batch No</b></td>
            <td className="text-left">{sampleSubmission.inspectionChecklistId.batch_No}</td>
            </tr>
            <tr>
            <td className="text-left"><b>Date Sampled</b></td>
            <td className="text-left">{sampleSubmission.dateSampled}</td>
            <td className="text-left"><b>Test Description</b></td>
            <td className="text-left">{sampleSubmission.testDescription}</td>
            <td className="text-left"><b>Test Priority</b></td>
            <td className="text-left">{sampleSubmission.testPriority}</td>
            </tr>
            </MDBTableBody>
            </MDBTable>

                            

                    </MDBCol>
            <h6><b>INSPECTION FINDINGS:</b></h6>
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-6">
                <MDBInput
                    label="Total non-conformities" 
                    outline
                    type="text" 
                    id="totalNonConformities"
                    onChange={handleChange}
                    name="totalNonConformities"
                    className="form-control"/>
                </div>
                <div className="col-6">
                <MDBInput 
                    label="Critical"
                    outline
                    type="text" 
                    id="critical"
                    name="critical"
                    onChange={handleChange}
                    className="form-control"/>
                </div>
                <div className="col">
                
                <MDBInput 
                    label="Major"
                    outline
                    type="text" 
                    id="major"
                    name="major"
                    onChange={handleChange}
                    className="form-control"/>
                </div>
                <div className="col">
            
                <MDBInput
                    label="Minor" 
                    outline
                    type="text" 
                    id="minor"
                    name="minor"
                    onChange={handleChange}
                    className="form-control"/>
                </div>
                </div>
                <br/>
                
                <h6><b>RECOMMENDATIONS:</b></h6>
                
                {/* <div className="col p-0">
                            <select 
                                id="recommendationx"
                                name="recommendationx" 
                                className="cust_drop md-outline md-form"
                                onChange={handleChange}
                                >
                                <option defaultValue>Select Compliance</option>
                                <option value="COMPLY">Comply</option>
                                <option value="DONT COMPLY">Dont Comply</option>
                            </select>
                        </div> */}
                <div className="row">
                
                </div>
                {inputList.map((x, i) => {
                        return (
                            <MDBRow className="box">
                            
                            <MDBCol className="col-10">
                                <MDBInput
                                    outline
                                    label="Recommendation:"
                                    name="recommendations"
                                    value={x.recommendations}
                                    onChange={e => handleInputChange(e, i)}
                                />
                            </MDBCol>
                            
                            <MDBCol className="col-2 pt-2">
                                <div className="btn-box mt-3">
                                    {inputList.length !== 1 && <button className="btn btn-block btn-sm btn-default mt-3"
                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    {inputList.length - 1 === i && <button className="btn btn-block btn-sm btn-warning"onClick={handleAddClick}>Add</button>}
                                </div>
                            </MDBCol>
                            </MDBRow>
                        );
                    })}
                
                <button type="submit" className="mt-3 btn btn-sm btn-success">Submit Report</button>
                </form> 
                <br/>
                </MDBCardBody>  
          </MDBCard>
      </MDBCol>
      </MDBContainer>
  </>               
):null
}


export default InspectionReport;