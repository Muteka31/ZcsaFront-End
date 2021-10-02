import { combineReducers } from "redux";

import ascuydaApplication from "./ascuydaApplicationReducer";
import iqmBatchInspection from "./iqmBatchInspectionReducer";
import iqmProductCheckList from "./iqmProductCheckListReducer";
import iqmSampleRequestForm from "./iqmSampleRequestFormReducer";
import iqmInspectionReport from "./inspectionReportReducer";
import country from "./countryReducer";
import station from "./stationReducer";
import town from "./townReducer";
import standard from "./standardReducer";
import product from "./productReducer";
import inspector from "./inspectorReducers";
import iqmSampleSubmission from "./iqmSampleSubmissionReducer";


const rootReducers = combineReducers({ 
    ascuydaApplication,
    iqmBatchInspection,
    iqmProductCheckList,
    iqmSampleRequestForm,
    iqmInspectionReport,
    iqmSampleSubmission,
    country,
    station,
    town,
    product,
    standard,
    inspector
});

export default rootReducers;