import React from 'react'
import Childclass from './childclass'
class Parentclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        const{count}=this.state
        console.log(count,"value");
    return (
       <div> 
        <Childclass count={count}pluscount={()=> this.setState({count:count+2})}
        minuscount={()=> this.setState({count:count-2})}
        ></Childclass>
       </div>
   
       )
    }
}
export default Parentclass;