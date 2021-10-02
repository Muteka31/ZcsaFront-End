import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow, MDBCol, MDBDataTable,MDBBreadcrumb, MDBBreadcrumbItem} from 'mdbreact';
import {useDispatch,useSelector} from "react-redux";
import {getAscuydaApplications} from "../redux/actions/ascuydaApplicationCreators";
import InspectorNavBar from "./inspectorNavBar";
import { Link } from "react-router-dom";


function BatchInspectionApplicationJobListDatatable(){

    const dispatch = useDispatch()
    const ascuydaApplicationsState  = useSelector((state) => state.ascuydaApplication);
   
    const ascuydaApplications = [];
    
    useEffect(() => {
      dispatch(getAscuydaApplications());
    }, []);
    
      ascuydaApplicationsState.map((application) => (  
        ascuydaApplications.push({
          id:application.id,
          exporter_name:application.exporter_name,
          consignee_name:application.consignee_name,
          declarant_name:application.declarant_name,
          item_description:application.item_description,
          action:<button className="btn btn-sm btn-success">
              <Link className="text-white" 
              to={`/senior-inspector-dashboard/asycuda-application-details/${application.id}`}>Open</Link>
          </button>
        })
      ));

    return(
      <>
        <InspectorNavBar></InspectorNavBar>
        <MDBContainer>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem >SENIOR INSPECTOR Dashboard</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>ASYCUDA Applications</MDBBreadcrumbItem>
          </MDBBreadcrumb>
            <MDBRow className="mt-1">
            <MDBCol>
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
                        label: 'Exporter Name',
                        field: 'exporter_name',
                        sort: 'asc',
                        width: 270
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
                    rows: ascuydaApplications
                }
                }
            />
            </MDBCol>
            </MDBRow>
        </MDBContainer>
</>
    )
}

function useFetch(url) {
    const [data, setData] = useState([]);
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
    return data;
  }

export default BatchInspectionApplicationJobListDatatable;