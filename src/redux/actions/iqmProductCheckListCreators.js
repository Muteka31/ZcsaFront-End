import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getIqmProductCheckLists = (batchInspectionId) => ({
    type: constants.GET_PRODUCT_CHECK_LISTS,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getApplicationChecklist',
        method: HttpService.HttpMethods.POST,
        params : {'applicationId':batchInspectionId},
      },
    },
});


export const createIqmProductCheckList = (inspectionCheckList) => ({
  type: constants.CREATE_PRODUCT_CHECK_LIST,
  payload: {
    request: {
      url:constants.BASE_URL + '/v1/checklist',
      method: HttpService.HttpMethods.POST,
      data : inspectionCheckList
    },
  },
});

export const deleteIqmProductCheckList = (inspectionCheckList) => ({
  type: constants.DELETE_PRODUCT_CHECK_LIST,
  payload: {
    request: {
      url:constants.BASE_URL + '/v1/deleteChecklist',
      method: HttpService.HttpMethods.POST,
      params : {'checklistId':inspectionCheckList.id},
    },
  },
});


