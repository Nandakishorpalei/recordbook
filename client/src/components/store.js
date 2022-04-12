import { allotmentReducer } from "./allotmentReducer/allotmentReducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore} from "redux";


const rootReducer = combineReducers({
    allotmentData : allotmentReducer
})

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;