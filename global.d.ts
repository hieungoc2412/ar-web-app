declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
      'camera-controls'?: boolean;
      'auto-rotate'?: boolean;
      'ar'?: boolean;
      'shadow-intensity'?: string | number;
      'exposure'?: string | number;
      'poster'?: string;
      'environment-image'?: string;
      'style'?: React.CSSProperties;
    };
  }
}
