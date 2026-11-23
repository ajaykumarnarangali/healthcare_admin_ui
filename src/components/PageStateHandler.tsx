import type { ReactNode } from "react";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";

interface PageStateHandlerProps {
    isLoading: boolean;
    error: string | null;
    onRetry?: () => void;
    children: ReactNode;
    minHeight?: boolean;
}

export default function PageStateHandler({
    isLoading,
    error,
    onRetry,
    children,
    minHeight = true,
}: PageStateHandlerProps) {
    const containerClass = `w-full flex items-center justify-center ${minHeight ? "min-h-[70vh]" : ""
        }`;

    if (isLoading) {
        return (
            <div className={containerClass}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={containerClass}>
                <ErrorDisplay message={error} onRetry={onRetry} />
            </div>
        );
    }

    return <>{children}</>;
}