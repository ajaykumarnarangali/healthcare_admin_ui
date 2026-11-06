
interface LoaderProps {
    message?: string;
    fullPage?: boolean;
}

function Loader({
    message = "Please wait, loading...",
    fullPage = false,
}: LoaderProps) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={`
                flex items-center justify-center
                ${fullPage ? "min-h-[70vh]" : "min-h-[250px] w-full"}
            `}
        >
            <div className="flex flex-col items-center gap-4 rounded-xl bg-white px-10 py-8">
                {/* Spinner */}
                <div className="relative flex h-12 w-12 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-[3px] border-[#d6eaf8]" />

                    <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#1a5276]" />

                    <div className="h-2.5 w-2.5 rounded-full bg-[#0e8470]" />
                </div>

                {/* Loading text */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-sm font-semibold text-[#1c2833]">
                        {message}
                    </p>

                    <p className="text-xs text-[#5d6d7e]">
                        This will only take a moment
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Loader;
