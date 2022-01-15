import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({})
export const ChangeText = "CHANGETEXT"
const chengefn=(state:any,action:any)=>{
    switch(action.type){
        case 'CHANGETEXT':
            return state= action.text
        default:
            return state = "瞧你的那个样"
    }
}
export const Text = (props:any)=>{
    const [text,dispatch] = useReducer(chengefn,'你爱我')
    return (
        <ColorContext.Provider value={{text,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}