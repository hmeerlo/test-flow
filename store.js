// @flow

import reducer from './reducer';

import type { TState, Action } from './types.js';

let store: ?TState;

export function dispatch(action: Action) {
  store = reducer(store, action);
}

export default store;
