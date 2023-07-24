import React, { useState } from "react";
const Work=(props ) => {
    //  const [count,setcount]= useState(1)
     console.log(props);
     const {count,pluscount,minuscount}=props
    return(
        <div>
            Counter {count}
        <div>
            <button onClick={pluscount}>+</button> 
              <button onClick={minuscount}>-</button>
        </div>
        </div>
    )
}
export default Work


