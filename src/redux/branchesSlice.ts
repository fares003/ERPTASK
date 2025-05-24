import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Branch {
  id: string;
  name: string;
  location: string;
  contactDetails: string;
}

interface BranchesState {
  branches: Branch[];
}

const initialState: BranchesState = {
  branches: [],
};

const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    addBranch: (state, action: PayloadAction<Branch>) => {
      state.branches.push(action.payload);
    },
    // Add other branch related reducers here
  },
});

export const { addBranch } = branchesSlice.actions;
export default branchesSlice.reducer; 