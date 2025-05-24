import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const skusSlice = createSlice({
  name: 'skus',
  initialState,
  reducers: {
    addSku: (state, action) => {
      state.push({
        id: Date.now(), // Simple unique ID
        ...action.payload,
      });
    },
    deactivateSku: (state, action) => {
      const sku = state.find(sku => sku.id === action.payload);
      if (sku) {
        sku.isActive = false; // Assuming a boolean isActive field
      }
    },
    // Add other reducers for updating or searching SKUs if needed (search might be done in components filtering the state)
  },
});

export const { addSku, deactivateSku } = skusSlice.actions;
export default skusSlice.reducer; 