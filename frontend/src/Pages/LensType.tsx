import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

type LensTypeOption = {
  id: string;
  title: string;
  description: string;
};

const lensTypes: LensTypeOption[] = [
  {
    id: 'single-vision',
    title: 'Single Vision',
    description: 'Corrects for a single field of vision - either distance, intermediate, or near vision. Ideal for users with a single vision correction need.'
  },
  {
    id: 'bifocal-progressive',
    title: 'Bifocal/Progressive lenses',
    description: 'Corrects for both distance and near vision in one lens. Progressive lenses provide a seamless transition between different vision zones.'
  },
  {
    id: 'zero-power',
    title: 'Zero Power lenses',
    description: 'Non-prescription lenses for fashion or blue light protection. Perfect for those who want the style without vision correction.'
  },
  {
    id: 'tinted-single',
    title: 'Tinted Single Vision lenses',
    description: 'Single vision lenses with a tint for sun protection or style. Combines vision correction with light filtering properties.'
  },
  {
    id: 'reading',
    title: 'Reading only',
    description: 'Specifically designed for near vision tasks like reading. Provides clarity and comfort for close-up activities.'
  }
];

const LensType = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id;

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
            { label: 'Select Lens Type', path: `/lens-type/${productId}`, isActive: true }
          ]}
        />
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Select Lens Type</h1>
          
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            {lensTypes.map((lensType) => (
              <div 
                key={lensType.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 cursor-pointer transition-all"
                onClick={() => window.location.href = `/lens-package/${productId}?type=${lensType.id}`}
              >
                <h3 className="font-semibold text-lg mb-1">{lensType.title}</h3>
                <p className="text-gray-600 text-sm">{lensType.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between max-w-2xl mx-auto">
            <Link 
              to={`/product/${productId}`}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
            >
              Back
            </Link>
            <button 
              className="px-6 py-2 bg-gray-200 rounded-md text-gray-400 font-medium cursor-not-allowed"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LensType;