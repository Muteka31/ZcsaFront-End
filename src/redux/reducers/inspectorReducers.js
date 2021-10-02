import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function inspectorReducer(state = [], action){
     switch(action.type){
         case constants.LIST_INSPECTORS + SUCCESS_SUFFIX:
             return action.payload.data;
        default:
            return state;
     }
}

