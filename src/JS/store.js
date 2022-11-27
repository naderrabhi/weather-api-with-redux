import { createStore, applyMiddleware, compose } from "redux";
import { weatherReducer } from "./reducer/weatherReducer";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(weatherReducer,composeEnhancers(applyMiddleware(thunk)))