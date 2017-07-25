// @flow

export type TState = {
  stringprop: number
};

export type Action = ActionA | ActionB;

type ActionA = {
  type: 'ACTION_A',
  payload: number
};

type ActionB = {
  type: 'ACTION_B',
  payload: string
};
