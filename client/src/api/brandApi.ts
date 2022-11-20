import axiosClient from './axiosClient';

const brandApi = {
  getAll() {
    const url = '/brands';
    return axiosClient.get(url);
  },
  getSpecific(id: any) {
    const url = `/brands/${id}`;
    return axiosClient.get(url);
  },
};

export default brandApi;
