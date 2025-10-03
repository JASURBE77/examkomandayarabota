import React, { useEffect, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const MainSwiper = () => {
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState({ hours: 10, minutes: 45, seconds: 29 });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("API xato:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex max-w-[100%] w-[95%]  mx-auto mt-10 space-x-4">
      {/* Chap taraf swiper */}
      <div className="w-3/4">
        <SwiperComponent
          navigation
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper rounded-xl overflow-hidden"
        >
          {products.map((prod) => (
            <SwiperSlide key={prod.id}>
              <div className="relative">
                <img
                  src={prod.images && prod.images.length > 0 ? prod.images[0] : ""}
                  alt={prod.title}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded">
                  -{Math.round(prod.discountPercentage)}%
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded text-right">
                  <div className="line-through text-gray-500 text-sm">
                    {prod.price} USD
                  </div>
                  <div className="font-bold text-xl text-red-600">
                    {Math.round(prod.price * (1 - prod.discountPercentage / 100))} USD
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>

      {/* O‘ng taraf timer */}
      <div className="w-1/4">
        <div className="border-2 border-red-500 rounded-xl p-6 h-[350px] flex flex-col justify-start">
          <h2 className="font-bold text-lg mb-6">Товар дня</h2>
          <div className="flex justify-center space-x-2 text-2xl font-bold">
            <div className="px-3 py-1 border rounded">
              {String(time.hours).padStart(2, "0")}
            </div>
            <div>:</div>
            <div className="px-3 py-1 border rounded">
              {String(time.minutes).padStart(2, "0")}
            </div>
            <div>:</div>
            <div className="px-3 py-1 border rounded">
              {String(time.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSwiper;
