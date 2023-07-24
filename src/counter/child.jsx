import React from "react";
const Child=(props)=>{
    console.log(props);
    const{count,pluscount,minuscount}=props
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
export default Child;