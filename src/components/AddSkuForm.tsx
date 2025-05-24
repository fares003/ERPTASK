import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSku } from '../redux/skusSlice';

function AddSkuForm() {
  const [itemName, setItemName] = useState('');
  const [skuCode, setSkuCode] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [brandName, setBrandName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemName && skuCode && category && subcategory && brandName) {
      dispatch(addSku({
        id: Date.now().toString(),
        itemName,
        skuCode,
        category,
        subcategory,
        brandName,
        isActive: true, // SKUs are active by default
      }));
      setItemName('');
      setSkuCode('');
      setCategory('');
      setSubcategory('');
      setBrandName('');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="text-center mb-6">Add New SKU</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="itemName" className="form-label">Item Name</label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="input-field"
              placeholder="Enter item name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="skuCode" className="form-label">SKU Code</label>
            <input
              type="text"
              id="skuCode"
              value={skuCode}
              onChange={(e) => setSkuCode(e.target.value)}
              className="input-field"
              placeholder="Enter SKU code"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field"
              placeholder="Enter category"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subcategory" className="form-label">Subcategory</label>
            <input
              type="text"
              id="subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="input-field"
              placeholder="Enter subcategory"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="brandName" className="form-label">Brand Name</label>
            <input
              type="text"
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="input-field"
              placeholder="Enter brand name"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add SKU
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSkuForm; 