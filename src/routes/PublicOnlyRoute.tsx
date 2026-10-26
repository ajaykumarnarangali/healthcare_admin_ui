import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { roleRoutes } from "../features/auth/types/auth.types";
import SessionLoader from "../components/SessionLoader";

function PublicOnlyRoute() {
    const { isAuthenticated, isLoading } = useSelector(
        (state: RootState) => state.auth
    );
    const { role } = useSelector(
        (state: RootState) => state.user
    );

    if (isLoading) {
        return <SessionLoader />
    }

    if (isAuthenticated) {
        const destination = role ? roleRoutes[role] : undefined;

        return (
            <Navigate
                to={destination ?? "/"}
                replace
            />
        );
    }

    return <Outlet />;
}

export default PublicOnlyRoute;