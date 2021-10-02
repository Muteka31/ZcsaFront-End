import * as constants from '../constants';
import { SUCCESS_SUFFIX } from "redux-axios-middleware";


export default function iqmSampleRequestFormReducer(state = [], action){
     switch(action.type){
         case constants.GET_SAMPLE_REQUEST_FORMS + SUCCESS_SUFFIX:
             return action.payload.data;
        default:
            return state;
     }
}



