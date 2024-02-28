import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const lodaingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export default lodaingSlice.reducer;
export const { setLoading } = lodaingSlice.actions;
