import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Sku {
  id: string;
  itemName: string;
  skuCode: string;
  category: string;
  subcategory: string;
  brandName: string;
  isActive: boolean;
}

interface SkusState {
  skus: Sku[];
}

const initialState: SkusState = {
  skus: [],
};

const skusSlice = createSlice({
  name: 'skus',
  initialState,
  reducers: {
    addSku: (state, action: PayloadAction<Sku>) => {
      state.skus.push(action.payload);
    },
    deactivateSku: (state, action: PayloadAction<string>) => {
      const sku = state.skus.find(sku => sku.id === action.payload);
      if (sku) {
        sku.isActive = false;
      }
    },
    // Search functionality can be implemented by filtering the 'skus' array
  },
});

export const { addSku, deactivateSku } = skusSlice.actions;
export default skusSlice.reducer; 