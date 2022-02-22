import { useState } from 'react';

import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './app/counterReducer';
import styles from './styles/Counter.module.css';

export default function Counter() {
  const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();// it dispatches an action but this is set at the global level
    const [incrementAmount, setIncrementAmount] = useState('2');
    // State that holds the current increment value

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {/* <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button> */}
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
