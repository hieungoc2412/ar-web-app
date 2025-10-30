
import * as React from 'react';
import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import QRCodeDisplay from '../components/QRCodeDisplay';

// FIX: Removed global type declaration from this file to prevent it from overriding all other JSX element types.
// The declaration has been moved to types.ts.

const ARViewPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = useMemo(() => 
    PRODUCTS.find((p) => p.id === productId), 
    [productId]
  );

  if (!product) {
    return (
      <div className="text-center py-16 sm:py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-indigo-600 hover:underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* 3D Model Viewer */}
        <div className="lg:col-span-3">
          <div className="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-8 lg:mb-0">
             <model-viewer
                src={product.modelUrl}
                ios-src={product.iosModelUrl}
                alt={`3D model of ${product.name}`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                class="w-full h-full"
                style={{minHeight: '300px'}}
              ></model-viewer>
          </div>
        </div>

        {/* Product Info & QR Code */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-xl sm:text-3xl font-bold text-indigo-600">{product.price}</p>
          <p className="mt-4 text-base sm:text-lg text-gray-700">{product.description}</p>
          <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-center">Scan to View in Your Space</h3>
            <div className="mt-3 sm:mt-4 flex justify-center">
              <QRCodeDisplay imageSrc={product.qr} url={window.location.href} />
            </div>
            <p className="mt-3 sm:mt-4 text-xs text-gray-500 text-center">
              Open your phone's camera and point it at the QR code to launch the AR experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARViewPage;
