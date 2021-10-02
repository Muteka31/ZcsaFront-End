import * as constants from '../constants';
import HttpService from "../services/HttpService";


export const getProducts = () => ({
    type: constants.LIST_PRODUCTS,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getProducts',
        method: HttpService.HttpMethods.POST,
      },
    },
});

export const getProduct = (productId) => ({
    type: constants.GET_PRODUCT,
    payload: {
      request: {
        url:constants.BASE_URL + '/v1/getProduct',
        method: HttpService.HttpMethods.POST,
        params: {'id':productId}
      },
    },
});
