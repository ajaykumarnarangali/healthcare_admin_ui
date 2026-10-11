
function AuthHeader() {
    return (
        <div className="mb-8 flex items-center gap-[10px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            </div>

            <div>
                <div className="font-inter text-[18px] font-bold tracking-[-0.3px] text-text">
                    MediConnect
                </div>
                <div className="text-[11px] text-text-muted">
                    Patient Portal
                </div>
            </div>
        </div>
    )
}

export default AuthHeader