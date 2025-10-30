
import * as React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeDisplayProps {
  url?: string;
  imageSrc?: string;
  size?: number;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ url, imageSrc, size = 256 }) => {
  return (
    <div style={{ background: 'white', padding: '16px' }}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="QR Code"
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          width={size}
          height={size}
        />
      ) : (
        <QRCode
          value={url || ''}
          size={size}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={`0 0 ${size} ${size}`}
        />
      )}
    </div>
  );
};

export default QRCodeDisplay;
