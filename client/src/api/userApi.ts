import axiosClient from './axiosClient';
import { IUserParams } from '~/interface/api.type';

const userApi = {
  getAll() {
    const url = '/users';
    return axiosClient.get(url);
  },
  getByQueryParams(params: IUserParams) {
    const url = '/users';
    return axiosClient.get(url, { params });
  },
};

export default userApi;
