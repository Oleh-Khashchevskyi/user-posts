import { AnyAction } from 'redux';
import { User, UserState } from '../types/User';

const defaultState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCSESS = 'FETCH_USERS_SUCCSESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const userReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCSESS:
      return {
        ...state,
        loading: false,
        users: [...action.payload],
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні користовачів.',
      };

    default:
      return state;
  }
};

export const fetchUsersAction = () => ({ type: FETCH_USERS });
export const fetchUsersSuccsessAction = (payload: User[]) => (
  { type: FETCH_USERS_SUCCSESS, payload }
);
export const fetchUsersErrorAction = () => ({ type: FETCH_USERS_ERROR });
