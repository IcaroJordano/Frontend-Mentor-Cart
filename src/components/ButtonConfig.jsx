import { FaCartPlus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import "./ButtonConfig.css"

function ButtonConfig({check, setCheck, setColorBorder, setcountProducts, countProducts,listProducts, setlistProducts}) {
    const count=true
    check?setColorBorder(true):setColorBorder(false);
    return(
    <>
        {check?
        (<button className="false" >
            <IoMdRemoveCircleOutline onClick={()=>{
                setCheck(check-1)
                setcountProducts(countProducts-1)
                setlistProducts(listProducts.slice(0,listProducts.length-1))
                }} /> 
            <p>{check}</p>
            <IoAddCircleOutline onClick={()=>{
                setlistProducts([...listProducts,"product"])
                setCheck(check+1)
                setcountProducts(countProducts+1)
            }}/></button>):
        (<button className="true" onClick={()=>{ 
            setCheck(check+1)
            setcountProducts(countProducts+1)
            setlistProducts([...listProducts,"product"])

            }}>
            
             <FaCartPlus ></FaCartPlus>
             Add to Cart
        </button>)}
    </>
    )
}
export default ButtonConfig