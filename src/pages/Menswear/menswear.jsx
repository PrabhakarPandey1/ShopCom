import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";



// Product data
const itemsData = [
  {
    id: 1,
    title: "Men's Classic T-Shirt",
    price: 499,
    img: "https://images.unsplash.com/photo-1602810316994-cc29f43b8d50?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: true,
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    price: 999,
    img: "https://images.unsplash.com/photo-1583002071547-6ce79c2dc9b3?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    inStock: false,
  },
  {
    id: 3,
    title: "Men's Casual Shirt",
    price: 699,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1b5?auto=format&fit=crop&w=600&q=80",
    rating: 3,
    inStock: true,
  },
  {
    id: 4,
    title: "Hoodie Jacket",
    price: 1299,
    img: "https://images.unsplash.com/photo-1602810316994-cc29f43b8d50?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    inStock: true,
  },
  {
    id: 5,
    title: "Sneakers",
    price: 1499,
    img: "https://images.unsplash.com/photo-1600181955294-72134e14fb07?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    inStock: true,
  },
  {
    id: 6,
    title: "Formal Trousers",
    price: 899,
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&q=80",
    rating: 3,
    inStock: true,
  },
];

const MenWear = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const sortItems = (type) => {
    const sorted = [...items].sort((a, b) =>
      type === "asc" ? a.price - b.price : b.price - a.price
    );
    setItems(sorted);
    setSort(type);
  };

  const paginatedItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      
      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Men's Wear Collection
          </h1>
          <p className="text-gray-600 text-lg">Discover premium fashion for modern men</p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 font-medium">Sort by Price:</span>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  sort === "asc" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
                onClick={() => sortItems("asc")}
              >
                ₹ Low to High
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  sort === "desc" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
                onClick={() => sortItems("desc")}
              >
                ₹ High to Low
              </button>
            </div>
          </div>
          <div className="text-gray-600">
            {items.length} Products Found
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                  {item.rating >= 4 && (
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      ⭐ Best Seller
                    </span>
                  )}
                  {!item.inStock && (
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-auto">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-gray-500 text-sm ml-1">({item.rating})</span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  disabled={!item.inStock}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    item.inStock
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {items.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  page === i + 1
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setPage(Math.min(Math.ceil(items.length / itemsPerPage), page + 1))}
              disabled={page === Math.ceil(items.length / itemsPerPage)}
              className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default MenWear;