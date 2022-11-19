import axiosClient from './axiosClient';

interface ISearchParams {
  name: string[];
}

const categorytApi = {
  getAll() {
    const url = '/categories';
    return axiosClient.get(url);
  },
  getByQueryParams(params: ISearchParams) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },
};

export default categorytApi;
