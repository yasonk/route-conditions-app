// @flow
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension/index";
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import { reducer } from './reducer';


export type Report = {
    lat: number,
    lon: number,
    message: string,
}

export const reportsStore = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);