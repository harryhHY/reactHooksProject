import React ,{useState}from "react";
import { headernavList } from "./js/data";
import { useNavigate } from 'react-router-dom';

const Header =()=>{
    const navigate = useNavigate();
    const [active,setactive] = useState(0)
    const goto= (item:any)=>{
        setactive(item.id)
        navigate(item.path)
    }
    return (
        <>
            <div className="headernav">
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