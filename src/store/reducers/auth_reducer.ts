import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState: IAuthState = {
  isLogin: false,
  userName: "John Smith",
  userEmail: "",
  aboutUser:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nullaac varius.",
};

const slice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<{ isLogin: boolean }>) => {
      state.isLogin = action.payload.isLogin;
    },
    changeUserName: (state, action: PayloadAction<{ name: string }>) => {
      state.userName = action.payload.name;
    },
    changeUserEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.userEmail = action.payload.email;
    },
    changeAboutUser: (
      state,
      action: PayloadAction<{ description: string }>
    ) => {
      state.aboutUser = action.payload.description;
    },
  },
});

//reducer
export const authReducer = slice.reducer;

//actions
export const { setIsLogin, changeUserName, changeUserEmail, changeAboutUser } =
  slice.actions;

// types
export interface IAuthState {
  isLogin: boolean;
  userName: string;
  userEmail: string;
  aboutUser: string;
}
