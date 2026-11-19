import type { RouteObject } from "react-router-dom";
import GlobalAdminLayout from "../layouts/GlobalAdminLayout";
import GlobalAdminDashboard from "../features/dashboard/pages/GlobalAdminDashboard";
import ProfileManagement from "../features/user/pages/ProfileManagement";
import HospitalManagement from "../features/hospital/pages/HospitalManagement";
import CreateHospitalPage from "../features/hospital/pages/CreateHospitalPage";
import EditHospitalPage from "../features/hospital/pages/EditHospitalPage";
import HospitalAdminsManagement from "../features/user/pages/HospitalAdminManagement";
import DoctorsManagement from "../features/user/pages/DoctorManagement";
import PatientsManagement from "../features/user/pages/PatientManagement";
import InviteAdmin from "../features/user/pages/InviteAdmin";
import RouteGuard from "./RouteGuard";
import { GLOBAL_ADMIN_PERMISSIONS } from "../constants/permissions";

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
                        element: (
                            <RouteGuard
                                allowedRoles={["GLOBAL_ADMIN"]}
                                requiredPermissions={[
                                    GLOBAL_ADMIN_PERMISSIONS.HOSPITAL.MANAGE,
                                ]}
                            />
                        ),
                        children: [
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
                ],
            },
            {
                path: "hospital-admins",
                children: [
                    {
                        index: true,
                        element: <HospitalAdminsManagement />,
                    },
                    {
                        element: (
                            <RouteGuard
                                allowedRoles={["GLOBAL_ADMIN"]}
                                requiredPermissions={[
                                    GLOBAL_ADMIN_PERMISSIONS.HOSPITAL_ADMIN.MANAGE,
                                ]}
                            />
                        ),
                        children: [
                            {
                                path: "invite",
                                element: <InviteAdmin />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "doctors",
                element: <DoctorsManagement />,
            },
            {
                path: "patients",
                element: <PatientsManagement />,
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