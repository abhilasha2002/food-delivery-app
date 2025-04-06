import { useState } from "react";
const User=(props)=>{

    const {name,location,contact}=props;
    const [count,setCount]=useState(0);

    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
            <button 
            onClick={()=>{
                // let temp=count++;
                setCount(count+1);
            }}
            >Increament count</button>
        </div>
    )
}
export default User;