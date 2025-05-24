import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deactivateSku } from '../redux/skusSlice';
import SkuQRCodeGenerator from './SkuQRCodeGenerator';
import type { RootState } from '../redux/Store';

interface Sku {
  id: string;
  itemName: string;
  skuCode: string;
  category: string;
  subcategory: string;
  brandName: string;
  isActive: boolean;
}

function SkusList() {
  const skus = useSelector((state: RootState) => state.skus.skus);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [showQrCodeId, setShowQrCodeId] = useState<string | null>(null);

  const handleDeactivate = (id: string) => {
    dispatch(deactivateSku(id));
  };

  const handleGenerateQrCode = (id: string) => {
    setShowQrCodeId(showQrCodeId === id ? null : id);
  };

  const filteredSkus = skus.filter((sku: Sku) =>
    sku.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sku.skuCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sku.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Inventory SKUs</h2>
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search SKUs:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
          placeholder="Search by name, code, or category..."
        />
      </div>
      {filteredSkus.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No SKUs found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredSkus.map((sku: Sku) => (
            <li key={sku.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{sku.itemName}</h3>
                    <p className="text-sm text-gray-600">SKU: {sku.skuCode}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    sku.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {sku.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Category: {sku.category}</p>
                  <p>Subcategory: {sku.subcategory}</p>
                  <p>Brand: {sku.brandName}</p>
                </div>
                <div className="flex space-x-2 mt-2">
                  {sku.isActive && (
                    <button 
                      onClick={() => handleDeactivate(sku.id)}
                      className="btn-secondary"
                    >
                      Deactivate
                    </button>
                  )}
                  <button 
                    onClick={() => handleGenerateQrCode(sku.id)}
                    className="btn-primary"
                  >
                    {showQrCodeId === sku.id ? 'Hide QR Code' : 'Show QR Code'}
                  </button>
                </div>
                {showQrCodeId === sku.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <SkuQRCodeGenerator skuCode={sku.skuCode} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkusList; 