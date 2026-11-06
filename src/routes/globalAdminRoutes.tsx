import type { RouteObject } from "react-router-dom";
import GlobalAdminLayout from "../layouts/GlobalAdminLayout";
import GlobalAdminDashboard from "../features/dashboard/pages/GlobalAdminDashboard";
import ProfileManagement from "../features/user/pages/ProfileManagement";
import HospitalManagement from "../features/hospital/pages/HospitalManagement";
import CreateHospitalPage from "../features/hospital/pages/CreateHospitalPage";
import EditHospitalPage from "../features/hospital/pages/EditHospitalPage";

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
                children: [
                    {
                        index: true,
                        element: <HospitalManagement />,
                    },
                    {
                        path: "create",
                        element: <CreateHospitalPage />,
                    },
                    {
                        path: ":hospitalId/edit",
                        element: <EditHospitalPage />,
                    },
                ],
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
                path: "profile",
                element: <ProfileManagement />
            },
            {
                path: "settings",
                element: <div>Settings</div>,
            },
        ],
    },
];

export default globalAdminRoutes;