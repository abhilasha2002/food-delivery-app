import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2
        }
        console.log('constructor');
    }
    componentDidMount(){
        console.log("ComponentDId mount child");
    }
    render(){
        console.log('render');
        const {location,contact}=this.props;
        return(
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>{
                    //NEVER update the state variables directly
                    this.setState({
                        count:this.state.count+1,
                    }) ;
                }}
                >
                    Count Increament</button>
                <h1>Name: {this.props.name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {contact}</h3>
                
            </div>
        )
    
    }
}
export default UserClass;