
import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'astronomy-mirror',
    name: 'Stellar Reflection Mirror',
    price: '₫15,000,000',
    description: 'A sleek, modern mirror that brings the cosmos into your room. Its minimalist design is perfect for contemporary spaces.',
    imageUrl: '/DemoImage/image/Guong1.png',
    // Placeholder model from Google's <model-viewer> examples
    modelUrl: '/DemoImage/glb/guong1.glb',
    iosModelUrl: '/DemoImage/usdz/guong1.usdz',
    qr: '/DemoImage/qr/guong1-qr.png',
  },
  {
    id: 'vintage-mirror',
    name: 'Classic Ornate Mirror',
    price: '₫12,500,000',
    description: 'An elegant, vintage-inspired mirror with intricate details. Adds a touch of classic charm and sophistication to any wall.',
    imageUrl: '/DemoImage/image/Guong2.png',
    // Placeholder model from Google's <model-viewer> examples
    modelUrl: '/DemoImage/glb/guong2.glb',
    iosModelUrl: '/DemoImage/usdz/guong2.usdz', // No specific iOS model for this example
  },
];
