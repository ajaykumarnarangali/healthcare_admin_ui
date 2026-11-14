
export const HOSPITAL_ADMIN_PERMISSIONS = {
    DASHBOARD: {
        VIEW: 'dashboard:view',
    },
    HOSPITAL: {
        VIEW: 'hospital:view',
        UPDATE: 'hospital:update',
    },
    DEPARTMENT: {
        VIEW: 'department:view',
        MANAGE: 'department:manage',
    },
    DOCTOR: {
        VIEW: 'doctor:view',
    },
    DOCTOR_ASSIGNMENT: {
        VIEW: 'doctor_assignment:view',
        MANAGE: 'doctor_assignment:manage',
    },
    SCHEDULE: {
        VIEW: 'schedule:view',
        MANAGE: 'schedule:manage',
    },
    LEAVE: {
        VIEW: 'leave:view',
        MANAGE: 'leave:manage',
    },
    APPOINTMENT: {
        VIEW: 'appointment:view',
        MANAGE: 'appointment:manage',
    },
    PAYMENT: {
        VIEW: 'payment:view',
        MANAGE: 'payment:manage',
    },
    NOTIFICATION: {
        VIEW: 'notification:view',
        MANAGE: 'notification:manage',
    },
    PROFILE: {
        VIEW: 'profile:view',
        UPDATE: 'profile:update',
    },
    SETTINGS: {
        VIEW: 'settings:view',
        UPDATE: 'settings:update',
    },
} as const;



export const GLOBAL_ADMIN_PERMISSIONS = {
    DASHBOARD: {
        VIEW: 'dashboard:view',
    },
    HOSPITAL: {
        VIEW: 'hospital:view',
        MANAGE: 'hospital:manage',
    },
    HOSPITAL_ADMIN: {
        VIEW: 'hospital_admin:view',
        MANAGE: 'hospital_admin:manage',
    },
    DOCTOR: {
        VIEW: 'doctor:view',
        MANAGE: 'doctor:manage',
    },
    PATIENT: {
        VIEW: 'patient:view',
        MANAGE: 'patient:manage',
    },
    APPOINTMENT: {
        VIEW: 'appointment:view',
        MANAGE: 'appointment:manage',
    },
    PAYMENT: {
        VIEW: 'payment:view',
        MANAGE: 'payment:manage',
    },
    NOTIFICATION: {
        VIEW: 'notification:view',
        MANAGE: 'notification:manage',
    },
    REPORT: {
        VIEW: 'report:view',
    },
    PROFILE: {
        VIEW: 'profile:view',
        UPDATE: 'profile:update',
    },
    SETTINGS: {
        VIEW: 'settings:view',
        UPDATE: 'settings:update',
    },
} as const;
