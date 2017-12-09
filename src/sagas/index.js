import { fork } from 'redux-saga/effects';

import auth from './saga';

export default function* () {
  yield fork(auth);
}