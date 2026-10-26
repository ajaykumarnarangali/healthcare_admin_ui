export interface AuthState {
    accessToken: string | null;
    userId: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export type UserState = {
    name: string | null;
    email: string | null;
    role: string | null;
    profileImage: string | null;
};

export type PermissionState = {
    permissions: string[];
}

type Role =
    | "HOSPITAL_ADMIN"
    | "GLOBAL_ADMIN";

export interface ProtectedRouteProps {
    allowedRole: Role;
}