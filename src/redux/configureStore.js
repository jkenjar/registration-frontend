import { reducers } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
export const store = createStore(reducers, applyMiddleware(promiseMiddleware, thunk));
