import React from 'react'

type HDetailsProps = {
    formManagement: {
        isFormEditable: boolean;
    };
};
function HospitalFormDetails({ formManagement }: HDetailsProps) {
    const { isFormEditable } = formManagement;

    const inputClass = `h-[42px] w-full px-3 border rounded-lg outline-none text-xs ${isFormEditable
        ? "bg-bg border-slate-200 focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
        : "bg-slate-100 border-slate-200 text-text-muted cursor-default"
        }`;

    const getErrorInputClass = (hasError: boolean) =>
        `${inputClass} ${hasError
            ? "border-red-500 focus:ring-2 focus:ring-red-500/10"
            : ""
        }`;

    return (
        <div className="w-full flex flex-col gap-4 pb-6">

            {/* Hospital Information */}
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                    Hospital Information
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">

                    {/* Hospital Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="hospitalName" className="text-xs uppercase font-semibold text-text-muted">
                            Hospital Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="hospitalName"
                            type="text"
                            placeholder="Enter hospital name"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs uppercase font-semibold text-text-muted">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter hospital email"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs uppercase font-semibold text-text-muted">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Enter hospital phone number"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* Website */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="website" className="text-xs uppercase font-semibold text-text-muted">
                            Website
                        </label>
                        <input
                            id="website"
                            type="url"
                            placeholder="Enter hospital website"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* Hospital Status */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="status" className="text-xs uppercase font-semibold text-text-muted">
                            Hospital Status <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="status"
                            disabled={!isFormEditable}
                            defaultValue="ACTIVE"
                            className={`${getErrorInputClass(false)} cursor-pointer disabled:cursor-not-allowed`}
                        >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col md:col-span-2 gap-2">
                        <label htmlFor="description" className="text-xs uppercase font-semibold text-text-muted">
                            Hospital Description
                        </label>
                        <textarea
                            id="description"
                            rows={4}
                            placeholder="Enter hospital description"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} h-auto py-3 placeholder:text-xs resize-none`}
                        />
                    </div>

                </div>
            </div>

            {/* Address */}
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                    Hospital Address
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">

                    {/* Street Address */}
                    <div className="flex flex-col col-span-1 md:col-span-2 gap-2">
                        <label htmlFor="streetAddress" className="text-xs uppercase font-semibold text-text-muted">
                            Street Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="streetAddress"
                            type="text"
                            placeholder="Enter street address"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-xs uppercase font-semibold text-text-muted">
                            City <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="city"
                            type="text"
                            placeholder="Enter city"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* State */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="state" className="text-xs uppercase font-semibold text-text-muted">
                            State / Province <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="state"
                            type="text"
                            placeholder="Enter state or province"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="country" className="text-xs uppercase font-semibold text-text-muted">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="country"
                            type="text"
                            placeholder="Enter country"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                    {/* Postal Code */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="postalCode" className="text-xs uppercase font-semibold text-text-muted">
                            Postal Code
                        </label>
                        <input
                            id="postalCode"
                            type="text"
                            placeholder="Enter postal code"
                            readOnly={!isFormEditable}
                            className={`${getErrorInputClass(false)} placeholder:text-xs`}
                        />
                    </div>

                </div>
            </div>

            {/* Hospital Location */}
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                    Hospital Location
                </h2>

                <div className="flex flex-col gap-3">
                    <div>
                        <label className="text-xs uppercase font-semibold text-text-muted">
                            Map Location
                        </label>
                        <p className="text-xs text-text-muted mt-1">
                            Select the exact location of your hospital on the map.
                        </p>
                    </div>

                    <button
                        type="button"
                        disabled={!isFormEditable}
                        className="w-fit flex items-center gap-2 text-[13px] font-semibold text-primary border border-primary rounded-lg px-4 py-[10px] hover:bg-primary hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Pick Hospital Location
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HospitalFormDetails