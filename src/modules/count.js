import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수
export const increase = createAction(INCREMENT);
export const decrease = createAction(DECREMENT);

// 초기상태
const initialState = {
  number: 0,
};

// 리듀서
const counter = handleActions(
  {
    [INCREMENT]: state => ({ number: state.number + 1 }),
    [DECREMENT]: state => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
