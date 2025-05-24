import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { Reducer } from '@reduxjs/toolkit';

// Import slices
import branchesReducer from './branchesSlice';
import skusReducer from './skusSlice';

// Define the RootState type manually based on the reducers
const rootReducer = combineReducers({
  branches: branchesReducer as Reducer,
  skus: skusReducer as Reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const preloadedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Function to load state from local storage
function loadState() {
  try {
    const serializedState = localStorage.getItem('skuState');
    if (serializedState === null) {
      return undefined;
    }
    // Add type assertion or validation if needed
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// Function to save state to local storage
store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('skuState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
}); 