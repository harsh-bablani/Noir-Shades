import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const product = {
  name: 'Wonder Eyewear',
  price: 4000,
  image: '/images/wonder-eyewear.svg',
};

const packagePrices = {
  standard: 1000,
  premium: 2500,
  gold: 4000
};

const ShoppingCart = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const lensType = searchParams.get('type') || 'single-vision';
  const packageType = searchParams.get('package') || 'standard';
  const productId = id;
  
  // Calculate prices
  const framePrice = product.price;
  const lensPrice = packagePrices[packageType as keyof typeof packagePrices];
  const totalPrice = framePrice + lensPrice;

  // Format lens type for display
  const formatLensType = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Format package type for display
  const formatPackageType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Eyeglasses', path: '/eyeglasses' },
            { label: 'Shopping Cart', path: `/cart/${productId}`, isActive: true }
          ]}
        />
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span className="ml-2 font-medium text-blue-600">Summary</span>
            </div>
            <div className="w-16 h-1 bg-gray-300 mx-2"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold">2</div>
              <span className="ml-2 text-gray-500">Address details</span>
            </div>
            <div className="w-16 h-1 bg-gray-300 mx-2"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold">3</div>
              <span className="ml-2 text-gray-500">Order complete</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Details */}
            <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
              <div className="flex items-center border-b pb-4 mb-4">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    <p>Lens Type: {formatLensType(lensType)}</p>
                    <p>Package: {formatPackageType(packageType)}</p>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-semibold">₹{framePrice}</div>
                  <div className="text-sm text-gray-600">Frame Price</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button className="w-8 h-8 border rounded-md flex items-center justify-center">-</button>
                  <span className="mx-3">1</span>
                  <button className="w-8 h-8 border rounded-md flex items-center justify-center">+</button>
                </div>
                <button className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Cart summary</h3>
              <div className="space-y-2 border-b pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Frame Price</span>
                  <span>₹{framePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lens Price</span>
                  <span>₹{lensPrice}</span>
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
              
              <Link 
                to={`/checkout/${productId}?type=${lensType}&package=${packageType}`}
                className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md font-medium text-center block hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Need a coupon?</h4>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  />
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md font-medium hover:bg-gray-300">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;