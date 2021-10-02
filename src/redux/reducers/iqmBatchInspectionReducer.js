import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function iqmBatchInspectionReducer(state = [], action){
     switch(action.type){
         case constants.LIST_IQM_BATCH_INSPECTIONS + SUCCESS_SUFFIX:
             return action.payload.data;
        case constants.CREATE_IQM_BATCH_INSPECTION + SUCCESS_SUFFIX:
            return state;
        default:
            return state;
     }
}

