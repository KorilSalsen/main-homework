import { handleActions } from 'redux-actions';

import { authorize, logout } from '../actions/auth';

const initialState = {
  token: null,
  authorized: false,
  error: null
};

export default handleActions(
  {
    [authorize]: (state, action) => ({
      ...state,
      authorize: true,
      error: null,
      token: action.payload
    }),
    [logout]: (state, action) => ({
      ...state,
      authorize: false,
      error: null,
      token: null
    })
  },
  initialState
);