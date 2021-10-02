import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const allIqmBatchInspections = (inspectorId) => ({
    type: constants.LIST_IQM_BATCH_INSPECTIONS,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getApplication',
        method: HttpService.HttpMethods.POST,
        params : {inspectorId},
      },
    },
});

export const createIqmBatchInspection = (iqmBatchInspection)=> {
    return {
      type: constants.CREATE_IQM_BATCH_INSPECTION,
      payload: {
        request: {
          url: constants.BASE_URL+'/v1/application',
          method: HttpService.HttpMethods.POST,
          data: iqmBatchInspection,
        },
      },
    }
};
