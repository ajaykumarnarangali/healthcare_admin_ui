import { createSlice } from "@reduxjs/toolkit";
import type { PermissionState } from "../../types/auth";

const initialState: PermissionState = {
    permissions: [],
};

const permissionSlice = createSlice({
    name: "permissions",
    initialState,
    reducers: {
        setPermissions: (state, action) => {
            state.permissions = action.payload.permissions;
        },

        clearPermissions: (state) => {
            state.permissions = [];
        },
    },
});

export const { setPermissions, clearPermissions } = permissionSlice.actions;

export default permissionSlice.reducer;