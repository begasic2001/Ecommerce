import { LoginSubmitValue } from '~/pages/account/login';
import { RegisterSubmitValue } from '~/pages/account/register';
import axiosClient from './axiosClient';

const userApi = {
  registry(data: RegisterSubmitValue) {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
  login(data: LoginSubmitValue) {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;
