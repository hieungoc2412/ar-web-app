
import React from 'react';

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
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        'ios-src'?: string;
        alt: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        class?: string;
        style?: React.CSSProperties;
      }, HTMLElement>;
    }
  }
}
