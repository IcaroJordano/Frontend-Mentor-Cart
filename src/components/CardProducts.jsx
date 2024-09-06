import "../components/CardProducts.css"
import ButtonConfig from "./ButtonConfig";
import { useState } from "react";

function CardProducts({image, setcountProducts, countProducts, listProducts, setlistProducts}) {
    const [check, setCheck] = useState(0)
    const [colorBorder, setColorBorder] = useState(false)
    return(
        <div className="CardProducts">
            <div className={`img ${colorBorder?"colorBorder":""}`} style={{'background-image':`url(${image})`}} >
                <ButtonConfig listProducts={listProducts} setlistProducts={setlistProducts} countProducts={countProducts} setcountProducts={setcountProducts} setColorBorder={setColorBorder} check={check} setCheck={setCheck}></ButtonConfig>
            </div>
            <div className="bloco">
                <h3>Waffle</h3>
                <h4>Waffle with Berries</h4>
                <p>$6.50</p>
            </div>
        </div>
    )
}
export default CardProducts