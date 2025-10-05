// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const CategoryPage = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate(); 
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://dummyjson.com/products/category/${slug}`)
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data.products || []);
//         setLoading(false);
//       })
//       .catch(err => console.error("Error loading products:", err));
//   }, [slug]);

//   return (
//     <div className="max-w-[1200px] mx-auto p-10">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2  bg-gray-400  text-white rounded hover:bg-red-500  transition"
//       >
//         ← Orqaga
//       </button>

//       <h1 className="text-4xl font-bold mb-8 capitalize">{slug}</h1>
//       {loading ? (
//         <p className="text-xl text-gray-500">Yuklanmoqda...</p>
//       ) : products.length === 0 ? (
//         <p>Bu kategoriya uchun mahsulotlar topilmadi.</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-8">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded-xl p-6 shadow hover:shadow-lg transition-all"
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-[250px] object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
//               <p className="text-gray-600 mb-3 line-clamp-2">{item.description}</p>
//               <p className="text-red-500 font-bold">{item.price}$</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setProducts(data.products || []);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error loading products:", err);
        setLoading(false);
      });

    return () => { isMounted = false };
  }, [slug]);

  return (
    <div className="max-w-[1200px] mx-auto p-10">
      <button
        onClick={() => navigate(-1 || "/")}
        className="mb-6 px-4 py-2 bg-gray-400 text-white rounded hover:bg-red-500 transition"
      >
        ← Orqaga
      </button>

      <h1 className="text-4xl font-bold mb-8 capitalize">{slug}</h1>

      {loading ? (
        <p className="text-xl text-gray-500">Yuklanmoqda...</p>
      ) : products.length === 0 ? (
        <p>Bu kategoriya uchun mahsulotlar topilmadi.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {products.map((item) => (
              <div className="w-64 bg-white  rounded-2xl  p-3 relative flex flex-col">
                                  {/* Yurak va statistika ikonkalar */}
                                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                                    
                                    <FaRegHeart className="w-5 h-5 text-gray-500" />
                                  </button>
                                  <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
                                    <BiBarChart className="w-5 h-5 text-gray-500" />
                                  </button>
                            
                                  {/* Rasm */}
                                  <img
                                    src={item.thumbnail}
                                    alt="Samsung Galaxy S25 Ultra"
                                    className="w-full rounded-xl object-contain mb-3 bg-base-200 h-full"
                                  />
                            
                                  {/* Title */}
                                  <h2 className="text-sm font-medium mb-2">{item.title}</h2>
                            
                                  {/* Narx */}
                                  <p className="text-xl font-bold">{item.price}<span className="text-sm">сум</span></p>
                                  <p className="bg-yellow-300 rounded-md text-sm px-2 py-1 w-max mt-1">
                                    1 629 000 сум x 12 мес
                                  </p>
                            
                                  {/* Pastki tugmalar */}
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
      )}
    </div>
  );
};

export default CategoryPage;
