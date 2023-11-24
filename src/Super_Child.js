import React from "react";
import { useContext } from "react";
import { GlobalInfo } from "./LoginContext";
const Super_Child = () =>{

    const day = "Sunday"
    const backcol = "green"
    const {AppColor,Day,bgcol} = useContext(GlobalInfo)
    return(
        <>
            <h1 style={{color:AppColor, backgroundColor:backcol}}>Super Child Component</h1>
            <button onClick={()=>(Day(day),bgcol(backcol))}>Click</button>
        </>
    )
}

export default Super_Child;