import axiosClient from './axiosClient';

const productApi = {
  getAll(params: any) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
};

export default productApi;
