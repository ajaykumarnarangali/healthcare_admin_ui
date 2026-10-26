import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { UseFormReset } from "react-hook-form";
import { loginUser } from "../services/auth.service";
import { type LoginData } from "../schemas/auth.schema";
import { roleRoutes } from "../types/auth.types";
import { useAppDispatch } from "../../../hooks/useAppDispatch ";
import { setCredentials, setPermissions, setUser, setAuthLoading, setAuthenticated } from "../../../store/slices"
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";

export function useLogin() {

    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function login(data: LoginData, reset: UseFormReset<LoginData>) {
        setIsLoading(true);
        setError(null);

        try {
            let res = await loginUser({
                email: data.email,
                password: data.password,
            });

            if (res.success) {
                const { data } = res;
                toast.success(res.message);

                dispatch(setCredentials({
                    userId: data.userId,
                    accessToken: data.accessToken,
                }));

                dispatch(setPermissions({
                    permissions: data.permissions
                }));

                dispatch(setUser({
                    email: data.user.email,
                    role: data.user.role,
                    name: null,
                    profileImage: null,
                }));

                dispatch(setAuthenticated(true));
                dispatch(setAuthLoading(false));
                reset();

                navigate(roleRoutes[data.user.role]);
            }
        } catch (err: unknown) {
            let message = getApiErrorMessage(err);
            setError(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        error,
        isLoading,
        login,
    };
}