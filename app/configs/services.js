import { post } from './networking';

// end point
export const endpoint = {
  login: async params => post('api/users/v1/login/user', params)
};

export default { endpoint };
