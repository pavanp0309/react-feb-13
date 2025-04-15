import { createStore } from "redux";
import { countReducer } from "../reducers/countReducer";


// step2: creating the global store 
let store=createStore(countReducer)
export default store 