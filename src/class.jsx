import React from 'react'
import Work from './work'
class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        const {count}=this.state;
        console.log(count,"value")
        return(
            <div>
            <Work count={count} pluscount= {()=> this.setState({
                count:count+2
                
            })} minuscount= {()=> this.setState({
                count:count-2})}>
                 </Work>


                {/* Counter{count}
                <button onClick={()=>
                this.setState({
                    count:count+4
                })
                }>+</button>
            
                <button onClick={()=>
                this.setState({
                    count:count-4
                })
                }>-</button> */}
            </div>
        )
    }
}
export default CounterApp;