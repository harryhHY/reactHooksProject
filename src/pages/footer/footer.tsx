import React, {
  useState,
  useMemo,
  useEffect,
} from "react";

const Footer = () => {
  const  [num,setnum]= useState(0)//设置一个num常量
  useEffect(()=>{
    console.log(num)
  },[num])
  const memofn = useMemo(()=>{
    console.log(num)
   return ()=>num+10
  },[num])
  return (
    <div>
      <div onClick={()=>setnum(num+1)} >
          {memofn()}
      </div>
    </div>
  );
};
export default Footer;
