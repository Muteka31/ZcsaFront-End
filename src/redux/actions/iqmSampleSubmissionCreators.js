import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const allIqmSampleSubmission = () => ({
    type: constants.LIST_IQM_SAMPLE_SUBMISSION,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getSampleSubmission',
        method: HttpService.HttpMethods.POST,
      },
    },
});


