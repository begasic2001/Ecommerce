import axiosClient from './axiosClient';

const productApi = {
  getAll(params: any) {
    const url = '/product/getProduct';
    return axiosClient.get(url, { params });
  },
};

export default productApi;
