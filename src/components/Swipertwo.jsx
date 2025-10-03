import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Swayper2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=20");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Xatolik:", err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="relative max-w-[100%] w-[95%] mx-auto py-6">
      <Swiper
        spaceBetween={20}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="pb-10"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center border-2 border-red-500 rounded-full">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-28 h-28 object-contain rounded-full"
                />
              </div>
              <h3 className="font-medium text-sm mt-2 w-[100px] line-clamp-2">
                {p.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔽 Swiper default prev/next tugmalarini style qilish */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 20px;
          height: 20px;
          padding:5px 5px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          color: #ef4444; /* red-500 */
          font-size: 18px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px; /* strelkani kichraytiradi */
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Swayper2;