import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { fetchPostsAction, fetchPostsErrorAction, fetchPostsSuccsessAction } from '../store/postReducer';
import { BASE_URL } from './index';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchPostsAction());

    try {
      const response = await axios.get(`${BASE_URL}/posts`);

      dispatch(fetchPostsSuccsessAction(response.data));
    } catch {
      dispatch(fetchPostsErrorAction());
    }
  };
};
