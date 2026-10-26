import type { ReactNode } from "react";
import { useAuthInit } from "../hooks/useAuthInit";

interface AuthInitializerProps {
    children: ReactNode;
}

function AuthInitializer({ children }: AuthInitializerProps) {
    useAuthInit();

    return <>{children}</>;
}

export default AuthInitializer;