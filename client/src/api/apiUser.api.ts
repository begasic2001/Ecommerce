import axiosClient from './axiosClient';
import { RegisterSubmitValue } from '~/pages/account/register';
import axios from 'axios';

const userApi = {
  registry(data: RegisterSubmitValue) {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
};

export default userApi;
