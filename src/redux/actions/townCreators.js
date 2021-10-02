import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getTowns = () => ({
    type: constants.LIST_TOWNS,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getTowns',
        method: HttpService.HttpMethods.POST,
      },
    },
});
