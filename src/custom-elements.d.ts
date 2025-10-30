import React from "react";

declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
