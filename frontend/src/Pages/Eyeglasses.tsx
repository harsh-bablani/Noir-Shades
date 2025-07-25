import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const allProducts = [
  {
    id: 1,
    name: "William Style",
    price: 2624,
    image: "/images/William Style.svg",
    isNew: true,
  },  
  {
    id: 2,
    name: "Smart Kids",
    price: 2624,
    image: "/images/Smart Kids.svg",
    isNew: true,
  },
  {
    id: 3,
    name: "Wonder 24 Carat",
    price: 1999,
    oldPrice: 4000,
    discount: "-50%",
    image: "/images/Wonder 24 Cara.svg",
    isNew: false,
  },
  {
    id: 4,
    name: "William Style",
    price: 2624,
    image: "/images/William Style.svg",
    isNew: true,
  },
  {
    id: 5,
    name: "Wonder 24 Carat",
    price: 2624,
    image: "/images/Wonder 24 Cara.svg",
    isNew: false,
  },
  {
    id: 6,
    name: "Visate",
    price: 1999,
    oldPrice: 4000,
    discount: "-50%",
    image: "/images/Visat.svg",
    isNew: false,
  },
  {
    id: 7,
    name: "Wonder 24 Carat",
    price: 2624,
    image: "/images/Visate.svg",
    isNew: false,
  },
  {
    id: 8,
    name: "Visate",
    price: 1999,
    oldPrice: 4000,
    discount: "-50%",
    image: "/images/Visate.svg",
    isNew: true,
  },
  {
    id: 9,
    name: "Tom Harry",
    price: 1999,
    oldPrice: 4000,
    discount: "-50%",
    image: "/images/Tom Harry.svg",
    isNew: false,
  },
];

const Eyeglasses = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortOption, setSortOption] = useState("Sort by");

  const showMore = () => setVisibleCount(prev => prev + 3);

  // Sorting logic
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return (a.price ?? 0) - (b.price ?? 0);
    }
    if (sortOption === "Price: High to Low") {
      return (b.price ?? 0) - (a.price ?? 0);
    }
    if (sortOption === "Newest") {
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    }
    return 0;
  });

  return (
    <div className="bg-[#fafbfc] min-h-screen flex flex-col">
      <Header />
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Eyeglasses', path: '/eyeglasses', isActive: true }
        ]}
      />

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full px-4 md:px-0 py-6 md:py-8 flex-1">
        {/* Sidebar */}
        <div className="mb-6 md:mb-0 md:mr-8">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <h2 className="text-xl font-semibold">Eyeglasses Listing</h2>
            <select
              className="p-2 rounded border border-gray-300 text-sm"
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
            >
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.slice(0, visibleCount).map((item, idx) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id + idx}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-200 relative flex flex-col"
              >
                {/* New Badge */}
                {item.isNew && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold z-10">
                    New
                  </span>
                )}

                {/* Wishlist */}
                <span className="absolute top-4 right-4 bg-white rounded-full shadow w-8 h-8 flex items-center justify-center text-pink-500 text-lg">
                  ♥
                </span>

                {/* Product Image */}
                <div className="h-40 w-full bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image || "/images/placeholder.png"}
                    alt={item.name}
                    className="h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <span className="font-semibold text-base mb-1">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-700 font-semibold text-lg">₹{item.price}</span>
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-sm">₹{item.oldPrice}</span>
                    )}
                    {item.discount && (
                      <span className="text-green-600 text-xs font-bold">{item.discount}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More */}
          {visibleCount < allProducts.length && (
            <div className="mt-10 text-center">
              <button
                onClick={showMore}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm font-semibold"
              >
                Show More
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Eyeglasses;
