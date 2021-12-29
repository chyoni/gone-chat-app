import axios from 'axios';
import { QueryFunctionContext } from 'react-query';

const BASE_URL = 'http://127.0.0.1:4000';

const instance = axios.create({ baseURL: BASE_URL });

export interface LoginResponse {
  alias: string;
  avatar: string;
  id: number;
  token: { access_token: string; refresh_token: string };
  username: string;
}

export const userAPI = {
  login: (context: QueryFunctionContext<string[]>) => {
    const [_, username, password] = context.queryKey;
    return instance({
      method: 'POST',
      url: '/login',
      data: { username, password },
    }).then((res) => {
      return res.data;
    });
  },
};