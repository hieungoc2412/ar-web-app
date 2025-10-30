
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  modelUrl: string; // .glb file for Android and web view
  iosModelUrl?: string; // .usdz file for iOS AR Quick Look
}

// FIX: Moved global JSX declaration here to correctly augment IntrinsicElements.
// TypeScript declaration for the <model-viewer> custom element
// ĐÃ XOÁ để tránh xung đột. Khai báo đã được chuyển sang src/types/custom-elements.d.ts
