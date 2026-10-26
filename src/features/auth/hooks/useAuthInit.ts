import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch ";
import { refreshToken, getCurrentUser } from "../services/auth.service";
import {
    logout,
    setUser,
    setAccessToken,
    setCredentials,
    setPermissions,
    setAuthLoading,
    setAuthenticated,
} from "../../../store/slices";


export function useAuthInit() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        initializeAuth();
    }, []);

    async function initializeAuth() {
        try {
            const refreshRes = await refreshToken();
            if (!refreshRes.success || !refreshRes.data?.accessToken) {
                dispatch(logout());
                return;
            }
            dispatch(setAccessToken({
                accessToken: refreshRes.data.accessToken
            }));

            const userRes = await getCurrentUser();

            const user = userRes.data?.user;
            const permissions = userRes.data?.permissions;
            if (
                !userRes.success ||
                !user?.userId ||
                !user.email ||
                !["HOSPITAL_ADMIN", "GLOBAL_ADMIN",].includes(user.role) ||
                !Array.isArray(permissions)
            ) {
                dispatch(logout());
                return;
            }

            dispatch(setCredentials({
                accessToken: refreshRes.data.accessToken,
                userId: userRes.data.user.userId,
            }));

            dispatch(setUser({
                name: userRes.data.user.name ?? null,
                email: userRes.data.user.email,
                role: userRes.data.user.role,
                profileImage: userRes.data.user.profile_photo ?? null,
            }));

            dispatch(setPermissions({
                permissions: userRes.data.permissions
            }));

            dispatch(setAuthenticated(true));
            dispatch(setAuthLoading(false));

        } catch (error) {
            dispatch(logout());
        }
    }
}  