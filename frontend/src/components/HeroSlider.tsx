import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80',
    headline: 'Find Your Perfect Pair –',
    title: 'Stylish, Comfortable and Affordable Eyewear',
    sub: 'Shop the latest collections and discover frames that fit your style.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80',
    headline: 'Discover New Arrivals',
    title: 'Trendy Eyewear for Everyone',
    sub: 'Browse our new collection and find your next favorite pair.',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80',
    headline: 'Best Sellers',
    title: 'Popular Styles, Great Prices',
    sub: 'See what everyone is wearing this season.',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Auto-slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">{slide.headline}</h3>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
            <p className="text-sm sm:text-base md:text-lg max-w-xl">{slide.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
