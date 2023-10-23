import { useState } from "react";
const Custom = (initialvalue=0,value) => {
    const [count,setCount] = useState(initialvalue)
    const increment = ()=>{
        setCount(preveCount=>preveCount+value)
    }
    const decrement = ()=>{
        setCount(preveCount=>preveCount-value)
    }
    const reset = () =>{
        setCount(0)
    }
    return[count,increment,decrement,reset]
};

export default Custom;