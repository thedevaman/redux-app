import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

const App = ()=>{
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/product" element = {<Product/>} />
      <Route path="/product-details" element = {<ProductDetail/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App