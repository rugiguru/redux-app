import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import math from "./reducers/mathReducer"
import user from "./reducers/userReducer"


const middleware = applyMiddleware(logger);
export default createStore(
    combineReducers({math, user}),
     {}, 
     middleware
);

