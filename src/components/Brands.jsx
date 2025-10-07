import React from "react";
import Applelogo from '../assets/apple.png'
export default function Brands() {
  const brands = [
    { name: "Apple", logo: Applelogo },
    { name: "Samsung", logo: "/assets/samsung.png" },
    { name: "Sony", logo: "/assets/sony.png" },
    { name: "Xiaomi", logo: "/assets/xiaomi.png" },
    { name: "Versace", logo: "/assets/versace.png" },
    { name: "Instagram", logo: "/assets/instagram.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Popular Brands</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center shadow-lg shadow-gray-800 hover:shadow-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}