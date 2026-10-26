import { api } from "../../../services/api";
import type { LoginData } from "../schemas/auth.schema";

export async function loginUser(data: LoginData) {
    const response = await api.post("/auth/login", data, {
        requiresAuth: false,
    });

    return response.data;
}

export async function refreshToken() {
    const response = await api.post("/auth/refresh", {}, {
        requiresAuth: false,
    });

    return response.data;
}

export async function getCurrentUser() {
    const response = await api.get("/auth/me");
    return response.data;
}