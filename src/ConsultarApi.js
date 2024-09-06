// import { useState } from 'react'
// import { useEffect } from 'react'
// import './App.css'

// function App() {
//   const [product,setProduct] = useState([])
//   useEffect(()=>{
//     fetch("https://api.escuelajs.co/api/v1/products").then((res)=>res.json()).then((date)=>{console.log(date[1])
//       setProduct([date[1]])
//       // console.log((product[0]).images)
//     } 
//       )
//     .catch((erro)=>console.log(erro))
// },[])
//   return (
//     <>
//       {/* <p>{product[0].images}</p> */}
//       <img src={product[0].images[0]} alt="" width={100 }/>
//       <img src={product[0].images[1]} alt="" width={100 }/>
//       <img src={product[0].images[2]} alt="" width={100 }/>
//     </>
//   )
// }

// export default App
