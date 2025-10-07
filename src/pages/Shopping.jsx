import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";

const Shopping = () => {
  const [shop, setShop] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedShop = JSON.parse(localStorage.getItem("shop")) || [];
    setShop(storedShop);

    const storedCart = JSON.parse(localStorage.getItem("products")) || [];
    setCart(storedCart);
  }, []);

  // ❤️ Wishlist toggle
  const toggleHeart = (product) => {
    setShop(prev => {
      let updated;
      if (prev.some(item => item.id === product.id)) {
        updated = prev.filter(item => item.id !== product.id);
      } else {
        updated = [...prev, product];
      }
      localStorage.setItem("shop", JSON.stringify(updated));
      return updated;
    });
  };

  // 🛒 Savatcha toggle
  const toggleCart = (product) => {
    setCart(prev => {
      let updated;
      if (prev.some(item => item.id === product.id)) {
        updated = prev.filter(item => item.id !== product.id);
      } else {
        updated = [...prev, product];
      }
      localStorage.setItem("products", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {shop.map(p => (
        <div key={p.id} className="w-64 bg-white rounded-2xl p-3 relative flex flex-col">

          {/* ❤️ Heart toggle */}
          <button 
            onClick={() => toggleHeart(p)} 
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
          >
            <FaRegHeart 
              className={`w-5 h-5 ${shop.some(item => item.id === p.id) ? "text-red-500" : "text-gray-500"}`} 
            />
          </button>

          {/* 📊 Bar chart */}
          <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
            <BiBarChart className="w-5 h-5 text-gray-500" />
          </button>

          {/* 🖼️ Product image */}
          <img
            src={p.thumbnail}
            alt={p.title}
            className="w-full rounded-xl object-contain mb-3 bg-base-200 h-40"
          />

          <h2 className="text-sm font-medium mb-2">{p.title}</h2>

          <p className="text-xl font-bold">
            {p.price}<span className="text-sm"> сум</span>
          </p>
          <p className="bg-yellow-300 rounded-md text-sm px-2 py-1 w-max mt-1">
            1 629 000 сум x 12 мес
          </p>

          {/* Pastki tugmalar */}
          <div className="flex justify-between items-center gap-2 mt-3">
            {/* 🛒 Savatcha toggle */}
            <button 
              onClick={() => toggleCart(p)}     
              className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
            >
              <FaShoppingCart 
                className={`w-4 h-4 ${cart.some(item => item.id === p.id) ? "text-green-500" : "text-gray-500"}`} 
              />
            </button>

            <button className="flex-1 bg-red-600 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-700">
              В рассрочку
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shopping;
