// store.js
import { createStore, combineReducers } from 'redux';
import movieReducer from './reducers/reducers';

const rootReducer = combineReducers({
  movies: movieReducer,
});

console.log(rootReducer)

const store = createStore(rootReducer);

export default store;
