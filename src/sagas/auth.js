import { call, take, select, put } from 'redux-saga/effects';

import {
  loginRequest,
  loginReject,
  loginSuccess,
  registrationRequest,
  registrationReject,
} from '../actions/auth';
import { getIsAuthorized } from '../reducers/auth';
import * as api from '../api';

export default function* () {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);

    if (!isAuthorized) {
      const action = yield take([loginRequest, registrationRequest]);

      if (action.type === loginRequest.toString()) {
        // Login
        try {
          const response = yield call(api.login, action.payload);

          yield put(loginSuccess(response.data.jwt));
        } catch (error) {
          yield put(loginReject(error));
        }
      } else if (action.type === registrationRequest.toString()) {
        // Registration
        try {
          const response = yield call(api.registration, action.payload);

          yield put(loginSuccess(response.data.jwt));
        } catch (error) {
          yield put(registrationReject(error));
        }
      }
    }
  }
}