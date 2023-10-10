import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import filters  from './reducers/filters';
import cards  from './reducers/cards';

const rootReducer = combineReducers({
    filters,
    cards
})
const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
export default store;