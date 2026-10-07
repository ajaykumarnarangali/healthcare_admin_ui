import type { RouteObject } from "react-router-dom";
import HospitalAdminLayout from "../layouts/HospitalAdminLayout";
import HospitalAdminDashboard from "../features/dashboard/pages/HospitalAdminDashboard";

const hospitalAdminRoutes: RouteObject[] = [
    {
        element: <HospitalAdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <HospitalAdminDashboard />,
            },
            {
                path: "hospital",
                element: <div>My Hospital</div>,
            },
            {
                path: "departments",
                element: <div>Departments</div>,
            },
            {
                path: "doctors",
                element: <div>Doctors</div>,
            },
            {
                path: "doctor-assignments",
                element: <div>Doctor Assignments</div>,
            },
            {
                path: "schedules",
                element: <div>Schedules</div>,
            },
            {
                path: "leaves",
                element: <div>Leaves</div>,
            },
            {
                path: "appointments",
                element: <div>Appointments</div>,
            },
            {
                path: "payments",
                element: <div>Payments</div>,
            },
            {
                path: "notifications",
                element: <div>Notifications</div>,
            },
            {
                path: "profile",
                element: <div>My Profile</div>,
            },
            {
                path: "settings",
                element: <div>Settings</div>,
            },
        ],
    },
];

export default hospitalAdminRoutes;