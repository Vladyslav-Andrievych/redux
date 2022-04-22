import { store, increment, decrement, reset } from './store.js';

import './index.scss';

const incrementElem = document.querySelector('[data-action=increment]');
const decrementElem = document.querySelector('[data-action=decrement]');
const resetElem = document.querySelector('[data-action=reset]');
const resultElem = document.querySelector('.counter__result');

const onIncrement = () => store.dispatch(increment());
incrementElem.addEventListener('click', onIncrement);

const onDecrement = () => store.dispatch(decrement());
decrementElem.addEventListener('click', onDecrement);

const onReset = () => store.dispatch(reset());
resetElem.addEventListener('click', onReset);

store.subscribe(() => {
  const { history } = store.getState();

  if (history.length === 0) {
    resultElem.textContent = '';
    return;
  }

  const historyString = history.reduce(
    (acc, historyItem) => acc + (historyItem === 1 ? '+1' : '-1'),
    ''
  );
  const counterValue = history.reduce(
    (acc, historyItem) => acc + historyItem,
    0
  );

  resultElem.textContent = `${historyString} = ${counterValue}`;
});
