import { combineReducers, createStore } from "redux";
import fanletter from "../modules/fanletter";
import member from "../modules/member";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReduceer = combineReducers({ fanletter, member });
const store = createStore(rootReduceer, devToolsEnhancer());

export default store;
