const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "dark",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = localStorage.getItem("theme");
      state.value = action.payload;
      localStorage.setItem("theme", action.payload);
      const html = document.getElementById("html");
      html.setAttribute("data-theme", action.payload);
      // console.log(html.getAttribute("data-theme"));
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
