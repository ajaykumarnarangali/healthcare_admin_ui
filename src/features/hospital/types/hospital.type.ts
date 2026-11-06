export type HospitalStatus = "ALL" | "ACTIVE" | "INACTIVE";

export type StatusOption = {
    label: string;
    value: HospitalStatus;
};

export type LimitOption = {
    label: string;
    value: number;
};

export type Hospital = {
    id: string;
    name: string;
    adminEmail: string;
    location: string;
    status: "ACTIVE" | "INACTIVE";
    departments: number;
    doctors: number;
    admins: number;
    createdAt: string;
}