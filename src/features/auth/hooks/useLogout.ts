import { toast } from "sonner";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../services/auth.service";
import { useAppDispatch } from "../../../hooks/useAppDispatch ";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import { clearPermissions, clearUser, logout } from "../../../store/slices";

export function useLogOut() {

    const [isLoading, setIsLoading] = useState(false);
    const isLoggingOut = useRef(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function delay(ms: number) {
        return new Promise<void>((resolve) => setTimeout(resolve, ms));
    }

    async function signout() {
        if (isLoggingOut.current) return;
        isLoggingOut.current = true;
        setIsLoading(true);
        try {
            await Promise.all([
                signOut(),
                delay(1000),
            ]);
        } catch (error) {
            toast.error(getApiErrorMessage(error));
        } finally {
            dispatch(clearPermissions());
            dispatch(clearUser());
            dispatch(logout());
            navigate("/", { replace: true });
            isLoggingOut.current = true;
            setIsLoading(false);
        }
    }

    return {
        signout, isLoading
    }
}