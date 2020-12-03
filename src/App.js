import React,{useState,} from "react";
import {contextCounter} from "./context/Context"
import {Counter} from "./counter/Counter"
const App =() =>{
  const [counter,setCounter]=useState({
    counter:0,
    step:3
  });

  return(
    <contextCounter.provider value={counter}>
     <Counter />
    </contextCounter.provider>

  )
}

export default App;