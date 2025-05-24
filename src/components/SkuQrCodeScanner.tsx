import { useState } from 'react';
import BarcodeScanner from 'react-qr-barcode-scanner';

function SkuQrCodeScanner() {
  const [scannedData, setScannedData] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Scan SKU QR Code</h2>
      <div className="card">
        <div className="flex justify-center mb-6">
          <BarcodeScanner
            width={400}
            height={400}
            onUpdate={( result: any) => {
              if (result) {
                setScannedData(result.text);
              }
            }}
          />
        </div>
        {scannedData && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-medium">Scanned Data: {scannedData}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkuQrCodeScanner; 