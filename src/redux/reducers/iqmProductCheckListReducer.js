import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function iqmProductCheckListReducer(state = [], action){
     switch(action.type){
         case constants.GET_PRODUCT_CHECK_LISTS + SUCCESS_SUFFIX:
             return action.payload.data;
        // case constants.DELETE_PRODUCT_CHECK_LIST + SUCCESS_SUFFIX:
        //     return state.filter((inspectionCheckList) => inspectionCheckList.id !== action.payload.inspectionCheckList.id);
        default:
            return state;
     }
}

