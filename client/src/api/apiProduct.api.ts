import axiosClient from './axiosClient';

const productApi = {
  getHotProducts() {
    const url = '/v2/getProduct';
    const params = {
      status: '1',
      hot_new: '1',
    };

    return axiosClient.get(url, { params });
  },
  getSpecificProduct(id: string | undefined) {
    const url = '/v2/getProduct';
    const params = {
      id,
    };

    return axiosClient.get(url, { params });
  },
};

export default productApi;
