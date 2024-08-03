import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: true,
    view: 'grid',
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setLoading, setView } = uiSlice.actions;

export default uiSlice.reducer;
