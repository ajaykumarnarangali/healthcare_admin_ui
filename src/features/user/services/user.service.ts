import { api } from "../../../services/api";

export async function getUserProfile() {
    const response = await api.get("/user/profile");
    return response.data;
}

export async function createUserProfile(data: FormData) {
    const response = await api.post("/user/profile", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}

export async function updateUserProfile(data: FormData) {
    const response = await api.patch("/user/profile", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}