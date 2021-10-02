import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getStations = () => ({
    type: constants.LIST_STATIONS,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getStation',
        method: HttpService.HttpMethods.POST,
      },
    },
});
