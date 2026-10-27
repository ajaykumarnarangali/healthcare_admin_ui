export type userRoles = "HOSPITAL_ADMIN" | "GLOBAL_ADMIN";

export const roleRoutes: Record<userRoles, string> = {
    HOSPITAL_ADMIN: "/hospital-admin/dashboard",
    GLOBAL_ADMIN: "/global-admin/dashboard",
};

export type LoginData = {
    email: string,
    password: string
}

