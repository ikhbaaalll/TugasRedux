import { createStore } from 'redux';
import {mReducers} from './reducer';

export const store = createStore(mReducers);