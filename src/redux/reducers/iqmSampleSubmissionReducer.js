import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function iqmSampleSubmissionReducer(state = [], action){
     switch(action.type){
         case constants.LIST_IQM_SAMPLE_SUBMISSION + SUCCESS_SUFFIX:
             return action.payload.data;
        default:
            return state;
     }
}

