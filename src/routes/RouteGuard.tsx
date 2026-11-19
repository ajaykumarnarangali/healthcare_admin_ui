import { Navigate, Outlet } from "react-router-dom";
import type { userRoles } from "../features/auth/types/auth.types";
import { usePermission } from "../hooks/usePermission";
import { useAppSelector } from "../hooks/userAppSelector";

interface RouteGuardProps {
    allowedRoles?: userRoles[];
    requiredPermissions?: string[];
}
function RouteGuard({
    allowedRoles,
    requiredPermissions,
}: RouteGuardProps) {
    const currentUserRole = useAppSelector((state) => state.user.role);
    const { hasAllPermissions } = usePermission();

    const hasAllowedRole =
        !allowedRoles || allowedRoles.includes(currentUserRole as userRoles);

    const hasRequiredPermissions =
        !requiredPermissions || hasAllPermissions(requiredPermissions);

    if (!hasAllowedRole || !hasRequiredPermissions) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default RouteGuard