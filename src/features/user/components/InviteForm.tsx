

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
                        <label htmlFor="hospitalId" className="text-xs uppercase font-semibold text-text-muted">
                            Select Hospital <span className="text-red-500">*</span>
                        </label>

                        {/* Replace with your searchable hospital dropdown */}
                        <input
                            id="hospitalId"
                            type="text"
                            placeholder="Search and select hospital"
                            // aria-invalid={!!errors.hospitalId}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />

                        {/* {errors.hospitalId && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.hospitalId.message}
                            </p>
                        )} */}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        // onClick={handleCancel}
                        className="px-5 py-[10px] text-[13px] text-text border rounded-lg border-[#E1E5EA]"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        // disabled={isSubmitting}
                        className="px-5 py-[10px] text-[13px] font-semibold text-white rounded-lg bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {/* {isSubmitting ? "Sending..." : "Send Invitation"} */}
                        Send Invitation
                    </button>
                </div>

            </div>
        </div>
    )
}

export default InviteForm