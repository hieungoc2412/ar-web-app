
import React from 'react';
import QRCode from 'react-qr-code';

interface QRCodeDisplayProps {
  url: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ url }) => {
  return (
    <div style={{ background: 'white', padding: '16px' }}>
      <QRCode
        value={url}
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QRCodeDisplay;
