import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login_info: {
    userName: "",
    isloggedin: false,
    burnerid: 0,
    usertype: "",
  },
  subscription: {
    showsubscription: false,
    plan: null,
    slot: 0,
    availability: 0,
  },
  product: {

  }
}

const AppState = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    setlogininfo: (state, action) => {
      state.login_info = action.payload;
    },
    setsubscriptioninfo: (state, action) => {
      state.subscription = action.payload;
    },
    setproductinfo: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { setlogininfo, setsubscriptioninfo, setproductinfo } = AppState.actions;
export default AppState.reducer;
