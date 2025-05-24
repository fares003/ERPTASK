import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deactivateSku } from '../redux/skusSlice';
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

const SkuList = () => {
  const skus = useSelector((state: RootState) => state.skus.skus);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleDeactivate = (id: string) => {
    if (window.confirm('Are you sure you want to deactivate this SKU?')) {
      dispatch(deactivateSku(id));
    }
  };

  const filteredSkus = skus.filter((sku: Sku) =>
    sku.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sku.skuCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sku.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="card">
        <h1 className="text-center mb-6">SKU List</h1>
        
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search SKUs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sku-list">
          {filteredSkus.length === 0 ? (
            <p className="text-center text-gray-500">No SKUs found</p>
          ) : (
            filteredSkus.map((sku: Sku) => (
              <div key={sku.id} className="sku-item">
                <div className="sku-header">
                  <div>
                    <h3 className="mb-2">{sku.itemName}</h3>
                    <p className="text-gray-500">SKU: {sku.skuCode}</p>
                  </div>
                  <span className={`status-badge ${sku.isActive ? 'status-badge-active' : 'status-badge-inactive'}`}>
                    {sku.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="sku-details">
                  <p>Category: {sku.category}</p>
                  <p>Subcategory: {sku.subcategory}</p>
                  <p>Brand: {sku.brandName}</p>
                </div>
                <div className="sku-actions">
                  {sku.isActive && (
                    <button 
                      onClick={() => handleDeactivate(sku.id)}
                      className="btn btn-danger"
                    >
                      Deactivate
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SkuList; 