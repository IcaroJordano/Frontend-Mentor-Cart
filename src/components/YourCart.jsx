import { useEffect, useState } from "react";
import "./YourCart.css"
import { SiCakephp } from "react-icons/si";
import { CardProductsInCart } from "./CardProductsInCart";

export function YourCart({allProducts,listProducts} ) {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        let lista=[]
        allProducts.map((item)=>{
            if (listProducts.sort().indexOf(item[0])!=-1){
                    lista.push(
                        (listProducts.sort().lastIndexOf(item[0]))+1-
                        listProducts.sort().indexOf(item[0])
                        )
            }
            else{
                lista.push(0)
            }}        
    )
    setCart(lista)
    // alert(typeof(lista))
    },[listProducts])
    // useEffect(()=>{console.log(typeof())},[cart])


    return(
        <div className="YourCart">
            <h3>Your Cart ({listProducts.length})</h3>
            {listProducts.length?(
                <div >
                    <div>
                        {cart.map((item,index)=>(<CardProductsInCart name={allProducts[index][2]} preco={allProducts[index][3]} cart={cart} valor={item}></CardProductsInCart>))}
                        {/* {cart.map((item)=>{
                            item.map((r)=>(
                                <p>{item}</p>
                            ))
                        })} */}
                        <div className="order">
                            <h4>Order Total</h4>
                            <h5>$46.50</h5>
                        </div>
                        <button>Confirm Order</button>
                    </div>
                </div>)
                :(
                <>
                    <SiCakephp></SiCakephp>
                    <p>Your added items will apperar here</p>
                </>
            )
}
        </div>
    )
}