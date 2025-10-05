
import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
const HeaderNavbar = () => {
  const [openCatalog, setOpenCatalog] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [navbarQuery, setNavbarQuery] = useState('');
  const [stateBasket , setStateBasket] = useState(0)

useEffect(() => {
  const productbasket = JSON.parse(localStorage.getItem("products")) || [];
  setStateBasket(productbasket.length);
}, []);


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(cat => {
          if (typeof cat === 'string') {
            return { slug: cat, name: cat };
          }
          return cat;
        });
        setCategories(formatted);
      })
      .catch(err => console.error('Error loading categories:', err));
  }, []);
// header ichida
useEffect(() => {
  if (navbarQuery.trim()) {
    setSearchOpen(true);
  }
}, [navbarQuery]);

  return (
    <div className="relative w-full bg-white shadow-md z-[50]">
      <div className="max-w-[100%] w-[95%] mx-auto flex items-center justify-between p-5">
        <div className="flex items-center gap-10">
          <Link to={'/'}>
            <h1 className="text-red-500 font-bold text-6xl">olcha</h1>
          </Link>

          <button
            onClick={() => setOpenCatalog(!openCatalog)}
            className={`flex gap-3 items-center justify-center text-[20px] transition-all w-[170px] p-3 border-2 rounded-2xl
              ${openCatalog ? 'text-red-500 border-red-500' : 'border-black hover:text-red-500 hover:border-red-500'}`}>
            <RxHamburgerMenu /> Каталог
          </button>
        </div>
        <div className="flex-1 flex items-center ml-10 gap-3">
          <input
            className="flex-1 text-xl py-3 px-6 bg-gray-100 rounded-2xl outline-none placeholder-gray-500"
            type="text"
            placeholder="Поиск товаров..."
            value={navbarQuery}
            onChange={(e) => setNavbarQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="bg-red-500 text-white text-2xl px-5 py-3 rounded-2xl flex items-center justify-center hover:bg-red-600 transition"
          >
            <IoSearch />
          </button>
        </div>

        <div className="flex gap-10 items-center ml-10">
          <Link to={'/basket'}>
          <div className="flex flex-col text-[18px] items-center">
            <span className="bg-red-500 relative left-5 w-4 flex items-center justify-center text-[12px] text-white h-4 rounded-full p-2">{stateBasket}</span>
            <FaRegHeart />
            Избранные
          </div></Link>
          <div className="flex flex-col text-[18px] items-center">
            <LuShoppingCart />
            Корзина
          </div>
          <div className="flex flex-col text-[18px] items-center">
            <FaRegUser />
            Войти
          </div>
        </div>
      </div>

      {openCatalog && (
        <div className="absolute top-[100%] left-0 w-full bg-white z-[40] p-10 min-h-[70vh] shadow-lg border-t animate-fadeIn">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Каталог товаров</h2>
            <button
              onClick={() => setOpenCatalog(false)}
              className="text-4xl hover:text-red-500 transition"
            >
              <IoClose />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 text-lg">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={`/category/${cat.slug}`}
                onClick={() => setOpenCatalog(false)}
                className="p-5 border rounded-lg hover:shadow-lg transition cursor-pointer hover:text-red-500 capitalize"  >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && <SearchOverlay setSearchOpen={setSearchOpen} />}
    </div>
  );
};

const SearchOverlay = ({ setSearchOpen }) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [savedProducts, setSavedProducts] = useState([]); 
  const handlebasket = (product) => {
    let updated;
    const exists = savedProducts.find(p => p.id === product.id);
    if (exists) {
      updated = savedProducts.filter(p => p.id !== product.id);
    } else {
      updated = [...savedProducts, product];
    }

    setSavedProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products')) || [];
    setSavedProducts(saved);
  }, []);
  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const filtered = data.products.filter(p =>
          p.title.toLowerCase().startsWith(query.toLowerCase())
        );
        setProducts(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="fixed inset-0 bg-white z-[100] p-10 overflow-auto">
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          placeholder="Поиск товаров..."
          className="w-full max-w-full border p-4 text-xl rounded-lg outline-none"
        />
        <button
          onClick={() => setSearchOpen(false)}
          className="text-4xl ml-5 hover:text-red-500 transition"
        >
          <IoClose />
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {products.length > 0 ? products.map(p => (
          <div key={p.id} className="w-64 bg-white rounded-2xl p-3 relative flex flex-col">
            {/* Heart tugmasi */}
            <button 
              onClick={() => handlebasket(p)} 
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
            >
              <FaRegHeart 
                className={`w-5 h-5 ${savedProducts.some(item => item.id === p.id) ? "text-red-500" : "text-gray-500"}`} 
              />
            </button>

            <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow">
              <BiBarChart className="w-5 h-5 text-gray-500" />
            </button>
      
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full rounded-xl object-contain mb-3 bg-base-200 h-full"
            />
      
            {/* Title */}
            <h2 className="text-sm font-medium mb-2">{p.title}</h2>
      
            {/* Narx */}
            <p className="text-xl font-bold">{p.price}<span className="text-sm">сум</span></p>
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
        )) : query && (
          <p className="text-gray-500 col-span-full">Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};


export default HeaderNavbar;