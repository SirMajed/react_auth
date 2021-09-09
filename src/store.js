import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer); // createStore takes a function as an argument

export default store;