import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaApple, FaGooglePlay } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaUniversity, FaWallet, FaCreditCard, FaMoneyBillWave, FaApplePay } from "react-icons/fa";

const Footer = () => {
    const paymentIcons = [
        { icon: <FaUniversity className="w-8 h-8 text-blue-600" />, alt: "Uzum Bank" },
        { icon: <FaWallet className="w-8 h-8 text-purple-600" />, alt: "Plum" },
        { icon: <FaCreditCard className="w-8 h-8 text-red-600" />, alt: "CLICK" },
        { icon: <FaMoneyBillWave className="w-8 h-8 text-green-500" />, alt: "Payme" },
        { icon: <FaApplePay className="w-8 h-8 text-gray-800" />, alt: "HUMO" },
        { icon: <FaWallet className="w-8 h-8 text-indigo-500" />, alt: "PAYNET" },
    ];

    return (
        <footer className="bg-gray-100 mt-10">
            {/* Upper part */}
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
                {/* Left text */}
                <div className="text-center md:text-left md:flex-1">
                    <p className="font-semibold text-black mb-4">
                        Наше мобильное приложение доступно <br />
                        в AppGallery, App store и Google Play
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        {/* App download buttons */}
                        <a
                            href="#"
                            className="inline-block bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 hover:bg-gray-200 transition"
                        >
                            <FaApple className="w-6 h-6" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-semibold">Download on the</span>
                                <span className="font-bold">App Store</span>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="inline-block bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 hover:bg-gray-200 transition"
                        >
                            <FaGooglePlay className="w-6 h-6" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-semibold">GET IT ON</span>
                                <span className="font-bold">Google Play</span>
                            </div>
                        </a>
                        {/* AppGallery with image */}
                        <a
                            href="#"
                            className="inline-block bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 hover:bg-gray-200 transition"
                        >
                            <img
                                src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/mobileservices/new-2022/images/kv/huawei-smart-office-scene-picture-icon-1.png"
                                alt="AppGallery"
                                className="w-6 h-6"
                            />
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-semibold">EXPLORE IT ON</span>
                                <span className="font-bold">AppGallery</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right image (Olcha app phones) */}
                <div className="flex justify-center md:flex-1">
                    <img
                        src="https://olcha.uz/_nuxt/footer-img.DPkm53ka.png"
                        alt="Olcha app phones"
                        className="max-w-[300px] md:max-w-[400px] object-contain"
                    />
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* Lower part */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
                {/* Left contact */}
                <div className="md:flex-1">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">olcha</h1>
                    <p className="flex items-center gap-2 mb-1">
                        <FiPhone className="w-5 h-5 text-red-600" />
                        Телефон поддержки
                    </p>
                    <p className="font-semibold mb-2">+998 (71) 202 202 1</p>
                    <p className="flex items-center gap-2 text-gray-600 mb-1">
                        <FiMapPin className="w-5 h-5 text-red-600" />
                        Козитарнов, Ташкент
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                        <FiMail className="w-5 h-5 text-red-600" />
                        info@olcha.uz
                    </p>
                </div>

                {/* Middle Information */}
                <div className="md:flex-1 grid grid-cols-2 md:grid-cols-1 gap-4 text-gray-800">
                    <div>
                        <h2 className="text-red-600 font-semibold mb-3">Информация</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">О компании</a></li>
                            <li><a href="#" className="hover:underline">Вакансии</a></li>
                            <li><a href="#" className="hover:underline">Публичная оферта</a></li>
                            <li><a href="#" className="hover:underline">Возврат и обмен товаров</a></li>
                            <li><a href="#" className="hover:underline">Условия рассрочки</a></li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Eco-friendly</a></li>
                            <li><a href="#" className="hover:underline">Политика обработки персональных данных</a></li>
                            <li><a href="#" className="hover:underline">Оплата и Доставка Товара</a></li>
                            <li><a href="#" className="hover:underline">Бонусы и акции</a></li>
                            <li><a href="#" className="hover:underline">Оферта для продавцов товаров на Olcha.uz</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right payment icons */}
                <div className="md:flex-1 grid grid-cols-3 gap-4 items-center justify-center">
                    {paymentIcons.map(({ icon, alt }, i) => (
                        <div key={i} className="bg-white rounded-lg p-3 flex justify-center items-center shadow" title={alt}>
                            {icon}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="bg-gray-50 border-t border-gray-300 py-4 text-gray-600 text-xs max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© 2017-2025. ООО "Olcha store"</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-black">Публичная оферта</a>
                    <a href="#" className="hover:text-black">Политика конфиденциальности</a>
                </div>
                <div className="flex gap-4 text-gray-500">
                    <a href="#" aria-label="Facebook" className="hover:text-black"><FaFacebookF className="w-5 h-5" /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-black"><FaInstagram className="w-5 h-5" /></a>
                    <a href="#" aria-label="Telegram" className="hover:text-black"><FaTelegramPlane className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
