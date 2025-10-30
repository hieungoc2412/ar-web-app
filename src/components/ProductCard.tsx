
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl flex flex-col h-full">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-2xl font-bold text-indigo-600">{product.price}</p>
        <div className="mt-auto pt-4">
            <Link
                to={`/ar-view/${product.id}`}
                className="w-full text-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
            >
                Xem thử trong AR
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
