import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    addBranch: (state, action) => {
      state.push({
        id: Date.now(), // Simple unique ID
        ...action.payload,
      });
    },
    // Add other reducers for updating or deleting branches if needed
  },
});

export const { addBranch } = branchesSlice.actions;
export default branchesSlice.reducer; 