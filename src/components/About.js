import User from "./User";
import UserClass from "./UserClass";
import React from 'react';
class About extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor parent');
    }
    componentDidMount(){
        console.log("ComponentDId mount parent");
    }
    render(){
        console.log('render parent');
        return (
            <div>
                <h1>About us</h1>
                <User name={"Akshay"} location={'Dehradun'} contact={'@akshay'}/>
                <UserClass name={'Abhilasha'} location={'Behror'} contact={'@abhilasha02'}/>
            </div>
        ) 
    }
}
// const About=()=>{
    
//     return (
//         <div>
//             <h1>About us</h1>
//             <User name={"Akshay"} location={'Dehradun'} contact={'@akshay'}/>
//             <UserClass name={'Abhilasha'} location={'Behror'} contact={'@abhilasha02'}/>
//         </div>
//     )
// }
export default About;