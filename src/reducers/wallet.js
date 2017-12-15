import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  walletRequest,
  walletSuccess,
  walletFailure
} from '../actions/wallet';

const isFetching = handleActions({
  [walletRequest]: () => true,
  [walletSuccess]: () => false,
  [walletFailure]: () => false,
}, false);

const isFetched = handleActions({
  [walletRequest]: () => false,
  [walletSuccess]: () => true,
  [walletFailure]: () => true,
}, false);

const initialData = { usd: 0, btc: 0, eth: 0 };

const data = handleActions({
  [walletRequest]: () => initialData,
  [walletSuccess]: (state, action) => action.payload,
  [walletFailure]: () => initialData,
}, initialData);

const error = handleActions({
  [walletRequest]: () => null,
  [walletSuccess]: () => null,
  [walletFailure]: (state, action) => action.payload,
}, null);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error,
});

export const getData = state => state.wallet.data;
export const getLoading = state => state.wallet.isFetching;
export const getError = state => state.wallet.error;