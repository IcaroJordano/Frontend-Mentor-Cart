import { FaCartPlus } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import "./ButtonConfig.css"

function ButtonConfig({check, name, setCheck, setColorBorder,listProducts, setlistProducts}) {
    check?setColorBorder(true):setColorBorder(false);
    let lista=listProducts
    return(
    <>
        {check?
        (<button className="false" >
            <IoMdRemoveCircleOutline onClick={()=>{
                setCheck(check-1)
                lista.splice((lista.lastIndexOf(name)),1)
                setlistProducts([...lista])
                }} /> 
            <p>{check}</p>
            <IoAddCircleOutline onClick={()=>{
                setlistProducts([...listProducts,`${name}`])
                setCheck(check+1)
            }}/></button>):
        (<button className="true" onClick={()=>{ 
            setCheck(check+1)
            setlistProducts([...listProducts,`${name}`])
            }}>
            
             <FaCartPlus ></FaCartPlus>
             Add to Cart
        </button>)}
    </>
    )
}
export default ButtonConfig