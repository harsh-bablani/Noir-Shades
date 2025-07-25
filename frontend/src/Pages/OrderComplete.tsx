import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const product = {
  name: 'Wonder Eyewear',
  price: 4000,
};

const packagePrices = {
  standard: 1000,
  premium: 2500,
  gold: 4000
};

const OrderComplete = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const packageType = searchParams.get('package') || 'standard';
  const productId = id;
  
  // Calculate prices
  const framePrice = product.price;
  const lensPrice = packagePrices[packageType as keyof typeof packagePrices];
  const totalPrice = framePrice + lensPrice;

  // Generate a random order ID
  const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Eyeglasses', path: '/eyeglasses' },
            { label: 'Shopping Cart', path: `/cart/${productId}` },
            { label: 'Order Complete', path: `/order-complete/${productId}`, isActive: true }
          ]}
        />
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
              <span className="ml-2 font-medium text-green-500">Summary</span>
            </div>
            <div className="w-16 h-1 bg-green-500 mx-2"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
              <span className="ml-2 font-medium text-green-500">Address details</span>
            </div>
            <div className="w-16 h-1 bg-green-500 mx-2"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
              <span className="ml-2 font-medium text-green-500">Order complete</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-8 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-500 text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p className="text-gray-600 mb-6">Your order has been received</p>
            
            <div className="border-t border-b py-4 mb-6">
              <div className="flex justify-between max-w-xs mx-auto">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{orderId}</span>
              </div>
            </div>
            
            <div className="flex justify-between max-w-xs mx-auto mb-2">
              <span className="text-gray-600">Total:</span>
              <span className="font-bold">₹{totalPrice}</span>
            </div>
            
            <Link 
              to="/"
              className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-md font-medium inline-block hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderComplete;