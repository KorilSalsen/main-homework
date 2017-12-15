import { fork } from 'redux-saga/effects';

import { authWatch, userWatch } from './auth';
import {
  currencyWatch,
  fetchBtcWatch,
  fetchEthWatch
} from './currency';
import { walletWatch } from './wallet';
import { sellWatch, buyWatch } from './market';

export default function* () {
  yield fork(authWatch);
  yield fork(userWatch);
  yield fork(currencyWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(walletWatch);
  yield fork(sellWatch);
  yield fork(buyWatch);
}