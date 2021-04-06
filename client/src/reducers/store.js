import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";



const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const middlewares = [thunk]



const store = createStore(rootReducer, composeEnchancer(applyMiddleware(...middlewares)))




export default store
