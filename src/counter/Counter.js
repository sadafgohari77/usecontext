import React,{useReducer,useContext} from "react";
import Reducer from "../reducer/Reducer"
import {contextCounter} from "../context/Context"
export const Counter=()=>{
    const value =useContext(contextCounter)
    const {state,dispatch} =useReducer(Reducer,value);
    return(
        <div>
            <div>{state.counter}</div>
            <button onClick={()=>{dispatch({type:'INCREMENT',payload:value})}}></button>
            <button onClick={()=>{dispatch({type:'DECREMENT',payload:value})}}></button>
        </div>
    )
}