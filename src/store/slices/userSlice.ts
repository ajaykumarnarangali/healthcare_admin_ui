import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "../../types/auth";

const initialState: UserState = {
    name: null,
    email: null,
    role: null,
    profileImage: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.profileImage = action.payload.profileImage;
        },

        clearUser: (state) => {
            state.name = null;
            state.email = null;
            state.role = null;
            state.profileImage = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;