import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getAscuydaApplications = () => ({
    type: constants.LIST_ASCUYDA_APPLICATIONS,
    payload: {
      request: {
        url:"https://606ec8090c054f001765794d.mockapi.io/revolt_mock/asycu_",
        method: HttpService.HttpMethods.GET,
      },
    },
});


