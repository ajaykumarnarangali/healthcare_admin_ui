import { api } from "../../../services/api";

export async function createHospital(data: FormData) {
    const response = await api.post("/hospitals", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}

export async function updateHospital(data: FormData, hospitalId: string) {
    const response = await api.patch(`/hospitals/${hospitalId}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}

export async function getHospital(hospitalId: string) {
    const response = await api.get(`/hospitals/${hospitalId}`);

    return response.data;
}