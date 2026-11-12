import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { ProtectedRouteProps } from "../types/auth";
import { roleRoutes } from "../features/auth/types/auth.types";
import SessionLoader from "../components/SessionLoader";

function ProtectedRoute({ allowedRole }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useSelector(
        (state: RootState) => state.auth
    );
    const { role } = useSelector(
        (state: RootState) => state.user
    );

    if (isLoading) {
        return <SessionLoader />
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (!role || !(role in roleRoutes)) {
        return <Navigate to="/" replace />;
    }

    if (role !== allowedRole) {
        return (
            <Navigate
                to={roleRoutes[role]}
                replace
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;