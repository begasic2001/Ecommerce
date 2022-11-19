import axiosClient from './axiosClient';

interface ISearchParams {
  name_like?: string;
  _page: 1;
  _limit: 12;
}

const productApi = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },
  getByQueryParams(params: ISearchParams) {
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
