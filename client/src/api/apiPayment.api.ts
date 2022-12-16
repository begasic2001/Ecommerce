import axios from 'axios';
import axiosClient from './axiosClient';

const paymentApi = {
  payment(data: any, headers: any) {
    const url = 'http://localhost:9000/payment';
    axios.post(url, data, { headers });
  },
  addCart(productId: string, auth: any) {
    const url = '/api/cart/addToCart';
    const params = {
      productId,
    };
    const headers = {
      Authorization: `Bearer ${auth}`,
    };

    return axiosClient.post(
      url,
      {},
      {
        params,
        headers,
      }
    );
  },
};

export default paymentApi;
