import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    headline: 'Find Your Perfect Pair –',
    title: 'Stylish, Comfortable and Affordable Eyewear',
    sub: 'Shop the latest collections and discover frames that fit your style.',
    cta: 'Explore Glasses',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    headline: 'Discover New Arrivals',
    title: 'Trendy Eyewear for Everyone',
    sub: 'Browse our new collection and find your next favorite pair.',
    cta: 'Shop Now',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    headline: 'Best Sellers',
    title: 'Popular Styles, Great Prices',
    sub: 'See what everyone is wearing this season.',
    cta: 'View Best Sellers',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[420px] md:h-[480px] bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt="Eyewear Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(0.85)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-start max-w-2xl pl-12">
        <div className="text-lg md:text-xl text-gray-700 mb-2 font-serif">{slides[current].headline}</div>
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">{slides[current].title}</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">{slides[current].sub}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition">{slides[current].cta}</button>
      </div>
      {/* Left Arrow */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow z-20"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaArrowLeft className="text-2xl text-gray-700" />
      </button>
      {/* Right Arrow */}
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow z-20"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaArrowRight className="text-2xl text-gray-700" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white border-2 border-blue-600' : 'bg-gray-300'} inline-block`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider; 