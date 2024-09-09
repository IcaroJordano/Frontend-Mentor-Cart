import "./CardProductsInCart.css"
import { FaRegTimesCircle } from "react-icons/fa";

export function CardProductsInCart({valor, cart, name,preco}) {
    let display=''
    if(valor<1){
        display="none"}
    else{
        display="block"}
    return(
        <div style={{'display':display}} className="CardProductsInCart">
            <h1>{name}</h1>
            <div>
                <h2>{valor}x</h2>
                <p>@${preco} <span>${Number.isInteger((valor*preco))?`${valor*preco}.00`:`${valor*preco}0`}</span></p>
                <FaRegTimesCircle></FaRegTimesCircle>
            </div>
        </div>
    )
}