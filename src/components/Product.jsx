import React from "react"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const Product = ()=>{
    const[products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())

        .then((data)=>{
            setProducts(data)
        })

        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16">
        <div className="bg-white p-8 text-center shadow rounded-lg">
        <h1 className="text-5xl font-bold">Redux App</h1>
        <p className="text-gray-600 mt-2 text-lg">Click on any product to test your redux app</p>
        </div>
        <div className='w-10/12 mx-auto bg-white rounded-lg shadow p-8 my-12'>
          <div className="grid grid-cols-4 gap-8">
            {
              products.map((item,index)=>(
                <div key={index} className="shadow-lg rounded-lg border p-6 flex flex-col gap-3">
                        <img src={item.image}
                        className="w-full h-[250px] object-cover"
                        />
                        <h1 className="font-semibold text-lg">{item.title}</h1>
                        <label>Rs{item.price}</label>
                        <Link to="/product-details" className="text-center text-white font-medium bg-green-500 rounded-md px-4 py-2">View Details</Link>
                </div>
              ))
            }
          </div>
        </div>
        </div>
    )
}
export default Product