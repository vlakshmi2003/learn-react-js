import React,{ useState } from "react";
import  Counterchild from "./counterchild";
const Counterparent=(props)=>{
    const [count,setcount]=useState(0)
    console.log(count,"value");
    return(
            <div>
                <Counterchild count={count}  pluscount={()=> setcount(count+1)}
                minuscount={()=> setcount(count-1)}></Counterchild>
            </div>
    )
}
export default Counterparent;