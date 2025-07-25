import React, { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const product = {
  name: 'Wonder Eyewear',
  price: 4000,
  image: '//images/Wonder Eyewear.svg',
};

const packagePrices = {
  standard: 1000,
  premium: 2500,
  gold: 4000
};

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const lensType = searchParams.get('type') || 'single-vision';
  const packageType = searchParams.get('package') || 'standard';
  const productId = id;
  
  // Calculate prices
  const framePrice = product.price;
  const lensPrice = packagePrices[packageType as keyof typeof packagePrices];
  const totalPrice = framePrice + lensPrice;

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to order complete page
    window.location.href = `/order-complete/${productId}?type=${lensType}&package=${packageType}`;
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
            { label: 'Shopping Cart', path: `/cart/${productId}` },
            { label: 'Checkout', path: `/checkout/${productId}`, isActive: true }
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
            <div className="w-16 h-1 bg-blue-500 mx-2"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <span className="ml-2 font-medium text-blue-600">Address details</span>
            </div>
            <div className="w-16 h-1 bg-gray-300 mx-2"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold">3</div>
              <span className="ml-2 text-gray-500">Order complete</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Form */}
            <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Payment method</h3>
                <div className="mb-6">
                  <div className="flex items-center border border-blue-500 rounded-md p-3 bg-blue-50">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="cod" className="font-medium">Cash on Delivery</label>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Link 
                    to={`/cart/${productId}?type=${lensType}&package=${packageType}`}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Back to Cart
                  </Link>
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow p-6 h-fit">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;