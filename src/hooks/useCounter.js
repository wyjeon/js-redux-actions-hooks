import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/count';

function useCounter() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return {
    number,
    onIncrease,
    onDecrease,
  };
}

export default useCounter;
