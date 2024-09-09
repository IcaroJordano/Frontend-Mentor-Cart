import { useEffect } from "react";
import "./CardProductsInCart.css"
import { FaRegTimesCircle } from "react-icons/fa";

export function CardProductsInCart({valor, cart}) {
    // let display=''
    // if(valor=0){
    //     display="none"
    // }
    // else{
    //     display="inblock"
    // }
    // alert(valor)
    let display=''
    if(valor<1){
        display="none"}
    else{
        display="block"}
    return(
        // style={{'background-image':`url(${image})`}}
        <div style={{'display':display}} className="CardProductsInCart">
            <h1>Card</h1>
            <div>
                <h2>{valor}x</h2>
                <p>@$6.00 <span>${valor*6}.00</span></p>
                <FaRegTimesCircle></FaRegTimesCircle>
            </div>
        </div>
    )
}