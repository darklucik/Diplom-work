import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  useremail: string;
  userpassword: string;
}

interface AuthInitialState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthInitialState = {
  user: null,
  loading: false,
  error: null,
};

export interface RootState {
  authSlice: AuthInitialState;
}

const YourAuthService = {
  login: async (useremail: string, userpassword: string) => {
    return { useremail, userpassword };
  },
  register: async (useremail: string, userpassword: string) => {
    return { useremail, userpassword };
  },
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (user: IUser | undefined, thunkAPI) => {
    try {
      if (user) {
        const response = await YourAuthService.login(
          user.useremail,
          user.userpassword
        );
        return response;
      } else {
        return undefined;
      }
    } catch (error) {}
  }
);

export const registerAsync = createAsyncThunk(
  "auth/register",
  async (user: IUser | undefined, thunkAPI) => {
    try {
      if (user) {
        const response = await YourAuthService.register(
          user.useremail,
          user.userpassword
        );
        return response;
      } else {
        return undefined;
      }
    } catch (error) {}
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? String(action.payload)
          : "Kirishda xatolik";
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? String(action.payload)
          : "Ro'yxatdan o'tishda xatolik";
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
