import React, { createContext } from 'react'
import { Comp2 } from './Comp2';
import { Comp3 } from './Comp3';
export const context = createContext();

const Comp1 = () => {

    let data ={name:"Madhu",stage:"Learning"}
    let data2 = {name:"Harsha", stage:"Not yet started"}

  return (
    <>
        <context.Provider value={{data,data2}}>
            <Comp2></Comp2>
            <Comp3></Comp3>
        </context.Provider>
    </>
  )
}

export default Comp1