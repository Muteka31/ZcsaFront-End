import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const allInspectors = () => ({
    type: constants.LIST_INSPECTORS,
    payload: {
      request: {
        url:"http://41.175.8.230:8180/auth/admin/realms/ZCSA/users/",
        method: HttpService.HttpMethods.GET
      },
    },
});

