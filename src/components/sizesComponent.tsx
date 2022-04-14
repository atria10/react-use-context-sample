import React, { FC, useContext } from 'react'
import { SizeContext } from '../App'


export const Sizes: FC = ()=>{
    // const font=()=>{
    //     switch({fontSize}){
    //        case:8{
    // //            return <h5></h5>
    //        }
    //     }
    // }
    // alhagie se vuoi modifica
     const {fontSize}=useContext(SizeContext);
    return(
        <h1 style={{fontSize}}>Size {fontSize}</h1>
    )
}