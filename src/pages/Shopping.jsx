import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

const Shopping = () => {
  const [shop, setShop] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper: har xil formatdagi price ni number ga aylantiradi
  const parsePrice = (price) => {
    if (price === null || price === undefined) return 0;
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      // barcha raqam bo'lmagan belgilarni olib tashlaymiz (bo'shliq, сум, comma, va hokazo)
      const cleaned = price.replace(/[^\d.-]/g, "");
      const num = Number(cleaned);
      return Number.isFinite(num) ? num : 0;
    }
    return 0;
  };

  useEffect(() => {
    const storedShop = JSON.parse(localStorage.getItem("shop")) || [];
    const storedCart = JSON.parse(localStorage.getItem("products")) || [];
    setShop(storedShop);
    setCart(storedCart);
  }, []);

  // Heart wishlist toggle (sening original logikaga mos)
  const toggleHeart = (product) => {
    setShop(prev => {
      const exists = prev.some(item => item.id === product.id);
      const updated = exists ? prev.filter(item => item.id !== product.id) : [...prev, product];
      localStorage.setItem("shop", JSON.stringify(updated));
      return updated;
    });
  };

  // Cart toggle
  const toggleCart = (product) => {
    setCart(prev => {
      const exists = prev.some(item => item.id === product.id);
      const updated = exists ? prev.filter(item => item.id !== product.id) : [...prev, product];
      localStorage.setItem("products", JSON.stringify(updated));
      return updated;
    });
  };

  // Umumiy summa (parsePrice bilan xavfsiz)
  const totalPrice = cart.reduce((sum, p) => sum + parsePrice(p.price), 0);

  // Checkout tugmasi -> modalni ochadi (agar cart bo'sh bo'lsa alert)
  const checkout = () => {
    if (cart.length === 0) {
      alert("Savatcha bo'sh!");
      return;
    }
    setIsModalOpen(true);
  };

  // Modalda tasdiqlash -> savatchani tozalaydi
const confirmOrder = () => {
  if (cart.length === 0) return;

  alert("Buyurtmangiz qabul qilindi!");

  // 1️⃣ cartdagi itemlarni shopdan ham o'chirish
  setShop(prevShop => {
    const updatedShop = prevShop.filter(item => !cart.some(c => c.id === item.id));
    localStorage.setItem("shop", JSON.stringify(updatedShop));
    return updatedShop;
  });

  // 2️⃣ cartni tozalash
  setCart([]);
  localStorage.setItem("products", JSON.stringify([]));

  // 3️⃣ modalni yopish
  setIsModalOpen(false);
};

  return (
    <div className='max-w-[100%] w-[95%] mx-auto p-5'>
      <div className="flex flex-wrap gap-5">
        {shop.length === 0 && (
          <p className="w-full text-center text-gray-500">Hozircha productlar yoʻq (localStorage: "shop").</p>
        )}

        {shop.map(p => (
          <div key={p.id} className="w-64 bg-white rounded-2xl p-3 relative flex flex-col shadow-md">
            {/* Heart */}
            <button 
              onClick={() => toggleHeart(p)} 
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
              aria-label="wishlist-toggle"
            >
              <TiDeleteOutline 
                className={`w-5 h-5 ${shop.some(item => item.id === p.id) ? "text-red-500" : "text-gray-400"}`} 
              />
            </button>

            {/* Chart icon */}
   
            {/* Image */}
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full rounded-xl object-contain mb-3 bg-base-200 h-40"
            />

            <h2 className="text-sm font-medium mb-2 truncate">{p.title}</h2>

            <p className="text-xl font-bold">
              {typeof p.price === "number" ? p.price.toLocaleString() : p.price} <span className="text-sm"> сум</span>
            </p>

            <p className="bg-yellow-300 rounded-md text-sm px-2 py-1 w-max mt-1">1 629 000 сум x 12 мес</p>

            <div className="flex justify-between items-center gap-2 mt-3">
              <button 
                onClick={() => toggleCart(p)}     
                className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                aria-label="cart-toggle"
              >
                <FaShoppingCart 
                  className={`w-4 h-4 ${cart.some(item => item.id === p.id) ? "text-green-500" : "text-gray-500"}`} 
                />
                <span className="ml-1 text-xs">
                  {cart.some(item => item.id === p.id) ? "buyurtmangiz qabul qilind" : "Buyurtma berish"}
                </span>
              </button>

              <button className="flex-1 ml-2 bg-red-600 text-white rounded-lg px-3 py-2 text-sm hover:bg-red-700">
                В рассрочку
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout button va minicart info */}
      <div className="fixed bottom-6  right-6">
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg">
          <div className="flex items-center gap-2">
            <FaShoppingCart className="w-5 h-5 text-gray-700" />
            <div>
              <div className="text-sm">Savatcha: <span className="font-semibold">{cart.length}</span></div>
              <div className="text-xs text-gray-500">Umumiy: <span className="font-semibold">{totalPrice.toLocaleString()} сум</span></div>
            </div>
          </div>
          <button
            onClick={checkout}
            className="ml-4 bg-red-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-red-700"
          >
            Buyurtmalarni rasmiylashtirish
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white border-1 rounded-lg w-11/12 max-w-xl p-5">
            <h3 className="text-xl font-bold mb-3">Sizning buyurtmangiz</h3>

            <div className="max-h-64 overflow-auto mb-4">
              {cart.map(p => (
                <div key={p.id} className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center gap-3">
                    <img src={p.thumbnail} alt={p.title} className="w-12 h-12 object-contain rounded" />
                    <div className="text-sm">
                      <div className="font-medium">{p.title}</div>
                      <div className="text-xs text-gray-500">{typeof p.price === "number" ? p.price.toLocaleString() : p.price} сум</div>
                    </div>
                  </div>
                  <div className="font-medium">{parsePrice(p.price).toLocaleString()} сум</div>
                </div>
              ))}

              {cart.length === 0 && (
                <p className="text-center text-gray-500 py-4">Savatcha bo'sh.</p>
              )}
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">Jami:</div>
              <div className="text-lg font-bold">{totalPrice.toLocaleString()} сум</div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Bekor qilish
              </button>
              <button
                onClick={confirmOrder}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
