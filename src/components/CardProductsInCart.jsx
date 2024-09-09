import "./CardProductsInCart.css"
import { FaRegTimesCircle } from "react-icons/fa";

export function CardProductsInCart({valor}) {
    return(
        <div className="CardProductsInCart">
            <h1>Card</h1>
            <h2>1x</h2>
            <p>@$6.00 ${valor*6}.00</p>
            <FaRegTimesCircle></FaRegTimesCircle>
        </div>
    )
}