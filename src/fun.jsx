import  React,  { useEffect,useState } from "react"
const Fun= () => {
const [name, setname]=useState("viji")
useEffect =(()=>{
    console.log("mounting stage");
    setname("viji")
},[]);
useEffect=(()=>{
    console.log("updating stage");
} ,[name]);
useEffect=(( )=> {
    return ( )=>{
    console.log("unmounting stage");
    };
})
console.log("intialization");
return(
    <div>
        Counter app
    </div>
)
}
export default Fun;