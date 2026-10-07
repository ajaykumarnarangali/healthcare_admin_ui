import type { RouteObject } from "react-router-dom";
import GlobalAdminLayout from "../layouts/GlobalAdminLayout";
import GlobalAdminDashboard from "../features/dashboard/pages/GlobalAdminDashboard";

const globalAdminRoutes: RouteObject[] = [
    {
        element: <GlobalAdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <GlobalAdminDashboard />,
            },
            {
                path: "hospitals",
                element: <div>Hospitals</div>,
            },
            {
                path: "hospital-admins",
                element: <div>Hospital Admins</div>,
            },
            {
                path: "doctors",
                element: <div>Doctors</div>,
            },
            {
                path: "patients",
                element: <div>Patients</div>,
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
                path: "reports",
                element: <div>Reports</div>,
            },
            {
                path: "settings",
                element: <div>Settings</div>,
            },
        ],
    },
];

export default globalAdminRoutes;