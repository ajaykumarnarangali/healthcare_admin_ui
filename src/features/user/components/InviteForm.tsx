

function InviteForm() {

    const inputClass = `h-[42px] w-full px-3 border rounded-lg outline-none text-xs 
                        bg-slate-100 border-slate-200 text-text-muted cursor-default`;

    const getErrorInputClass = (hasError: boolean) =>
        `${inputClass} ${hasError
            ? "border-red-500 focus:ring-2 focus:ring-red-500/10"
            : ""
        }`;

    return (
        <div className="w-full">
            <div
                className="p-3 pt-4 pb-6 lg:p-6 mb-4 rounded-xl border
                        border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
            >
                <h2 className="text-base font-semibold text-text lg:mb-1">
                    Invite Hospital Admin
                </h2>
                <p className="text-[13px] text-text-muted">
                    Send an invitation to assign an administrator to a hospital.
                </p>
            </div>
            <div className="w-full flex flex-col gap-4 pb-6">

                {/* Admin Information */}
                <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                    <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                        Admin Information
                    </h2>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs uppercase font-semibold text-text-muted">
                                Full Name <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter full name"
                                // {...registerField("name")}
                                // aria-invalid={!!errors.name}
                                className={`${getErrorInputClass(false)} placeholder:text-xs`}
                            />

                            {/* {errors.name && (
                                <p className="text-xs text-red-600" role="alert">
                                    {errors.name.message}
                                </p>
                            )} */}
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs uppercase font-semibold text-text-muted">
                                Email Address <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email address"
                                // {...registerField("email")}
                                // aria-invalid={!!errors.email}
                                className={`${getErrorInputClass(false)} placeholder:text-xs`}
                            />

                            {/* {errors.email && (
                                <p className="text-xs text-red-600" role="alert">
                                    {errors.email.message}
                                </p>
                            )} */}
                        </div>

                        {/* Confirm Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirmEmail" className="text-xs uppercase font-semibold text-text-muted">
                                Confirm Email Address <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="confirmEmail"
                                type="email"
                                placeholder="Re-enter email address"
                                // {...registerField("confirmEmail")}
                                // aria-invalid={!!errors.confirmEmail}
                                className={`${getErrorInputClass(false)} placeholder:text-xs`}
                            />

                            {/* {errors.confirmEmail && (
                                <p className="text-xs text-red-600" role="alert">
                                    {errors.confirmEmail.message}
                                </p>
                            )} */}
                        </div>

                    </div>
                </div>

                {/* Hospital Assignment */}
                <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                    <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                        Hospital Assignment
                    </h2>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="hospitalSearch"
                            className="text-xs uppercase font-semibold text-text-muted"
                        >
                            Select Hospital <span className="text-red-500">*</span>
                        </label>

                        {/* Search */}
                        <div className="relative">
                            <input
                                id="hospitalSearch"
                                type="text"
                                placeholder="Search hospital by name..."
                                className="h-[42px] w-full px-3 pr-10 border border-slate-300 rounded-lg outline-none text-xs bg-white text-text placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Selected Hospital */}
                        <div className="flex items-center justify-between gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5">
                            <div className="flex items-center gap-2 min-w-0">
                                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 shrink-0">
                                    <span className="text-primary text-sm">✓</span>
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-text truncate">
                                        Aster MIMS Hospital
                                    </p>
                                    <p className="text-[11px] text-text-muted mt-0.5 truncate">
                                        Kozhikode, Kerala
                                    </p>
                                    <p className="text-[11px] text-primary font-medium mt-0.5">
                                        Selected hospital
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="text-xs font-medium text-red-500 hover:text-red-600 shrink-0"
                            >
                                Remove
                            </button>
                        </div>

                        {/* Hospital Results */}
                        <div className="mt-1 border border-slate-300 rounded-lg bg-white shadow-sm overflow-hidden">
                            <div className="max-h-60 overflow-y-auto">
                                {[
                                    "Baby Memorial Hospital",
                                    "Amrita Hospital",
                                    "Malabar Hospital",
                                ].map((hospital) => (
                                    <button
                                        key={hospital}
                                        type="button"
                                        className="w-full flex items-center justify-between px-3 py-3 text-left hover:bg-slate-50 border-b border-slate-200 last:border-b-0"
                                    >
                                        <span className="text-sm text-text">{hospital}</span>
                                        <span className="text-xs text-primary font-medium">Select</span>
                                    </button>
                                ))}
                            </div>

                            <div className="px-3 py-2 border-t border-slate-200 bg-slate-50 text-center">
                                <span className="text-xs text-text-muted">
                                    Scroll to load more hospitals
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        className="px-5 py-[10px] text-[13px] font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-5 py-[10px] text-[13px] font-semibold text-white rounded-lg bg-primary hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send Invitation
                    </button>
                </div>

            </div>
        </div>
    )
}

export default InviteForm