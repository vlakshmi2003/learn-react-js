import React,{ useState } from "react";
import Child from "./child";
const Parent=()=>{
    const [count,setcount]=useState(0)
    console.log(count,"value");
    return(
            <div>
                <Child count={count}  pluscount={()=> setcount(count+4)}
                minuscount={()=> setcount(count-4)}></Child>
            </div>
    )
}
export default Parent;