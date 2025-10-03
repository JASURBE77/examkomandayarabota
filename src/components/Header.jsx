import React from 'react';

export default function Header() {
  return (
    <header className="w-full font-sans select-none">
      {/* Top banner */}
      <div className="olcha-pattern bg-[#e01236]">
        <div className="max-w-[100%] w-[95%] mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[28px] leading-[1] font-extrabold text-white tracking-tight">
              Предложение от <span className="font-black">Olcha</span>
            </h2>
          </div>


          <div className="text-white text-[34px] font-extrabold tracking-tight">Всё дешевле</div>
          <div>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold shadow-[0_6px_0_rgba(0,0,0,0.08)] transition transform hover:bg-white hover:text-[#d80b2a] hover:-translate-y-0.5 hover:scale-105">
              Начать покупку
            </button>
          </div>
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="bg-[#c60b27]">
        <div className="max-w-[100%] w-[95%] mx-auto flex items-center justify-between px-6 py-3">
          {/* left buttons - initially transparent, become white on hover */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-transparent border border-transparent text-white text-sm font-semibold transform transition hover:bg-white hover:text-[#d80b2a] hover:scale-105">
              0% Рассрочка
            </button>

            <button className="px-4 py-2 rounded-md bg-transparent border border-white text-white text-sm font-semibold transform transition hover:bg-white hover:text-[#d80b2a] hover:scale-105">
              Скидки
            </button>

            <button className="px-4 py-2 rounded-md bg-transparent border border-transparent text-white text-sm font-semibold transform transition hover:bg-white hover:text-[#d80b2a] hover:scale-105">
              Розыгрыши
            </button>

            <button className="px-4 py-2 rounded-md bg-transparent border border-transparent text-white text-sm font-semibold transform transition hover:bg-white hover:text-[#d80b2a] hover:scale-105">
              Карта сайта
            </button>
          </div>

          {/* center phone */}

          {/* right side */}
          <div className="flex items-center gap-4">
          <div className="text-white font-bold text-lg">+998 (71) 202 202 1</div>
            <button className="px-4 py-2 rounded-md bg-transparent border border-white text-white text-sm font-semibold transform transition hover:bg-white hover:text-[#d80b2a] hover:scale-105">
              Продавайте на olcha
            </button>

            <div className="flex items-center border-l border-white pl-4 gap-3 text-white font-semibold">
              <span className="cursor-pointer hover:underline">Ўзб</span>
              <span className="cursor-pointer hover:underline">O'z</span>
              <span className="cursor-pointer underline">Рус</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
