import { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

type PackageOption = {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
};

const packageOptions: PackageOption[] = [
  {
    id: 'standard',
    title: 'Standard Package',
    description: 'Basic lenses with essential features',
    price: 1000,
    features: ['Anti-glare coating', 'UV protection', 'Scratch-resistant']
  },
  {
    id: 'premium',
    title: 'Premium Package',
    description: 'Enhanced lenses with advanced features',
    price: 2500,
    features: ['Anti-glare coating', 'UV protection', 'Scratch-resistant', 'Blue light filter', 'Water repellent']
  },
  {
    id: 'gold',
    title: 'Gold Package',
    description: 'Premium lenses with all available features',
    price: 4000,
    features: ['Anti-glare coating', 'UV protection', 'Scratch-resistant', 'Blue light filter', 'Water repellent', 'Anti-fog', 'Thin & lightweight']
  }
];

const LensPackage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const lensType = searchParams.get('type') || 'single-vision';
  const productId = id;
  
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Eyeglasses', path: '/eyeglasses' },
            { label: 'Wonder Eyewear', path: `/product/${productId}` },
            { label: 'Select Lens Type', path: `/lens-type/${productId}` },
            { label: 'Choose Lens Package', path: `/lens-package/${productId}?type=${lensType}`, isActive: true }
          ]}
        />
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Choose Lens Package</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packageOptions.map((pkg) => (
              <div 
                key={pkg.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedPackage === pkg.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{pkg.title}</h3>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    ₹{pkg.price}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
                <div className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between max-w-4xl mx-auto">
            <Link 
              to={`/lens-type/${productId}`}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
            >
              Back
            </Link>
            <Link 
              to={selectedPackage ? `/cart/${productId}?type=${lensType}&package=${selectedPackage}` : '#'}
              className={`px-6 py-2 rounded-md font-medium ${selectedPackage ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              onClick={(e) => !selectedPackage && e.preventDefault()}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LensPackage;