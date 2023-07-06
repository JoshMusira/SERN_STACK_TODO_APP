import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import navReducer from "./NavigationSlice.jsx"

export default configureStore({
    reducer: {
        user: userReducer,
        sidebar: navReducer,
    }
});