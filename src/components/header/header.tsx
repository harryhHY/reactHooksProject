import React ,{useEffect, useState}from "react";
import { headernavList } from "./js/data";
import { useNavigate } from 'react-router-dom';

interface headeractive{
    headeractive?:number
}
const Header =(props:headeractive)=>{
    const {headeractive} = props
    const navigate = useNavigate();
    const [active,setactive] = useState(1);
    const goto= (item:any)=>{
        setactive(item.id)
        navigate(item.path)
    }
    useEffect(()=>{
        if(headeractive!=undefined){
            setactive(headeractive)
        }
    },[])
    return (
        <>
            <div className="headernav animate__animated  animate__bounceInRight">
               {
                   headernavList.map(item=>(
                       <div key={item.id} onClick={()=>goto(item)} className={active===item.id?"headernavli headeractive":"headernavli"}>
                           {item.name}
                       </div>
                   ))
               }
            </div>
        </>
    )
}
export default Header