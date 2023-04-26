import {createStore, combineReducers} from "redux";
import listacarrelloreducer from "./reducers/listacarrello";

const store =createStore (combineReducers(
    {listacarrelloreducer:listacarrelloreducer}) 
    );

export default store;