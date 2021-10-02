import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function stationReducer(state = [], action){
     switch(action.type){
         case constants.LIST_STATIONS + SUCCESS_SUFFIX:
             return action.payload.data;
        default:
            return state;
     }
}

