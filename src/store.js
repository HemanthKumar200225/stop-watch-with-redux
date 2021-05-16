import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import TimeReducer from './reducer';

export const store = createStore(
    TimeReducer,
    devToolsEnhancer( {trace: true} )
);