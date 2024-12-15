const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

export const fetchDetails = createAsyncThunk("data/fetchDetails", async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  if (!userId) {
    throw new Error("User ID not found in localStorage");
  }

  const response = await axios.get(`${backendUrl}/ecommerce/user/${userId}`);
  return response.data.details;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    email: "",
    gender: "",
    age: "",
    phone: "",
    theme: "dark",
    cart: [],
    order: [],
    isLoaning: "",
    isError: "",
  },
  reducers: {
    updateUserData: (state, action) => {
      const user = action.payload.user;
      state.id = user.id || "";
      state.name = user.name || "";
      state.email = user.email || "";
      state.gender = user.gender || "";
      state.age = user.age || "";
      state.phone = user.phone || "";
      state.theme = user.theme || "";
      state.cart = user.cart || [];
      state.order = user.order || [];
    },
    updateUserPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
    updateUserTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.isLoaning = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.isLoaning = false;
      const userData = action.payload;
      state.userId = userData._id;
      state.name = userData.name;
      state.email = userData.email;
      state.gender = userData.gender;
      state.age = userData.age;
      state.phone = userData.phone;
      state.theme = userData.theme;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.isLoaning = false;
      state.isError = action.error.message;
    });
  },
});

export const { updateUserData, updateUserPhone } = userSlice.actions;

export default userSlice.reducer;
