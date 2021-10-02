import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getChecklists = () => ({
    type: constants.LIST_CHECKLISTS,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getCountry',
        method: HttpService.HttpMethods.POST,
      },
    },
});
