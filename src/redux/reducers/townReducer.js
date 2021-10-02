import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function townReducer(state = [], action){
     switch(action.type){
         case constants.LIST_TOWNS + SUCCESS_SUFFIX:
             return action.payload.data;
        default:
            return state;
     }
}

