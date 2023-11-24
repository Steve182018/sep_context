import React from "react";
import { useContext } from "react";
import { GlobalInfo } from "./LoginContext"
import Super_Child from "./Super_Child";
const Child = () =>{

    const {AppColor,bgcol} = useContext(GlobalInfo)
    console.log(AppColor)

    return(
        <>
            <h1 style={{color:AppColor}}>Child Component</h1>
            <Super_Child/>
        </>
    )
}

export default Child;