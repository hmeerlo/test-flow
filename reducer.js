// @flow
import type { TState, Action } from './types.js';

const initialState = {
  stringprop: 1,
  aap: ''
};

const aap = 2;

const reducer = (state: ?TState = initialState, action: Action) => {
  switch (action.type) {
    case 'ACTION_A':
      if (state) {
        state.stringprop = 2;
      }
      return state;
    case 'ACTION_B':
      if (state) {
        state.stringprop = 3;
      }
      return state;
  }
};

export default reducer;
