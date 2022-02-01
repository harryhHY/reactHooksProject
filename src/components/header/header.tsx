import React from "react";
import { headernavList } from "./data";
import { useNavigate } from 'react-router-dom';

const Header =()=>{
    const navigate = useNavigate()
    const goto= (path:any)=>{
        navigate(path)
    }
    return (
        <>
            <div className="headernav">
               {
                   headernavList.map(item=>(
                       <div key={item.id} onClick={()=>goto(item.path)} className="headernavli">
                           {item.name}
                       </div>
                   ))
               }
            </div>
        </>
    )
}
export default Header