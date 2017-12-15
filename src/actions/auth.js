import { createActions } from 'redux-actions';

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationFailure,
  userRequest,
  userSuccess,
  userFailure,
  logout
} = createActions(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'REGISTRATION_REQUEST',
  'REGISTRATION_FAILURE',
  'USER_REQUEST',
  'USER_SUCCESS',
  'USER_FAILURE',
  'LOGOUT'
);