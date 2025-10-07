
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const articles = [
  {
    id: 1,
    title: "Подарки для любимых учителей!",
    date: "01.10.2022 10:30:48",
    views: 2495,
    excerpt:
      "1 октября отмечается как День учителей и наставников. Итак, прежде мы поговорим о подходящих подарках.",
    img: "https://olcha.uz/uploads/338x184/blogs/images/y7Go91KaGcTXy5P2MKay0V4HkoP4FmoylYWbil4n.png",
  },
  {
    id: 2,
    title: "Духи для властных мужчин и очаровательных женщин!",
    date: "30.09.2022 15:41:40",
    views: 1858,
    excerpt:
      "Духи Master Premium очаруют ваших близких. Узнайте, как выбрать идеальный аромат.",
    img: "https://olcha.uz/uploads/338x184/blogs/images/FtZIW8gguyBhhaDJVqb7VSYfG6YWQY5IBaKXzKx8.png",
  },
  {
    id: 3,
    title: "Безопасность детей при вождении автомобиля!",
    date: "30.09.2022 15:36:31",
    views: 1202,
    excerpt:
      "Компания заботится о детях. Ведь безопасность — самое главное в поездках.",
    img: "https://olcha.uz/uploads/338x184/blogs/images/x9umEme0ea4IQrcFhDotxHKvRMh118JLKvF7wUMI.png",
  },
  {
    id: 4,
    title: "Как предотвратить ожирение?",
    date: "24.09.2022 07:59:41",
    views: 1426,
    excerpt:
      "К причинам ожирения относятся: депрессия, гормональные сбои, стресс и неправильное питание.",
    img: "https://olcha.uz/uploads/338x184/blogs/images/IPHYTKa5jhB6Z6vsAvVZQjb9CWG5hTR6KOpQmbIT.jpeg",
  },
  {
    id: 5,
    title: "Бренд №1 среди ноутбуков!",
    date: "13.09.2022 09:50:31",
    views: 1777,
    excerpt:
      "Бренд №1 среди ноутбуков!&nbsp; &nbsp; Наряду с презентацией айфонов и смарт-часов Apple также представила макбук",
    img: "https://olcha.uz/uploads/338x184/blogs/images/ALSgUiAhIqaMOm2rVG5ERjG8P0kglGFblzX9Uw6V.png",
  },
  {
    id: 6,
    title: "5 лучших кухонных девайсов года",
    date: "18.09.2022 13:14:30",
    views: 1570,
    excerpt:
      "Сравнение популярных кухонных девайсов 2022 года — выбираем лучшие!",
    img:"https://olcha.uz/uploads/338x184/blogs/images/IPHYTKa5jhB6Z6vsAvVZQjb9CWG5hTR6KOpQmbIT.jpeg",
  },
  {
    id: 7,
    title: "Какую видеокарту выбрать для работы с фото и видео?",
    date: "10.09.2022 11:41:10",
    views: 2104,
    excerpt:
      "Разбираемся, на что обратить внимание при выборе современного телевизора.",
    img: "https://olcha.uz/uploads/338x184/blogs/images/yR6TZb0v7eiVodYrXM0zqeprRtl6xSeqrkuDYGlS.png",
  },

];

export default function News() {
  return (
    <div className="max-w-[100%] w-[95%] mx-auto px-6 py-10">
   
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold">Новости</h2>
        <a href="#" className="text-sm text-rose-600 hover:underline">
          Посмотреть все →
        </a>
      </div>




     
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 2500, // время между слайдами
          disableOnInteraction: false, // не останавливать при взаимодействии
        }}
        speed={900} // плавность анимации
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-6"
      >
        {articles.map((a) => (
          <SwiperSlide key={a.id}>
            <article className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={a.img}
                alt={a.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-400 gap-3 mb-2">
                  <span>{a.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2V7z" />
                    </svg>
                    {a.views}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.excerpt}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>


      <section className="mt-12">
        <h1 className="text-4xl font-extrabold mb-4">
          Маркетплейс - Olcha удобный гипермаркет для покупок
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Комфортную жизнь любого человека и удобный быт невозможно представить
          без современной техники. Рабочие и личные вопросы — в смартфоне,
          любимые фильмы и сериалы — телевизор, уборка — пылесос, готовка —
          плита, духовка и множество других полезных девайсов.
        </p>

        <h2 className="text-3xl font-extrabold mt-8 mb-4">
          Где покупать технику в Узбекистане?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Точек для приобретения электроники в стране немало, но важно, чтобы
          клиенту подходил ассортимент, цена, условия заказа. Что предлагаем мы:
        </p>
        <a href="#" className="inline-block mt-4 text-rose-600 font-medium">
          Показать все
        </a>
      </section>
    </div>
  );
}