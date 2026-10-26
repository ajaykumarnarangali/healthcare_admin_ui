
function SessionLoader() {
    return (
        <div
            className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white"
            role="status"
            aria-live="polite"
        >
            <div className="flex flex-col items-center gap-5">
                {/* Animated healthcare logo */}
                <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 animate-pulse rounded-2xl bg-[#1A5276]/10" />

                    <svg
                        className="relative h-7 w-7 animate-pulse"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1A5276"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                </div>

                <div className="text-center">
                    <h2 className="text-base font-semibold text-[#1A5276]">
                        Restoring your session
                    </h2>

                    <p className="mt-1 text-sm text-[#64748B]">
                        Verifying your account securely...
                    </p>
                </div>

                <div className="h-1 w-32 overflow-hidden rounded-full bg-[#DCE8EF]">
                    <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-[#1A5276]" />
                </div>
            </div>

            <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </div>
    )
}

export default SessionLoader