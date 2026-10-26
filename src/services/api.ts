import axios from "axios";
import { store } from "../store/store";
import {
    logout,
    clearUser,
    setAccessToken,
    clearPermissions
} from "../store/slices";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        if (config.requiresAuth !== false) {
            const token = store.getState().auth.accessToken;

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (!originalRequest) {
            return Promise.reject(error);
        }

        if (error.response?.status !== 401) {
            return Promise.reject(error);
        }

        const url = originalRequest.url;

        if (
            url?.includes("/auth/login") ||
            url?.includes("/auth/refresh")
        ) {
            if (
                url?.includes("/auth/refresh") &&
                error.response?.status === 401
            ) {
                store.dispatch(logout());
                store.dispatch(clearUser());
                store.dispatch(clearPermissions());
            }

            return Promise.reject(error);
        }

        if (originalRequest._retry) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        let newToken: string;

        try {
            const res = await api.post("/auth/refresh", {});
            newToken = res.data?.data?.accessToken;

            if (typeof newToken !== "string" || !newToken) {
                throw new Error("Invalid refresh response");
            }

            store.dispatch(setAccessToken(newToken));
        } catch (err) {
            if (
                axios.isAxiosError(err) &&
                err.response?.status === 401
            ) {
                store.dispatch(logout());
                store.dispatch(clearUser());
                store.dispatch(clearPermissions());
            }

            return Promise.reject(err);
        }

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
    }
);