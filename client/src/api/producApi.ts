import axiosClient from './axiosClient';
import { ISearchParams } from './interface.type';

const productApi = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },
  getSearch(params: ISearchParams) {
    const url = '/products';
    return axiosClient.get(url, { params });
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
