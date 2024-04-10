import React, { useReducer } from 'react'

const reducer = (state,action)=>{
    if(action.type === "DELETE"){
        const newData = state.data.filter((eachObj)=>{
            return eachObj.id !== action.payload
        })
        return{
            data:newData
        }
    }
}

export const ReducerComp1 = () => {

    const initialState = {
        data:[
            {id:1,firstName:"Madhuri", email:"madhurip@gmail.com"},
            {id:2,firstName:"Harsha", email:"harshap@gmail.com"}, 
        ]
    }

    const [state,dispatch] = (useReducer(reducer,initialState));

    const handleDelete = (id) =>{
        dispatch({
            type:"DELETE",
            payload:id
        })
    }

  return (
    <div>
        <h1>useReducer</h1>
        {state.data.map((eachObj)=>{
            const {id,firstName,email} = eachObj
            return(
                <div key={id}>
                    <h3>{firstName}</h3> 
                    <p>{email}</p>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}
