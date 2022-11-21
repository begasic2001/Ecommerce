import axiosClient from './axiosClient';
import { IProductParams } from '~/interface/api.type';

const productApi = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },
  getByQueryParams(params: IProductParams) {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
  getSpecific(id: any) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getHotList() {
    const url = '/products';
    const params = {
      hotTrend: true,
      _page: 1,
      _limit: 9,
    };
    return axiosClient.get(url, { params });
  },
  getNewList() {
    const url = '/products';
    const params = {
      new: true,
      _page: 1,
      _limit: 10,
    };
    return axiosClient.get(url, { params });
  },
};

export default productApi;
