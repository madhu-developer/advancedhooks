import React, { useContext } from 'react'
import { context } from './Comp1';

export const Comp2 = () => {

    let details = useContext(context);

  return (
    <>
        <ul>
            <li>{details.data.name}</li>
            <li>{details.data.stage}</li>
        </ul>
    </>
  )
}
