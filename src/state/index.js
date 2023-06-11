import { createSlice } from "@reduxjs/toolkit";

// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  colorTheme: {
    primary: {
      dark: colorTokens.primary[200],
      main: colorTokens.primary[500],
      light: colorTokens.primary[800],
    },
    neutral: {
      dark: colorTokens.grey[100],
      main: colorTokens.grey[200],
      mediumMain: colorTokens.grey[300],
      medium: colorTokens.grey[400],
      light: colorTokens.grey[700],
    },
    background: {
      default: colorTokens.grey[900],
      alt: colorTokens.grey[800],
    },
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    // Add SetColorTheme
    setColorTheme: (state, action) => {
      console.log(action.payload.first, action.payload.second, action.payload.color);
      state.colorTheme[action.payload.first][action.payload.second] = action.payload.color;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setColorTheme } =
  authSlice.actions;
export default authSlice.reducer;
