import axiosClient from './axiosClient';

const productApi = {
  getAll(params: any) {
    const url = '/v2/getProduct';
    return axiosClient.get(url, { params });
  },
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
