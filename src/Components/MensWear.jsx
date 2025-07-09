import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Updated product data with `rating` and `inStock`
const itemsData = [
  {
    id: 1,
    title: "Vega 3-in-1 Hair Styler",
    price: 1399,
    img: "https://m.media-amazon.com/images/I/61hI9Zc9pyL._SX679_.jpg",
    rating: 4,
    inStock: true
  },
  {
    id: 2,
    title: "ROMAX Power Play Earbuds",
    price: 349,
    img: "https://m.media-amazon.com/images/I/61hI9Zc9pyL._SX679_.jpg",
    rating: 3,
    inStock: true
  },
  {
    id: 3,
    title: "SYSKA Hair Trimmer Set",
    price: 999,
    img: "https://m.media-amazon.com/images/I/61DR3OBatEL._SX679_.jpg",
    rating: 5,
    inStock: false
  },
  {
    id: 4,
    title: "LED Table Lamp for Kids",
    price: 499,
    img: "https://m.media-amazon.com/images/I/51LVYUvK3aL._SX679_.jpg",
    rating: 4,
    inStock: true
  },
  {
    id: 5,
    title: "Pigeon Electric Kettle",
    price: 649,
    img: "https://m.media-amazon.com/images/I/51mFiLzphjL._SX679_.jpg",
    rating: 4,
    inStock: true
  },
  {
    id: 6,
    title: "Nova Professional Trimmer Kit",
    price: 749,
    img: "https://m.media-amazon.com/images/I/61XMWDtwowL._SX679_.jpg",
    rating: 3,
    inStock: false
  },
  {
    id: 7,
    title: "Remote with Battery (Universal)",
    price: 209,
    img: "https://m.media-amazon.com/images/I/71AjBnYTVWL._SX679_.jpg",
    rating: 2,
    inStock: true
  },
  {
    id: 8,
    title: "VGR V-055 Trimmer",
    price: 1195,
    img: "https://m.media-amazon.com/images/I/61d+u3zPQ4L._SX679_.jpg",
    rating: 5,
    inStock: true
  },
  {
    id: 9,
    title: "Philips Beard Trimmer",
    price: 1049,
    img: "https://m.media-amazon.com/images/I/61bd08DmuCL._SX679_.jpg",
    rating: 4,
    inStock: true
  },
  {
    id: 10,
    title: "Mini Portable Cosmetic Fridge",
    price: 2799,
    img: "https://m.media-amazon.com/images/I/61Yrhg1TZyL._SX679_.jpg",
    rating: 5,
    inStock: false
  }
];

const Electronics = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setItems(itemsData);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const sortItems = (type) => {
    const sorted = [...items].sort((a, b) => type === 'asc' ? a.price - b.price : b.price - a.price);
    setItems(sorted);
    setSort(type);
  };

  const paginatedItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="p-6 bg-[#f4f6f8] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Top Electronic Picks</h1>

      <div className="flex justify-end gap-2 mb-4">
        <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => sortItems('asc')}>Low to High</button>
        <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => sortItems('desc')}>High to Low</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-all">
            <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.title} className="w-full h-48 object-contain mb-4" />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            </Link>
            <p className="text-green-600 font-bold">₹{item.price}</p>
            <p className="text-yellow-500">{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</p>
            <p className={item.inStock ? "text-green-500" : "text-red-500"}>{item.inStock ? "In Stock" : "Out of Stock"}</p>
            <button onClick={() => addToCart(item)} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
          <button key={i} className={`px-3 py-1 ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'} rounded`} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = itemsData.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 bg-[#f4f6f8] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.img} alt={product.title} className="w-80 h-80 object-contain mb-4" />
      <p className="text-green-600 font-bold text-xl">₹{product.price}</p>
      <p className="text-yellow-500">Rating: {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</p>
      <p className={product.inStock ? "text-green-500" : "text-red-500"}>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <Link to="/" className="text-blue-600 underline mt-4 inline-block">Back to List</Link>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Electronics />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </Router>
);

export default App;
