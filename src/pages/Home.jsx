import React, { useEffect, useState } from 'react'
import MainSwiper from '../components/Swiper'
import Swayper2 from '../components/Swipertwo'
import Header from '../components/Header'
import Products from '../components/Products'
import HeaderNavbar from '../components/HeaderNavbar'
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";


const Home = () => {
  const [database , setdatabase] = useState([])
  const [basket , setbasket] = useState([])


const handledata = async () => {
  const getdata = await fetch('https://dummyjson.com/products')
  const datajson = await getdata.json()
  setdatabase(datajson.products)
}

useEffect(() => {
  
  handledata()


   const saved = JSON.parse(localStorage.getItem("products") || "[]")
    setbasket(saved)
},[])

const heartbasket = (e) => {
let update;
if(basket.some(item => item.id === e.id)) {
  update = basket.filter(item => item.id !== e.id);
} else {
  update = [...basket , e]
}
setbasket(update)
    localStorage.setItem("products", JSON.stringify(update));
}
  return (
    <div>

      <MainSwiper />
      <Swayper2 />
      <Products />
     <div className='max-w-[100%] w-[95%] mx-auto'>
       <div className='flex items-center flex-wrap gap-8 justify-center'>
        {database.slice(0, 10).map((e) => (
            <div key={e.id} className="w-64 bg-white rounded-2xl p-3 relative flex flex-col">
        
                  <button 
                    onClick={() => heartbasket(e)} 
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
                  >
                    <FaRegHeart 
                      className={`w-5 h-5 ${basket.some(item => item.id === e.id) ? "text-red-500" : "text-gray-500"}`} 
                    />
                  </button>
        
                  <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
                    <BiBarChart className="w-5 h-5 text-gray-500" />
                  </button>
            
                  <img
                    src={e.thumbnail}
                    alt={e.title}
                    className="w-full rounded-xl object-contain mb-3 bg-base-200 h-40"
                  />
            
                  <h2 className="text-sm font-medium mb-2">{e.title}</h2>
            
                  <p className="text-xl font-bold">
                    {e.price}<span className="text-sm"> сум</span>
                  </p>
                  <p className="bg-yellow-300 rounded-md text-sm px-2 py-1 w-max mt-1">
                    1 629 000 сум x 12 мес
                  </p>
            
                  <div className="flex justify-between items-center gap-2 mt-3">
                    <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
                      <FaShoppingCart className="w-4 h-4" />
                    </button>
                    <button className="flex-1 bg-red-600 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-700">
                      В рассрочку
                    </button>
                  </div>
                </div>
        ))}
        <div className='w-full'>
          <img className='w-full hover:object-cover rounded-2xl' src="https://olcha.uz/image/1440x302/homePage/cdn_1/2025-07-16/DvAmWwCXU8V2EDK0d3bFFo7YbIpfPT8euXbpAkSWU6PxaThfpP4GeGHfrLJN.jpg" alt="" />
        </div>
         {database.slice(10, 20).map((e) => (
            <div key={e.id} className="w-64 bg-white rounded-2xl p-3 relative flex flex-col">
        
                  <button 
                    onClick={() => heartbasket(e)} 
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
                  >
                    <FaRegHeart 
                      className={`w-5 h-5 ${basket.some(item => item.id === e.id) ? "text-red-500" : "text-gray-500"}`} 
                    />
                  </button>
        
                  <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
                    <BiBarChart className="w-5 h-5 text-gray-500" />
                  </button>
            
                  <img
                    src={e.thumbnail}
                    alt={e.title}
                    className="w-full rounded-xl object-contain mb-3 bg-base-200 h-40"
                  />
            
                  <h2 className="text-sm font-medium mb-2">{e.title}</h2>
            
                  <p className="text-xl font-bold">
                    {e.price}<span className="text-sm"> сум</span>
                  </p>
                  <p className="bg-yellow-300 rounded-md text-sm px-2 py-1 w-max mt-1">
                    1 629 000 сум x 12 мес
                  </p>
            
                  <div className="flex justify-between items-center gap-2 mt-3">
                    <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
                      <FaShoppingCart className="w-4 h-4" />
                    </button>
                    <button className="flex-1 bg-red-600 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-700">
                      В рассрочку
                    </button>
                  </div>
                </div>
        ))}
        <div className='w-full'>
          <img className='w-[100%] rounded-2xl hover:object-contain' src="https://olcha.uz/image/1440x302/homePage/cdn_1/2025-07-30/jRvSQq2QhdUCU8XjqZeMuymAFBTeCrWq5xqCqtZLCAYDA1yd4WHW5XPfFcAH.jpg" alt="" />
        </div>
            {database.slice(20, 30).map((e) => (
            <div key={e.id} className="w-64 bg-white rounded-2xl p-3 relative flex flex-col">
        
                  <button 
                    onClick={() => heartbasket(e)} 
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
                  >
                    <FaRegHeart 
                      className={`w-5 h-5 ${basket.some(item => item.id === e.id) ? "text-red-500" : "text-gray-500"}`} 
                    />
                  </button>
        
                  <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
                    <BiBarChart className="w-5 h-5 text-gray-500" />
                  </button>
            
                  <img
                    src={e.thumbnail}
                    alt={e.title}
                    className="w-full rounded-xl object-contain mb-3 bg-base-200 h-40"
                  />
            
                  <h2 className="text-sm font-medium mb-2">{e.title}</h2>
            
                  <p className="text-xl font-bold">
                    {e.price}<span className="text-sm"> сум</span>
                  </p>
                  <p className="bg-yellow-300 rounded-md text-sm px-2 py-1 w-max mt-1">
                    1 629 000 сум x 12 мес
                  </p>
            
                  <div className="flex justify-between items-center gap-2 mt-3">
                    <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
                      <FaShoppingCart className="w-4 h-4" />
                    </button>
                    <button className="flex-1 bg-red-600 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-700">
                      В рассрочку
                    </button>
                  </div>
                </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Home
