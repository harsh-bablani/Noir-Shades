import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import BestSellerSection from '../components/BestSellerSection';
import TrendingEyeWear from '../components/TrendingEyeWear';
import NewArrival from '../components/NewArrival';
import Policies from '../components/Policies';
import ExploreCategories from '../components/ExploreCategories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <BestSellerSection />
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <TrendingEyeWear />
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <NewArrival />
      </div>
      <Policies />
      <ExploreCategories />
      <Footer />
    </>
  );
};

export default Home;
