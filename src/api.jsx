import React,{useEffect,useState} from "react"
import axios from "axios"
import './api.css'
const Api=() =>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
        console.log(res, "res");
        setdata(res.data);
        })
        .catch((err) => console.log(err, "err"));
    },[]);
    return(
        <>
        <table className="table">
            <thead className="thead">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                    </tr>
            </thead>
            <tbody className="tbody">
                {data.map((item,index)=>{
                    console.log(item,index);
                    return(
                        <>
                        <tr>
                            <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.username}</td>
                           <td>{item.email}</td>
                        </tr>
                    </>  
                    )
                })}
            </tbody>
        </table>
        </>
    )
}
export default Api;