import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IChangeUserPayload {
  username: string;
  useremail: string;
  userphone: string;
  usercity: string;
  userpassword: string;
}

interface IUserSliceState {
  user: IChangeUserPayload | null;
}

export interface RootState {
  userSlice: IUserSliceState;
}

const initialState: IUserSliceState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IChangeUserPayload>) {
      state.user = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
