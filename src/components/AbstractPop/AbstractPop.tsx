import React from "react";
import ReactDOM from "react-dom";

interface Props {
    children:React.JSX.Element;
    disabled?:boolean
}
const AbstractPop:React.FC<Props> = ({children ,disabled =false})=>{
    if(disabled) return children
    else return ReactDOM.createPortal(children , document.getElementById("pops") as HTMLElement)
}
export default AbstractPop;