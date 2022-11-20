import axiosClient from './axiosClient';
import { ICategoryParams } from '~/interface/api.type';

const categorytApi = {
  getAll() {
    const url = '/categories';
    return axiosClient.get(url);
  },
  getByQueryParams(params: ICategoryParams) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },
  getSpecific(id: any) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default categorytApi;
