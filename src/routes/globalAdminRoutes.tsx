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
            }
        ],
    },
];

export default globalAdminRoutes;