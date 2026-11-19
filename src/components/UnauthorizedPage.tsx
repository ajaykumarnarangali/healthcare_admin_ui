
function UnauthorizedPage() {
    return (
        <div
            className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white px-4"
            role="alert"
        >
            <div className="flex flex-col items-center gap-5 text-center">
                {/* Healthcare icon */}
                <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-[#1A5276]/10" />

                    <svg
                        className="relative h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1A5276"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-[#1A5276]">
                        Access Restricted
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#64748B]">
                        You don't have permission to access this page.
                        Please contact your administrator if you believe
                        this is a mistake.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="rounded-lg bg-[#1A5276] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#154360] focus:outline-none focus:ring-2 focus:ring-[#1A5276]/30 focus:ring-offset-2"
                >
                    Go Back
                </button>

                <p className="text-xs text-[#94A3B8]">
                    MediConnect · Secure Healthcare Platform
                </p>
            </div>
        </div>
    );
}

export default UnauthorizedPage;
