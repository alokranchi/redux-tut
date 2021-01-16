import React from 'react'

const User =(props)=>{
    console.warn(props.data.name)
    const nam = props.data.name
    const {data} = props
    return(
    
    <div>
        <h1>User Component {nam} + {data.name} +{data.age}</h1>
    </div>
    
    )
}
export default User;