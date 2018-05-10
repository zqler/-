import { createStore } from 'redux';
import { counter } from './reducer';
import { createLogger } from 'redux-logger'

export const configureStore = createStore(counter);