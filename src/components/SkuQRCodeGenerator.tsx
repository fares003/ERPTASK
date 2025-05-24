import { QRCodeSVG } from 'qrcode.react';

interface SkuQRCodeGeneratorProps {
  skuCode: string;
}

function SkuQRCodeGenerator({ skuCode }: SkuQRCodeGeneratorProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-medium text-gray-700">QR Code for SKU: {skuCode}</h3>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <QRCodeSVG value={skuCode} size={128} level="H" />
      </div>
    </div>
  );
}

export default SkuQRCodeGenerator; 