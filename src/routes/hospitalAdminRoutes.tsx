import type { RouteObject } from "react-router-dom";
import HospitalAdminLayout from "../layouts/HospitalAdminLayout";
import HospitalAdminDashboard from "../features/dashboard/pages/HospitalAdminDashboard";

const globalAdminRoutes: RouteObject[] = [
    {
        element: <HospitalAdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <HospitalAdminDashboard />,
            }
        ],
    },
];

export default globalAdminRoutes;