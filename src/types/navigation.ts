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
    badge?: number;
};

export type GlobalAdminSidebarGroup = {
    label: string;
    items: GlobalAdminSidebarItem[];
};