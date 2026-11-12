import { api } from "../../../services/api";

export async function createHospital(data: FormData) {
    const response = await api.post("/hospitals", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}