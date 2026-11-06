
interface ErrorDisplayProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}

function ErrorDisplay({
    title = "Something went wrong",
    message = "We couldn't process your request. Please try again.",
    onRetry,
}: ErrorDisplayProps) {
    return (
        <div className="w-full min-h-[250px] flex items-center justify-center p-5">
            <div className="flex flex-col items-center text-center gap-3 max-w-md">

                <div className="w-14 h-14 rounded-full bg-[#fdedec] flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c0392b"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                    </svg>
                </div>

                <h3 className="text-base font-semibold text-[#1c2833]">
                    {title}
                </h3>

                <p className="text-sm text-[#5d6d7e]">
                    {message}
                </p>

                {onRetry && (
                    <button
                        type="button"
                        onClick={onRetry}
                        className="mt-2 px-5 py-2 rounded-lg bg-[#1a5276] text-white text-sm font-medium hover:bg-[#154360] transition-colors"
                    >
                        Try Again
                    </button>
                )}
            </div>
        </div>
    );
}

export default ErrorDisplay;
