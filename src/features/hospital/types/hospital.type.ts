export type HospitalStatus = "ALL" | "ACTIVE" | "INACTIVE";

export type StatusOption = {
    label: string;
    value: HospitalStatus;
};

export type SortByOptions = {
    label: string;
    value: "created_at" | "name" | "city";
}

export type SortOrderOptions = {
    label: string;
    value: "ASC" | "DESC";
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

export type Location = {
    latitude: number;
    longitude: number;
};

export type LocationPickerProps = {
    currentLocation?: Location,
    onClose: () => void;
    onLocationSelect: (location: Location) => void;
};

export type LocationMarkerProps = {
    initialPosition?: Location,
    onLocationSelect: (location: Location) => void;
    setInitialPosition: React.Dispatch<React.SetStateAction<Location>>;
};

export type LocationSearchProps = {
    setInitialPosition: React.Dispatch<React.SetStateAction<Location>>;
    onLocationSelect: (location: Location) => void;
};

export interface HospitalQueryParams {
    page: number;
    limit: number;
    search?: string;
    status: "ALL" | "ACTIVE" | "INACTIVE";
    sortBy: "name" | "city" | "created_at";
    sortOrder: "ASC" | "DESC";
}