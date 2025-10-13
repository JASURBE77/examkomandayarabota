import React from "react";
import ProductCard from "../components/Productsfikte";

import products from "../components/product";

export default function Skidka() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">olcha</h1>
        <input
          type="text"
          placeholder="Поиск по каталогу"
          className="border rounded-lg px-4 py-2 w-1/3 focus:outline-none"
        />
        <div className="flex gap-6 text-gray-600">
          <span>Войти</span>
          <span>Корзина 🛒</span>
        </div>
      </header>

      {/* Katalog */}
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Популярные товары</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
// import { BiBarChart } from "react-icons/bi";

// const Skidka = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortType, setSortType] = useState("popularity");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showInput, setShowInput] = useState(false);
//   const [inputPage, setInputPage] = useState("");

//   const productsPerPage = 8;


//   const generateDiscounts = (products) => {
//     return products.map((item) => ({
//       ...item,
//       discountPercentage: Math.floor(Math.random() * 30) + 10,
//     }));
//   };

//   useEffect(() => {
//     fetch("https://dummyjson.com/products?limit=100")
//       .then((res) => res.json())
//       .then((data) => {
//         const discounted = generateDiscounts(data.products);
//         setProducts(discounted);
//         setLoading(false);
//       });

//     const savedFav = JSON.parse(localStorage.getItem("products")) ||  [];
//     const savedCart = JSON.parse(localStorage.getItem("shop")) || [];
//     setFavorites(savedFav);
//     setCart(savedCart);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProducts((prev) => generateDiscounts(prev));
//     }, 3600000);
//     return () => clearInterval(interval);
//   }, []);


//   const handleSort = (type) => {
//     setSortType(type);
//     let sorted = [...products];
//     if (type === "price_low") sorted.sort((a, b) => a.price - b.price);
//     if (type === "price_high") sorted.sort((a, b) => b.price - a.price);
//     if (type === "discount")
//       sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
//     setProducts(sorted);
//   };


//   const toggleFavorite = (product) => {
//     let updated;
//     if (favorites.some((item) => item.id === product.id)) {
//       updated = favorites.filter((item) => item.id !== product.id);
//     } else {
//       updated = [...favorites, product];
//     }
//     setFavorites(updated);
//     localStorage.setItem("products", JSON.stringify(updated));
//   };


//   const toggleCart = (product) => {
//     let updated;
//     if (cart.some((item) => item.id === product.id)) {
//       updated = cart.filter((item) => item.id !== product.id);
//     } else {
//       updated = [...cart, product];
//     }
//     setCart(updated);
//     localStorage.setItem("shop", JSON.stringify(updated));
//   };

//   const totalPages = Math.ceil(products.length / productsPerPage);
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const handlePageSubmit = () => {
//     const pageNum = Number(inputPage);
//     if (pageNum >= 1 && pageNum <= totalPages) {
//       setCurrentPage(pageNum);
//       setShowInput(false);
//       setInputPage("");
//     } else {
//       alert("Bunday sahifa yo‘q!");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[50vh] text-lg font-semibold text-gray-600">
//         Загрузка скидок...
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-50 font-sans pb-20">
      


//       <div className="max-w-[1200px] mx-auto mt-10 flex flex-wrap items-center justify-between gap-4 px-4">
//         <select
//           onChange={(e) => handleSort(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e01236] cursor-pointer"
//         >
//           <option value="popularity">Популярности</option>
//           <option value="price_low">По возрастанию цены</option>
//           <option value="price_high">По убыванию цены</option>
//           <option value="discount">По скидке</option>
//         </select>

// M, [07.10.2025 17:32]
// <div className="flex items-center gap-2 justify-center">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => p - 1)}
//             className={`text-[#e01236] text-lg font-bold ${
//               currentPage === 1
//                 ? "opacity-40 cursor-not-allowed"
//                 : "hover:scale-110 transition"
//             }`}
//           >
//             ‹
//           </button>

//           {(() => {
//             const pagesToShow = 5;
//             let start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
//             let end = start + pagesToShow - 1;
//             if (end > totalPages) {
//               end = totalPages;
//               start = Math.max(1, end - pagesToShow + 1);
//             }
//             const visiblePages = [];
//             for (let i = start; i <= end; i++) visiblePages.push(i);
//             return visiblePages.map((num) => (
//               <button
//                 key={num}
//                 onClick={() => setCurrentPage(num)}
//                 className={`px-3 py-1 border rounded-md ${
//                   currentPage === num
//                     ? "bg-black text-white"
//                     : "bg-white text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 {num}
//               </button>
//             ));
//           })()}

//           {/* ... tugmasi o‘rniga yozish joyi */}
//           {showInput ? (
//             <input
//               type="number"
//               value={inputPage}
//               onChange={(e) => setInputPage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handlePageSubmit()}
//               onBlur={handlePageSubmit}
//               placeholder="№"
//               className="w-14 border border-gray-300 rounded-md text-center outline-none"
//               autoFocus
//             />
//           ) : (
//             <button
//               onClick={() => setShowInput(true)}
//               className="px-2 text-gray-500 hover:text-black text-lg"
//             >
//               ...
//             </button>
//           )}

//           <button
//             onClick={() => setCurrentPage(totalPages)}
//             className={`px-3 py-1 border rounded-md ${
//               currentPage === totalPages
//                 ? "bg-black text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             {totalPages}
//           </button>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => p + 1)}
//             className={`text-[#e01236] text-lg font-bold ${
//               currentPage === totalPages
//                 ? "opacity-40 cursor-not-allowed"
//                 : "hover:scale-110 transition"
//             }`}
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
//         {currentProducts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition relative"
//           >
//             <div className="absolute top-3 left-3 bg-[#e01236] text-white text-xs font-semibold px-2 py-1 rounded">
//               -{item.discountPercentage}%
//             </div>

//             <button
//               onClick={() => toggleFavorite(item)}
//               className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
//             >
//               <FaRegHeart
//                 className={`w-5 h-5 ${
//                   favorites.some((f) => f.id === item.id)
//                     ? "text-red-500"
//                     : "text-gray-500"
//                 }`}
//               />
//             </button>
//             <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
//               <BiBarChart className="w-5 h-5 text-gray-500" />
//             </button>

//             <img
//               src={item.thumbnail}
//               alt={item.title}
//               className="w-full h-40 object-contain mb-3"
//             />

// M, [07.10.2025 17:32]
// <h4 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-1">
//               {item.title}
//             </h4>
//             <p className="text-gray-500 text-sm mb-2 line-clamp-2">
//               {item.description}
//             </p>

//             <div className="flex items-center gap-2">
//               <span className="text-[#e01236] font-bold text-lg">
//                 $
//                 {(
//                   item.price -
//                   (item.price * item.discountPercentage) / 100
//                 ).toFixed(2)}
//               </span>
//               <span className="line-through text-gray-400 text-sm">
//                 ${item.price}
//               </span>
//             </div>

//             <div className="flex justify-between items-center gap-2 mt-3">
//               <button
//                 onClick={() => toggleCart(item)}
//                 className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
//               >
//                 <FaShoppingCart
//                   className={`w-4 h-4 ${
//                     cart.some((c) => c.id === item.id)
//                       ? "text-red-500"
//                       : "text-gray-500"
//                   }`}
//                 />
//               </button>
//               <button className="flex-1 bg-red-600 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-700">
//                 В рассрочку
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skidka;
  