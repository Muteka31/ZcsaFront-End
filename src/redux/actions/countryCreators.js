import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getCountries = () => ({
    type: constants.LIST_COUNTRIES,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getCountry',
        method: HttpService.HttpMethods.POST,
      },
    },
});
