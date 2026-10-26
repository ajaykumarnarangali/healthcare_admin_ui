import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../store/slices/authSlice";
import userReducer from "../store/slices/userSlice";
import permissionReducer from "../store/slices/permissionSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        permissions: permissionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;