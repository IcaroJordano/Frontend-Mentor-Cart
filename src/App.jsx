import './App.css'
import CardProducts from './components/CardProducts'
import image1 from "./images/image4.jpg"
import image2 from "./images/image8.jpg"
import image3 from "./images/image5.jpg"
import image4 from "./images/image6.jpg"
import image5 from "./images/image1.jpg"
import image6 from "./images/image2.jpg"
import image7 from "./images/image3.jpg"
import image8 from "./images/image9.jpg"
import image9 from "./images/image7.jpg"
import { YourCart } from './components/YourCart'
import { useState } from 'react'

function App() {
  const [countProducts, setcountProducts] = useState(0)
  const [listProducts, setlistProducts] = useState([])
  const images=[image1,image2,image3,image4,image5,image6,image7,image8,image9]
  return (
    <>
      <h1>Desserts</h1>
      {images.map((item)=>(
        <CardProducts setlistProducts={setlistProducts} listProducts={listProducts} image={item} countProducts={countProducts} setcountProducts={setcountProducts}></CardProducts>)
      )}
      <YourCart listProducts={listProducts} countProducts={countProducts}></YourCart>
    </>
  )
}

export default App
