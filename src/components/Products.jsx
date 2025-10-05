// // Said, [03.10.2025 20:16]
// import React from "react";

// const products = [
//   {
//     id: 1,
//     name: "Samsung Galaxy A17 Gray 8/256 GB",
//     oldPrice: "3 460 000",
//     price: "2 760 000",
//     discount: "-21%",
//     installment: "324 000 сум x 12 мес",
//     image: "/images/image1.jpg",
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy A17 Light Blue 8/256 GB",
//     oldPrice: "3 460 000",
//     price: "2 760 000",
//     discount: "-21%",
//     installment: "324 000 сум x 12 мес",
//     image: "/images/image2.jpg",
//   },
//   {
//     id: 3,
//     name: "Samsung Galaxy A17 Light Blue 6/128 GB",
//     oldPrice: "2 953 000",
//     price: "2 253 000",
//     discount: "-24%",
//     installment: "264 000 сум x 12 мес",
//     image: "/images/image3.jpg",
//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy A17 Black 8/256 GB",
//     oldPrice: "3 460 000",
//     price: "2 760 000",
//     discount: "-21%",
//     installment: "324 000 сум x 12 мес",
//     image: "/images/image1.jpg",
//   },
//   {
//     id: 5,
//     name: "Samsung Galaxy A17 Black 6/128 GB",
//     oldPrice: "2 953 000",
//     price: "2 253 000",
//     discount: "-24%",
//     installment: "264 000 сум x 12 мес",
//     image: "/images/image2.jpg",
//   },
//   {
//     id: 6,
//     name: "Samsung Galaxy A17 Gray 6/128 GB",
//     oldPrice: "2 953 000",
//     price: "2 253 000",
//     discount: "-24%",
//     installment: "264 000 сум x 12 мес",
//     image: "/images/image3.jpg",
//   },
// ];

// export default function App() {
//   return (
//     <div className="min-h-screen bg-white flex justify-center py-10 px-4 font-[Arial,sans-serif]">
//       <div className="relative w-full max-w-[1600px]">
//         <div
//           style={{
//             border: "8px solid #F11D3A",
//             borderRadius: "16px",
//             overflow: "hidden",
//           }}
//         >
//           <style>{`
//             .products-grid {
//               display: grid;
//               grid-template-columns: 1fr;
//             }
//             @media (min-width:1024px){
//               .products-grid {
//                 grid-template-columns: 480px repeat(4,1fr);
//                 grid-template-rows: 260px 260px;
//               }
//             }
//             .product-cell {
//               box-sizing:border-box;
//               position:relative;
//               background:white;
//               border-bottom:8px solid #F11D3A;
//               transition:all .3s ease;
//             }
//             .product-cell:hover{
//               box-shadow:0 6px 12px rgba(0,0,0,0.15);
//               transform:translateY(-2px);
//             }
//             .products-grid> .product-cell:nth-last-child(-n+5){
//               border-bottom:none;
//             }
//             .product-cell.top-left{
//               border-bottom:none;
//             }
//             .product-cell.bottom-left{
//               border-top:8px solid #F11D3A;
//             }
//           `}</style>

//           <div className="products-grid">
//             {products.map((p, i) => {
//               const gridStyle = {};
//               if (i === 0) {
//                 gridStyle.gridColumn = "1 / 2";
//                 gridStyle.gridRow = "1 / 2";
//               } else if (i === 5) {
//                 gridStyle.gridColumn = "1 / 2";
//                 gridStyle.gridRow = "2 / 3";
//               } else {
//                 const col = 2 + (i - 1);
//                 gridStyle.gridColumn = `${col} / ${col + 1}`;
//                 gridStyle.gridRow = "1 / 2";
//               }

//               const classes = ["product-cell"];
//               if (i === 0) classes.push("top-left");
//               if (i === 5) classes.push("bottom-left");

//               return (
//                 <div
//                   key={p.id}
//                   className={`${classes.join(" ")} relative`}
//                   style={gridStyle}
//                 >
//                   {/* Вертикальная красная линия */}
//                   {(i === 0  i === 5  (i % 5 !== 4)) && (
//                     <div className="absolute top-0 bottom-0 right-0 w-[8px] h-150 bg-[#F11D3A]"></div>
//                   )}

//                   {/* бейдж скидки */}
//                   <div className="absolute top-3 left-3 bg-[#F11D3A] text-white text-sm font-semibold rounded px-3 py-1">
//                     {p.discount}
//                   </div>

// Said, [03.10.2025 20:16]
// {/* горизонтальная карточка */}
//                   {(i === 0 || i === 5) && (
//                     <div className="flex items-center h-full p-5">
//                       <div className="w-[48%] flex justify-center">
//                         <img
//                           src={p.image}
//                           alt={p.name}
//                           className="h-[190px] object-contain select-none"
//                         />
//                       </div>
//                       <div className="w-[52%] pl-6 flex flex-col justify-center">
//                         <h3 className="text-[18px] font-normal text-gray-800 leading-snug">
//                           {p.name}
//                         </h3>
//                         <p className="text-[15px] text-gray-400 line-through mt-1">
//                           {p.oldPrice} сум
//                         </p>
//                         <p className="text-[26px] font-bold text-[#F11D3A] mt-1">
//                           {p.price} сум
//                         </p>
//                         <div className="bg-[#FFD600] text-gray-900 text-[15px] font-medium rounded px-3 py-1 mt-2 inline-block">
//                           {p.installment}
//                         </div>
//                         <button className="mt-4 self-start border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[15px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
//                           В рассрочку
//                         </button>
//                         <button className="mt-2 self-start border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[15px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
//                           Корзина
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* вертикальные карточки */}
//                   {i !== 0 && i !== 5 && (
//                     <div className="flex flex-col h-full p-4">
//                       <div className="flex justify-center items-center mt-3 mb-3">
//                         <img
//                           src={p.image}
//                           alt={p.name}
//                           className="h-[210px] object-contain select-none"
//                         />
//                       </div>
//                       <h3 className="text-[16px] font-normal text-gray-800 leading-snug h-[46px]">
//                         {p.name}
//                       </h3>
//                       <p className="text-[14px] text-gray-400 line-through mt-1">
//                         {p.oldPrice} сум
//                       </p>
//                       <p className="text-[22px] font-bold text-[#F11D3A] mt-1">
//                         {p.price} сум
//                       </p>
//                       <div className="bg-[#FFD600] text-gray-900 text-[14px] font-medium rounded px-3 py-1 mt-2 inline-block">
//                         {p.installment}
//                       </div>
//                       <br />
//                       <button className="mt-auto border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[14px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
//                         В рассрочку
//                       </button>
//                       <button className="mt-2 border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[14px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
//                         Корзина
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=6')
      const data = await res.json()
      setProducts(data.products)
    } catch (err) {
      console.error("API xatolik:", err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-white flex justify-center py-10 px-4 font-[Arial,sans-serif]">
      <div className="relative max-w-[100%] w-[95%] mx-auto">
        <div
          style={{
            border: "8px solid #F11D3A",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <style>{`
            .products-grid {
              display: grid;
              grid-template-columns: 1fr;
            }
            @media (min-width:1024px){
              .products-grid {
                grid-template-columns: 480px repeat(4,1fr);
                grid-template-rows: 260px 260px;
              }
            }
            .product-cell {
              box-sizing:border-box;
              position:relative;
              background:white;
              border-bottom:8px solid #F11D3A;
              transition:all .3s ease;
            }
            .product-cell:hover{
              box-shadow:0 6px 12px rgba(0,0,0,0.15);
              transform:translateY(-2px);
            }
            .products-grid> .product-cell:nth-last-child(-n+5){
              border-bottom:none;
            }
            .product-cell.top-left{
              border-bottom:none;
            }
            .product-cell.bottom-left{
              border-top:8px solid #F11D3A;
            }
          `}</style>

          <div className="products-grid">
            {products.map((p, i) => {
              const gridStyle = {}
              if (i === 0) {
                gridStyle.gridColumn = "1 / 2"
                gridStyle.gridRow = "1 / 2"
              } else if (i === 5) {
                gridStyle.gridColumn = "1 / 2"
                gridStyle.gridRow = "2 / 3"
              } else {
                const col = 2 + (i - 1)
                gridStyle.gridColumn = `${col} / ${col + 1}`
                gridStyle.gridRow = "1 / 2"
              }

              const classes = ["product-cell"]
              if (i === 0) classes.push("top-left")
              if (i === 5) classes.push("bottom-left")

              // hisoblashlar
              const oldPrice = Math.round(p.price / (1 - p.discountPercentage / 100))
              const installment = `${Math.round(p.price / 12)} сум x 12 мес`

              return (
                <div
                  key={p.id}
                  className={`${classes.join(" ")} relative`}
                  style={gridStyle}
                >
                  {/* скидка badge */}
                  <div className="absolute top-3 left-3 bg-[#F11D3A] text-white text-sm font-semibold rounded px-3 py-1">
                    -{Math.round(p.discountPercentage)}%
                  </div>

                  {/* горизонтальные карточки */}
                  {(i === 0 || i === 5) ? (
                    <div className="flex items-center h-full p-5">
                      <div className="w-[48%] flex justify-center">
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="h-[190px] object-contain select-none"
                        />
                      </div>
                      <div className="w-[52%] pl-6 flex flex-col justify-center">
                        <h3 className="text-[18px] font-normal text-gray-800 leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-[15px] text-gray-400 line-through mt-1">
                          {oldPrice.toLocaleString()} сум
                        </p>
                        <p className="text-[26px] font-bold text-[#F11D3A] mt-1">
                          {p.price.toLocaleString()} сум
                        </p>
                        <div className="bg-[#FFD600] text-gray-900 text-[15px] font-medium rounded px-3 py-1 mt-2 inline-block">
                          {installment}
                        </div>
                        <button className="mt-4 self-start border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[15px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
                          В рассрочку
                        </button>
                        <button className="mt-2 self-start border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[15px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
                          Корзина
                        </button>
                      </div>
                    </div>
                    
                    
                  ) : (
                    
                    // вертикальные карточки
                    <div className="flex flex-col h-full p-4">
                      <div className="flex justify-center items-center mt-3 mb-3">
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="h-[210px] object-contain select-none"
                        />
                      </div>
                      <h3 className="text-[16px] font-normal text-gray-800 leading-snug h-[46px]">
                        {p.title}
                      </h3>
                      <p className="text-[14px] text-gray-400 line-through mt-1">
                        {oldPrice.toLocaleString()} сум
                      </p>
                      <p className="text-[22px] font-bold text-[#F11D3A] mt-1">
                        {p.price.toLocaleString()} сум
                      </p>
                      <div className="bg-[#FFD600] text-gray-900 text-[14px] font-medium rounded px-3 py-1 mt-2 inline-block">
                        {installment}
                      </div>
                      <br />
                      <button className="mt-auto border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[14px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
                        В рассрочку
                      </button>
                      <button className="mt-2 border-2 border-[#F11D3A] text-[#F11D3A] rounded-md text-[14px] font-medium px-4 py-2 hover:bg-[#F11D3A] hover:text-white transition-colors">
                        Корзина
                      </button>
                    </div>
                    
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Products
