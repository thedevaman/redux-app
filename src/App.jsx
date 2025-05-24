import store from "./redux/store"; 
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

const App = ()=>{
  return(
    <Provider store={store}>
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/product" element = {<Product/>} />
      <Route path="/product-details" element = {<ProductDetail/>}/>
     </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App

//to install redux run command  "npm insatall @reduxjs/toolkit react-redux"
//and then create a configure file by "src/redux/store.js" write configuration code here