import axiosClient from './axiosClient';
import { ICategoryParams } from '~/interface/api.type';

const categorytApi = {
  getAll() {
    const url = '/subCategories';
    return axiosClient.get(url);
  },
  getByQueryParams(params: ICategoryParams) {
    const url = '/subCategories';
    return axiosClient.get(url, { params });
  },
};

export default categorytApi;
