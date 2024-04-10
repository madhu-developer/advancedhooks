import React, { useEffect, useRef } from 'react'

export const RefComp2 = () => {

    const data = useRef(null);

   const submitHandler = (e) =>{
        e.preventDefault();
        console.log(data.current.value)
   }
   useEffect(()=>{
        data.current.focus();
   },[])

  return (
    <div>
        <h1>Ref2</h1>
        <form onSubmit={submitHandler}>
        <input ref={data} type="text" placeholder="Enter here"/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}
