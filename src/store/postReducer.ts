import { AnyAction } from 'redux';
import { Post, PostState } from '../types/Post';

const defaultState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const FETCH_POST = 'FETCH_POST';
const FETCH_POST_SUCCSESS = 'FETCH_POST_SUCCSESS';
const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const postReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POST_SUCCSESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні дописів.',
      };

    default:
      return state;
  }
};

export const fetchPostsAction = () => ({ type: FETCH_POST });
export const fetchPostsSuccsessAction = (payload: Post[]) => (
  { type: FETCH_POST_SUCCSESS, payload }
);
export const fetchPostsErrorAction = () => ({ type: FETCH_POST_ERROR });
