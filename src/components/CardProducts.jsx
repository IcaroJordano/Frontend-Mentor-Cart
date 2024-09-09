import "../components/CardProducts.css"
import ButtonConfig from "./ButtonConfig";
import { useState } from "react";

function CardProducts({image, listProducts, setlistProducts, preco, description,name}) {
    const [check, setCheck] = useState(0)
    const [colorBorder, setColorBorder] = useState(false)
    return(
        <div className="CardProducts">
            <div className={`img ${colorBorder?"colorBorder":""}`} style={{'background-image':`url(${image})`}} >
                <ButtonConfig name={name} listProducts={listProducts} setlistProducts={setlistProducts} setColorBorder={setColorBorder} check={check} setCheck={setCheck}></ButtonConfig>
            </div>
            <div className="bloco">
                <h3>{name}</h3>
                <h4>{description}</h4>
                <p>${preco}</p>
            </div>
        </div>
    )
}
export default CardProducts