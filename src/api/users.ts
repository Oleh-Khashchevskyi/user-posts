import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { fetchUsersAction, fetchUsersErrorAction, fetchUsersSuccsessAction } from '../store/userReducer';
import { BASE_URL } from './index';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchUsersAction());

    try {
      const response = await axios.get(`${BASE_URL}/users`);

      dispatch(fetchUsersSuccsessAction(response.data));
    } catch {
      dispatch(fetchUsersErrorAction());
    }
  };
};
