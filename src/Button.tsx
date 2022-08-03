import React   from "react";

type ButtoneType = {
    name:string,
    callBack:()=>void
}


export const Button = (props:ButtoneType)=>{
    const onClickButtonHanddler = ()=>
        props.callBack()
    return(
        <div>
            <button onClick={onClickButtonHanddler}>{props.name}</button>
        </div>
    )
}