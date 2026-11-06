
import type { ReactNode } from "react";
import Loader from "./Loader";
import ErrorDisplay from "./ErrorDisplay";

interface PageStateHandlerProps {
    isLoading: boolean;
    error: string | null;
    onRetry?: () => void;
    children: ReactNode;
}

function PageStateHandler({
    isLoading,
    error,
    onRetry,
    children,
}: PageStateHandlerProps) {
    if (isLoading) {
        return (
            <div className="w-full min-h-[70vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-[70vh] flex items-center justify-center">
                <ErrorDisplay
                    message={error}
                    onRetry={onRetry}
                />
            </div>
        );
    }

    return <>{children}</>;
}

export default PageStateHandler;
