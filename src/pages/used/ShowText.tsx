import React, { useContext, useEffect } from "react";
import { ColorContext,ChangeText } from "./mider";
const ShowText=()=>{
    const Text:any = useContext(ColorContext)
    const {dispatch,text}  = Text
    useEffect(()=>{
        console.log(dispatch)
        console.log(text)
    },[])
    return(
        <div >
           <div onClick={()=>{dispatch({type:'CHANGETEXT',text:"都不爱"})}}>
               点我主动
           </div>
           <div onClick={()=>{dispatch({type:'qiqi123',text:"自己改变"})}}>
               点我自己变
           </div>
           <div>
            {text}
           </div>
        </div>
    )
}
export default ShowText