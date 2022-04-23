import store from './store.js';
import { setLanguage } from './language.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setUser, removeUser } from './user.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ id: 1, name: 'Milk' }));
store.dispatch(removeProduct(1));
store.dispatch(setUser({ name: 'John' }));
store.dispatch(removeUser());
