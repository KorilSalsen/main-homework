import { handleActions } from 'redux-actions';

import {
  loginRequest,
  loginReject,
  loginSuccess,
  registrationRequest,
  registrationReject,
  logout
} from '../actions/auth';

const initialState = {
  isFetching: false,
  isFetched: false,
  token: null,
  error: null
};

export default handleActions(
  {
    [loginRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null,
      token: null
    }),
    [loginSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: null,
      token: action.payload
    }),
    [loginReject]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.payload,
      token: null
    }),
    [registrationRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null,
      token: null
    }),
    [registrationReject]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.payload,
      token: null
    }),
    [logout]: (state, action) => ({
      ...state,
      authorized: false,
      error: null,
      token: null
    })
  },
  initialState
);

export const getIsAuthorized = state => !!state.auth.token;