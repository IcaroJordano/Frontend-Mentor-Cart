import { useEffect, useState } from "react";
import "./YourCart.css"
import { SiCakephp } from "react-icons/si";

export function YourCart({allProducts,listProducts} ) {
    const [cart,setCart]=useState([])
    // listProducts.includes(item[0])?0:1;
    useEffect(()=>{
            listProducts.map((item)=>{
                setCart([...cart,item[0]])
            })
    },[listProducts])
    //     // setCart([])
    //         // setCart([item[0]])
    //         // if (listProducts.indexOf(item[0])!=-1){
    //         //     alert([item[0],(listProducts.sort().lastIndexOf(item[0])+1)-listProducts.sort().indexOf(item[0])])
    //         //     setCart([...cart,item[0]])
                
    //         // }
    //         // alert([...cart,[item[0],listProducts.indexOf(item[0])]])
    //         // alert([listProducts.indexOf(item[0])])
    //         // setCart([...cart,(listProducts.sort().lastIndexOf(item[0])+1)-listProducts.sort().indexOf(item[0])])
    //         // alert([item[0],listProducts.indexOf(item[0])])
    //         // listProducts.indexOf(item[0])
    //         // if (listProducts.indexOf(item[0])!=-1){
    //             // setCart([...cart,item[0]])}
    //             })
    // },[listProducts])
    return(
        <div className="YourCart">
            <h3>Your Cart ({listProducts.length})</h3>
            {listProducts?(
                <div>
                    <div>
                        {listProducts.sort().map((item)=>(<p>{item}</p>))}
                    </div>
                <h4>Order Total</h4>
                <h5>$46.50</h5>
                <button>Confirm Order</button>
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