import React from 'react'
class Childclass extends React.Component{
    render(){
        console.log(this.props);
    const{count,pluscount,minuscount}= this.props
    return(
        <div>
            counter{count}
            <div>
                <button onClick={pluscount }>+</button>
               <button onClick={minuscount}>-</button>
            </div>
        </div>
      )
    }
}
    


export default Childclass;