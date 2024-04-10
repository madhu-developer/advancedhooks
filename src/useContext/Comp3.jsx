import React, { useContext } from 'react'
import { context } from './Comp1'

export const Comp3 = () => {
    let details=useContext(context)
  return (
    <div>
        <h1>Comp3</h1>
        <ul>
            <li>{details.data2.name}</li>
            <li>{details.data2.stage}</li>
        </ul>
    </div>
  )
}
