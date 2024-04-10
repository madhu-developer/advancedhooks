//import React, { useEffect, useRef, useState } from 'react'
import React,{useState} from "react";

export const RefComp1 = () => {
//    const [inputVal,setInputVal] = useState("")
    const [x,setX] = useState(0);
    // const a = useRef(1);
    // const b = useRef(4);
    //console.log(a.current,b.current);

    // const count = useRef(0);
    //console.log(count);

    // useEffect(()=>{
    //    const count.current = count.current + 1
    //     // console.log(count.current)
        
    // })
    // useEffect(()=>{
    //     a.current = a.current + 1;
    //     b.current = b.current + 1
    //     console.log(a.current,b.current);
    // },[])

  return (
    <div>
    <h1>useRef</h1>
    {/*<input type="text" onChange={(e)=>setInputVal(e.target.value)} value={inputVal}/>*/}
    <input type="text" autofocus/>
    <button onClick={()=>{
        setX(x+100);
    }}>Increase</button>
    <p>Count:{x}</p>
    </div>
  )
}
