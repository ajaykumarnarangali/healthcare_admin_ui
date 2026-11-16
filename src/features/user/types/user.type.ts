export interface UserProfileResponse {
    city: string;
    country: string;
    dateOfBirth: string;
    firstName: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    lastName: string;
    phone: string;
    postalCode: string;
    profileCompleted: boolean;
    profilePhoto: string | null;
    profilePhotoPublicId: string | null;
    state: string;
    streetAddress: string;
    userId: string;
}

export type ManagedUserRole =
    | "PATIENT"
    | "DOCTOR"
    | "HOSPITAL_ADMIN";

export type ManagedUserFilterStatus = "ALL" | "ACTIVE" | "INACTIVE";

export type StatusOption = {
    label: string;
    value: ManagedUserFilterStatus;
};

export type SortOrderOptions = {
    label: string;
    value: "ASC" | "DESC";
};

export type LimitOption = {
    label: string;
    value: number;
};

export interface UserQueryParams {
    page: number;
    limit: number;
    search?: string;
    status: "ALL" | "ACTIVE" | "INACTIVE";
    sortOrder: "ASC" | "DESC";
}

export type Pagination = {
    totalRecords: number;
    totalQueryMatchRecords: number;
    totalPages: number;
    currentPage: number;
    limit: number;
};

// response type for managed user

export interface Doctor {
    id: string;
    firstName: string;
    lastName: string;
    speciality: string;
    isLicenseVerified: boolean;
    isProfileCompleted: boolean;
    hospitalAffiliations: string[];
    status: "ACTIVE" | "INACTIVE";
}

export interface HospitalAdmin {
    id: string;
    firstName: string;
    lastName: string;
    email: string,
    phone: string,
    assignedHospital: string,
    isProfileCompleted: boolean
    status: "ACTIVE" | "INACTIVE";
}

export interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    registeredAt: string;
    appointmentCount: number;
    status: "ACTIVE" | "INACTIVE";
}