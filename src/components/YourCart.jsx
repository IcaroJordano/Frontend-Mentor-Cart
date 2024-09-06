import "./YourCart.css"
import { SiCakephp } from "react-icons/si";

export function YourCart({countProducts, listProducts} ) {
    return(
        <div className="YourCart">
            <h3>Your Cart ({countProducts})</h3>
            {countProducts?(
                listProducts.map((item)=>(<p>{item}</p>))
            ):(
                <>
                <SiCakephp></SiCakephp>
                <p>Your added items will apperar here</p>
                </>
            )
}
        </div>
    )
}