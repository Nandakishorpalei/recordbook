import { allotmentReducer } from "./allotmentReducer/allotmentReducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore} from "redux";


const rootReducer = combineReducers({
    allotmentData : allotmentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
