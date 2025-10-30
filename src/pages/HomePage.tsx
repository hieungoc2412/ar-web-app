
import * as React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProduct = PRODUCTS[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            See Your Reflection in the Future.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">
            Discover our collection of smart mirrors and visualize them in your own home with Augmented Reality.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link 
              to="/products" 
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 text-base sm:text-lg"
            >
              Trải nghiệm AR ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      {featuredProduct && (
        <section className="py-10 sm:py-14 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Sản phẩm nổi bật</h2>
            <div className="max-w-full sm:max-w-md mx-auto">
              <ProductCard product={featuredProduct} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
