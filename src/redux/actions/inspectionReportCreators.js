import * as constants from '../constants';
import HttpService from "../services/HttpService";

export const allIqminspectionReports= () => ({
  type: constants.LIST_IQM_INSPECTION_REPORT,
  payload: {
    request: {
      url:constants.BASE_URL + '/v1/getInspectionReport',
      method: HttpService.HttpMethods.POST,
    },
  },
});

export const createInspectionReport = (inspectionReport) => ({
    type: constants.CREATE_INSPECTION_REPORT,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/inspection/report',
        method: HttpService.HttpMethods.POST,
        data : inspectionReport,
      },
    },
  });

