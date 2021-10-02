import * as constants from '../constants';
import HttpService from "../services/HttpService";

export const createIqmSampleRequestForm = (sampleRequestForm) => ({
  type: constants.CREATE_SAMPLE_REQUEST_FORM,
  payload: {
    request: {
      url:constants.BASE_URL + '/v1/sample',
      method: HttpService.HttpMethods.POST,
      data : sampleRequestForm
    },
  },
});

export const allSamplesRequestForm = (inspectorId) => ({
  type: constants.GET_SAMPLE_REQUEST_FORMS,
  payload: {
    request:{
      url:constants.BASE_URL + '/v1/getInspectorSample',
      method: HttpService.HttpMethods.POST,
      params: {'inspectorId':inspectorId}
    },
  },
});

export const getSamplesRequestForm = (sampleId) => ({
  type: constants.GET_SAMPLE_REQUEST_FORM,
  payload: {
    request:{
      url:constants.BASE_URL + '/v1/getSample',
      method: HttpService.HttpMethods.POST,
      params: {'sampleId':sampleId}
    },
  },
});

export const createIqmSampleSubmission = (sampleSubmissionForm) => ({
  type: constants.CREATE_SAMPLE_SUBMISSION_FORM,
  payload: {
    request: {
      url:constants.BASE_URL + '/v1/sample/submission',
      method: HttpService.HttpMethods.POST,
      data : sampleSubmissionForm
    },
  },
});