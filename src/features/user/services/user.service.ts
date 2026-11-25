import { api } from "../../../services/api";
import type { InviteFormOutput } from "../schemas/admin.invite";
import type { UserQueryParams } from "../types/user.type";

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

export async function getUsersByQuery(query: UserQueryParams, signal: AbortSignal) {
    const response = await api.get("/user/", {
        params: query,
        signal
    });
    return response.data;
}

export async function sentInvitation(data: InviteFormOutput) {
    const response = await api.post("/user/invitations/hospital-admin", data);
    return response.data;
}