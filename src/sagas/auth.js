import { call, take, select, put, takeEvery } from 'redux-saga/effects';

import {
  loginRequest,
  loginFailure,
  loginSuccess,
  registrationRequest,
  registrationFailure,
  userRequest,
  userSuccess,
  userFailure,
  logout
} from '../actions/auth';
import { getIsAuthorized } from '../reducers/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from '../localStorage';
import { login, registration, clearTokenApi, setTokenApi, getUserInfo } from '../api';

export function* authWatch() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
      } else {
        const action = yield take([loginRequest, registrationRequest]);

        if (action.type === registrationRequest.toString()) {
          // Registration
          try {
            const response = yield call(registration, action.payload);
            token = response.data.jwt;
          } catch (error) {
            yield put(registrationFailure(error));
          }
        } else if (action.type === loginRequest.toString()) {
          // Login
          try {
            const response = yield call(login, action.payload);
            token = response.data.jwt;
          } catch (error) {
            yield put(loginFailure(error));
          }
        }
      }
    }

    if (token) {
      yield call(setTokenApi, token);
      yield call(setTokenToLocalStorage, token);
      yield put(userRequest());
      yield put(loginSuccess(token));
      yield take(logout);
      yield call(removeTokenFromLocalStorage);
      yield call(clearTokenApi);
    }
  }
}

function* userFlow() {
  try {
    const response = yield call(getUserInfo);
    yield put(userSuccess(response.data.result));
  } catch (error) {
    yield put(userFailure(error));
  }
}

export function* userWatch() {
  yield takeEvery(userRequest, userFlow);
}