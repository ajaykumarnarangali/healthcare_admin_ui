import type {
    HospitalAdminSidebarGroup,
    GlobalAdminSidebarGroup
} from "../types/navigation";

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
                },
                {
                    id: 'departments',
                    label: 'Departments',
                    path: '/hospital-admin/departments',
                    Icon: IconHospital,
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
                },
                {
                    id: 'doctor-assignments',
                    label: 'Doctor Assignments',
                    path: '/hospital-admin/doctor-assignments',
                    Icon: IconDoctor,
                },
                {
                    id: 'schedules',
                    label: 'Schedules',
                    path: '/hospital-admin/schedules',
                    Icon: IconCalendar,
                },
                {
                    id: 'leaves',
                    label: 'Leaves',
                    path: '/hospital-admin/leaves',
                    Icon: IconCalendar,
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
                },
                {
                    id: 'payments',
                    label: 'Payments',
                    path: '/hospital-admin/payments',
                    Icon: IconCreditCard,
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
                },
                {
                    id: 'settings',
                    label: 'Settings',
                    path: '/hospital-admin/settings',
                    Icon: IconSettings,
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
                },
                {
                    id: 'hospital-admins',
                    label: 'Hospital Admins',
                    path: '/global-admin/hospital-admins',
                    Icon: IconUser,
                },
                {
                    id: 'doctors',
                    label: 'Doctors',
                    path: '/global-admin/doctors',
                    Icon: IconDoctor,
                },
                {
                    id: 'patients',
                    label: 'Patients',
                    path: '/global-admin/patients',
                    Icon: IconUser,
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
                },
                {
                    id: 'payments',
                    label: 'Payments',
                    path: '/global-admin/payments',
                    Icon: IconCreditCard,
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
                },
            ],
        },
    ];
}