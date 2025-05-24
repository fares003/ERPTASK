import { useState } from 'react';
import BarcodeScanner from 'react-qr-barcode-scanner';

const QrScanner = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = (err: unknown, result: any) => {
    if (result) {
      setScanResult(result.text);
      setError(null);
    }
  };

  return (
    <div className="qr-scanner-container">
      <div className="qr-scanner-card">
        <h1 className="text-center mb-6">Scan QR Code</h1>
        
        <div className="scanner-wrapper">
          <div className="flex justify-center mb-6">
            <BarcodeScanner
              width={400}
              height={400}
              onUpdate={handleScan}
            />
          </div>
        </div>

        {scanResult && (
          <div className="qr-scanner-result">
            <p>Scanned Result: {scanResult}</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p className="text-center text-gray-500">Error: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrScanner; 