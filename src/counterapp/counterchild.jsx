import React from "react";
import "./counter.css";
const Counterchild=(props)=>{
    console.log(props);
    const{count,pluscount,minuscount}=props
    return(
        <div className="inputbox">
        <div className="app">
            <h1 className={count >0?"positive":count<0 ?"negative":null }>{count}</h1>
            <div className="btn">
                <button onClick={pluscount}><h2>+</h2></button>
               <button onClick={minuscount}><h2>-</h2></button>
               </div>
             </div> 
             </div>
    )
}
export default Counterchild;