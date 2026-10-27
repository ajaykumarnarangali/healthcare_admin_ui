import type { ComponentType } from 'react';

type IconProps = { size?: number; className?: string; style?: React.CSSProperties };

type HospitalAdminAppSection =
    | 'dashboard'
    | 'hospital'
    | 'departments'
    | 'doctors'
    | 'doctor-assignments'
    | 'schedules'
    | 'leaves'
    | 'appointments'
    | 'payments'
    | 'notifications'
    | 'profile'
    | 'settings';

type HospitalAdminSidebarItem = {
    id: HospitalAdminAppSection;
    label: string;
    path: string;
    Icon: ComponentType<IconProps>;
    permission: HospitalAdminPermission;
    badge?: number;
};

export type HospitalAdminSidebarGroup = {
    label: string;
    items: HospitalAdminSidebarItem[];
};

type GlobalAdminAppSection =
    | 'dashboard'
    | 'hospitals'
    | 'hospital-admins'
    | 'doctors'
    | 'patients'
    | 'appointments'
    | 'payments'
    | 'notifications'
    | 'reports'
    | 'settings';

type GlobalAdminSidebarItem = {
    id: GlobalAdminAppSection;
    label: string;
    path: string;
    Icon: ComponentType<IconProps>;
    permission: GlobalAdminPermission;
    badge?: number;
};

export type GlobalAdminSidebarGroup = {
    label: string;
    items: GlobalAdminSidebarItem[];
};


export type HospitalAdminPermission =
    // Overview
    | 'dashboard:view'

    // Hospital
    | 'hospital:view'
    | 'hospital:update'
    | 'department:view'
    | 'department:manage'

    // Doctors
    | 'doctor:view'
    | 'doctor_assignment:view'
    | 'doctor_assignment:manage'
    | 'schedule:view'
    | 'schedule:manage'
    | 'leave:view'
    | 'leave:manage'

    // Management
    | 'appointment:view'
    | 'appointment:manage'
    | 'payment:view'
    | 'payment:manage'

    // Communication
    | 'notification:view'
    | 'notification:manage'

    // Account
    | 'profile:view'
    | 'profile:update'
    | 'settings:view'
    | 'settings:update';

export type GlobalAdminPermission =
    // Overview
    | 'dashboard:view'

    // Management
    | 'hospital:view'
    | 'hospital:manage'
    | 'hospital_admin:view'
    | 'hospital_admin:manage'
    | 'doctor:view'
    | 'doctor:manage'
    | 'patient:view'
    | 'patient:manage'

    // Operations
    | 'appointment:view'
    | 'appointment:manage'
    | 'payment:view'
    | 'payment:manage'

    // Communication
    | 'notification:view'
    | 'notification:manage'

    // Analytics
    | 'report:view'

    // Account
    | 'settings:view'
    | 'settings:update';