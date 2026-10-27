import type {
    HospitalAdminSidebarGroup,
    GlobalAdminSidebarGroup
} from "../types/navigation";
import type { Role } from "../types/auth";
import { store } from "../store/store";

import {
    IconDashboard,
    IconCalendar,
    IconUser,
    IconBell,
    IconCreditCard,
    IconSettings,
    IconHospital,
    IconDoctor
} from "../components/Icons";

export function getHospitalAdminSidebarData(): HospitalAdminSidebarGroup[] {
    return [
        {
            label: 'Overview',
            items: [
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    path: '/hospital-admin/dashboard',
                    Icon: IconDashboard,
                    permission: 'dashboard:view',
                },
            ],
        },
        {
            label: 'Hospital',
            items: [
                {
                    id: 'hospital',
                    label: 'My Hospital',
                    path: '/hospital-admin/hospital',
                    Icon: IconHospital,
                    permission: 'hospital:view',
                },
                {
                    id: 'departments',
                    label: 'Departments',
                    path: '/hospital-admin/departments',
                    Icon: IconHospital,
                    permission: 'department:view',
                },
            ],
        },
        {
            label: 'Doctors',
            items: [
                {
                    id: 'doctors',
                    label: 'Doctors',
                    path: '/hospital-admin/doctors',
                    Icon: IconDoctor,
                    permission: 'doctor:view',
                },
                {
                    id: 'doctor-assignments',
                    label: 'Doctor Assignments',
                    path: '/hospital-admin/doctor-assignments',
                    Icon: IconDoctor,
                    permission: 'doctor_assignment:view',
                },
                {
                    id: 'schedules',
                    label: 'Schedules',
                    path: '/hospital-admin/schedules',
                    Icon: IconCalendar,
                    permission: 'schedule:view',
                },
                {
                    id: 'leaves',
                    label: 'Leaves',
                    path: '/hospital-admin/leaves',
                    Icon: IconCalendar,
                    permission: 'leave:view',
                },
            ],
        },
        {
            label: 'Management',
            items: [
                {
                    id: 'appointments',
                    label: 'Appointments',
                    path: '/hospital-admin/appointments',
                    Icon: IconCalendar,
                    permission: 'appointment:view',
                },
                {
                    id: 'payments',
                    label: 'Payments',
                    path: '/hospital-admin/payments',
                    Icon: IconCreditCard,
                    permission: 'payment:view',
                },
            ],
        },
        {
            label: 'Communication',
            items: [
                {
                    id: 'notifications',
                    label: 'Notifications',
                    path: '/hospital-admin/notifications',
                    Icon: IconBell,
                    badge: 2,
                    permission: 'notification:view',
                },
            ],
        },
        {
            label: 'Account',
            items: [
                {
                    id: 'profile',
                    label: 'My Profile',
                    path: '/hospital-admin/profile',
                    Icon: IconUser,
                    permission: 'profile:view',
                },
                {
                    id: 'settings',
                    label: 'Settings',
                    path: '/hospital-admin/settings',
                    Icon: IconSettings,
                    permission: 'settings:view',
                },
            ],
        },
    ];
}

export function getGlobalAdminSidebarData(): GlobalAdminSidebarGroup[] {
    return [
        {
            label: 'Overview',
            items: [
                {
                    id: 'dashboard',
                    label: 'Dashboard',
                    path: '/global-admin/dashboard',
                    Icon: IconDashboard,
                    permission: 'dashboard:view',
                },
            ],
        },
        {
            label: 'Management',
            items: [
                {
                    id: 'hospitals',
                    label: 'Hospitals',
                    path: '/global-admin/hospitals',
                    Icon: IconHospital,
                    permission: 'hospital:view',
                },
                {
                    id: 'hospital-admins',
                    label: 'Hospital Admins',
                    path: '/global-admin/hospital-admins',
                    Icon: IconUser,
                    permission: 'hospital_admin:view',
                },
                {
                    id: 'doctors',
                    label: 'Doctors',
                    path: '/global-admin/doctors',
                    Icon: IconDoctor,
                    permission: 'doctor:view',
                },
                {
                    id: 'patients',
                    label: 'Patients',
                    path: '/global-admin/patients',
                    Icon: IconUser,
                    permission: 'patient:view',
                },
            ],
        },
        {
            label: 'Operations',
            items: [
                {
                    id: 'appointments',
                    label: 'Appointments',
                    path: '/global-admin/appointments',
                    Icon: IconCalendar,
                    permission: 'appointment:view',
                },
                {
                    id: 'payments',
                    label: 'Payments',
                    path: '/global-admin/payments',
                    Icon: IconCreditCard,
                    permission: 'payment:view',
                },
            ],
        },
        {
            label: 'Communication',
            items: [
                {
                    id: 'notifications',
                    label: 'Notifications',
                    path: '/global-admin/notifications',
                    Icon: IconBell,
                    badge: 2,
                    permission: 'notification:view',
                },
            ],
        },
        {
            label: 'Analytics',
            items: [
                {
                    id: 'reports',
                    label: 'Reports',
                    path: '/global-admin/reports',
                    Icon: IconDashboard,
                    permission: 'report:view',
                },
            ],
        },
        {
            label: 'Account',
            items: [
                {
                    id: 'settings',
                    label: 'Settings',
                    path: '/global-admin/settings',
                    Icon: IconSettings,
                    permission: 'settings:view',
                },
            ],
        },
    ];
}

export function getPermittedSidebarGroups(role: Role) {

    const initialSidebarData =
        role === 'GLOBAL_ADMIN'
            ? getGlobalAdminSidebarData()
            : getHospitalAdminSidebarData();

    const permissions = store.getState().permissions.permissions;
    const userPermission = new Set(permissions);

    type sidebarGroup<T extends Role> =
        T extends 'GLOBAL_ADMIN'
        ? GlobalAdminSidebarGroup
        : HospitalAdminSidebarGroup;

    const permittedSideBarGroups = initialSidebarData.reduce<sidebarGroup<Role>[]>((result, group) => {
        const items = group.items.filter(
            (item) =>
                !item.permission ||
                userPermission.has(item.permission)
        );

        if (items.length > 0) {
            result.push({ ...group, items } as sidebarGroup<Role>);
        }

        return result;
    }, []);

    return initialSidebarData;
}