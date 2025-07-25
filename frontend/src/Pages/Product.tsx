import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const product = {
  name: 'Wonder Eyewear',
  price: 4000,
  oldPrice: 8000,
  discount: '-50%',
  color: 'Black',
  size: 'Medium',
  image: '/images/wonder-eyewear.svg',
  isNew: true,
  technical: [
    { label: 'Brand Name', value: 'Wonder Eyewear' },
    { label: 'Product Type', value: 'Eyeglasses' },
    { label: 'Model', value: 'Full Rim' },
    { label: 'Frame Shape', value: 'Round' },
    { label: 'Frame Size', value: 'Medium' },
    { label: 'Frame Width', value: '132mm' },
    { label: 'Frame Height', value: '49mm' },
    { label: 'Frame Dimensions', value: '55mm / 16mm / 142mm' },
    { label: 'Frame Color', value: 'Grey' },
    { label: 'Weight Group', value: 'Light' },
    { label: 'Frame Style', value: 'Light Weight' },
    { label: 'Frame Type', value: 'Full Rim' },
    { label: 'Product Warranty', value: '1 Year Warranty' },
    { label: 'Prescription Type', value: 'Bifocal / Progressive' },
  ],
  further: [
    'Lightweight Frame: Designed for long-term comfort with minimal pressure on your nose and ears.',
    'Durable Materials: Made from high-quality, impact-resistant acetate and metal, ensuring longevity.',
    'Multiple Frame Colors: Available in various stylish colors to match your look.',
    'Adjustable Nose Pads: Customizable for the exact comfort and stability.',
    'Prescription Ready: Suits all types of prescription lenses for personalized vision correction.',
    'Trendy Design: Modern, chic styles suitable for fashion-forward customers.'
  ]
};

const similarProducts = [
  { id: 1, name: 'Eyeful Craft', price: 1099, oldPrice: 2200, discount: '-50%', image: '/images/eyeful-craft.svg', isNew: true },
  { id: 2, name: 'Smart Kids', price: 2224, image: '/images/smart-kids.svg' },
  { id: 3, name: 'Visate', price: 1199, oldPrice: 2400, discount: '-50%', image: '/images/visate.svg' },
  { id: 4, name: 'Tom Harry', price: 1324, image: '/images/tom-harry.svg' },
];

const tabs = ['Additional info', 'Questions', 'Reviews'];

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Eyeglasses', path: '/eyeglasses' },
            { label: product.name, path: `/product/${id}`, isActive: true }
          ]}
        />
        {/* Main Product Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="flex-1 flex flex-col items-center">
          <img src={product.image} alt={product.name} className="w-full max-w-md rounded-lg border mb-4" />
          <div className="flex gap-2 justify-center mt-2">
            <button className="w-3 h-3 rounded-full bg-gray-300" />
            <button className="w-3 h-3 rounded-full bg-gray-300" />
            <button className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
        </div>
        {/* Info */}
        <div className="flex-1">
          {product.isNew && <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">New</span>}
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            {product.oldPrice && <span className="line-through text-gray-400 text-lg">₹{product.oldPrice}</span>}
            {product.discount && <span className="text-green-600 font-semibold">{product.discount}</span>}
          </div>
          <div className="flex gap-6 mb-4">
            <div>
              <div className="text-xs text-gray-500">Frame Color</div>
              <div className="text-base font-medium">{product.color}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Size</div>
              <div className="text-base font-medium">{product.size}</div>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <button className="border border-gray-300 rounded px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-100">
              <span>♡</span> Wishlist
            </button>
            <Link to={`/lens-type/${id}`} className="bg-blue-600 text-white rounded px-6 py-2 font-semibold hover:bg-blue-700 inline-block text-center">Select Lenses</Link>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex gap-6 border-b">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`py-2 px-4 font-medium border-b-2 transition-colors duration-150 ${activeTab === idx ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 0 && (
            <>
              {/* Technical Info */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Technical Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {product.technical.map((item) => (
                    <div key={item.label} className="flex gap-2">
                      <span className="text-gray-500 w-36">{item.label}:</span>
                      <span className="text-gray-800 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Further Details */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Further Details</h3>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {product.further.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          {activeTab === 1 && <div>Questions section coming soon.</div>}
          {activeTab === 2 && <div>Reviews section coming soon.</div>}
        </div>
      </div>
      {/* Service Highlights */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="mb-2">🚚</span>
          Deliver in 3-7 days
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="mb-2">🔄</span>
          14 Days Return/Exchange
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="mb-2">🛡️</span>
          1 Year Warranty
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="mb-2">💵</span>
          Cash on Delivery
        </div>
      </div>
      {/* Similar Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-4">Similar Products</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {similarProducts.map((item, idx) => (
            <div key={item.id} className="min-w-[220px] bg-white rounded-xl shadow p-3 pb-5 relative flex flex-col items-center">
              {item.isNew && (
                <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">New</span>
              )}
              <img src={item.image} alt={item.name} className="w-full rounded-lg object-cover aspect-[1.3/1] mb-4 mt-6" />
              {idx === 0 && (
                <button className="bg-blue-600 text-white w-full mt-2 mb-2 rounded-md py-2 font-semibold text-base hover:bg-blue-700 transition">
                  Add to cart
                </button>
              )}
              <div className="mt-2 ml-1 w-full">
                <div className="font-bold text-base mb-1">{item.name}</div>
                <div className="flex items-center gap-2">
                  <span className="text-black font-semibold text-base">₹{item.price}</span>
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-sm">₹{item.oldPrice}</span>
                  )}
                  {item.discount && (
                    <span className="text-green-600 text-xs font-bold">{item.discount}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;