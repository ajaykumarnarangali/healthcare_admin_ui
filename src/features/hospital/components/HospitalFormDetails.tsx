import { useFormContext } from 'react-hook-form';
import type { HospitalFormInput } from '../schemas/hospital.schema';
import LocationPicker from './LocationPicker';
import { useRef, useState } from 'react';

type HDetailsProps = {
    formManagement: {
        isFormEditable: boolean;
    };
};
function HospitalFormDetails({ formManagement }: HDetailsProps) {
    const { isFormEditable } = formManagement;
    const {
        register: registerField,
        formState: { errors }
    } = useFormContext<HospitalFormInput>();

    const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
    const ContainerRef = useRef<HTMLDivElement>(null);

    const inputClass = `h-[42px] w-full px-3 border rounded-lg outline-none text-xs ${isFormEditable
        ? "bg-bg border-slate-200 focus:border-[#1a5276] focus:ring-2 focus:ring-[#1a5276]/10"
        : "bg-slate-100 border-slate-200 text-text-muted cursor-default"
        }`;

    const getErrorInputClass = (hasError: boolean) =>
        `${inputClass} ${hasError
            ? "border-red-500 focus:ring-2 focus:ring-red-500/10"
            : ""
        }`;

    function handleLocationSelect(data: any) {
        console.log(data);
    }

    function handleOpenMap() {
        setIsMapOpen(true);

        requestAnimationFrame(() => {
            ContainerRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        });
    }

    function handleCloseMap() {
        setIsMapOpen(false);
    }

    return (
        <div ref={ContainerRef} className="w-full relative flex flex-col gap-4 pb-6">

            {/* Hospital Information */}
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                    Hospital Information
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">

                    {/* Hospital Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs uppercase font-semibold text-text-muted">
                            Hospital Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter hospital name"
                            readOnly={!isFormEditable}
                            {...registerField("name")}
                            aria-invalid={!!errors.name}
                            className={`${getErrorInputClass(!!errors.name)} placeholder:text-xs`}
                        />
                        {errors.name && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.name.message}
                            </p>
                        )}
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
                            {...registerField("email")}
                            aria-invalid={!!errors.email}
                            className={`${getErrorInputClass(!!errors.email)} placeholder:text-xs`}
                        />
                        {errors.email && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.email.message}
                            </p>
                        )}
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
                            {...registerField("phone")}
                            aria-invalid={!!errors.phone}
                            className={`${getErrorInputClass(!!errors.phone)} placeholder:text-xs`}
                        />
                        {errors.phone && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.phone.message}
                            </p>
                        )}
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
                            {...registerField("website")}
                            aria-invalid={!!errors.website}
                            className={`${getErrorInputClass(!!errors.website)} placeholder:text-xs`}
                        />

                        {errors.website && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.website.message}
                            </p>
                        )}
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
                            {...registerField("description")}
                            aria-invalid={!!errors.description}
                            className={`${getErrorInputClass(!!errors.description)} h-auto py-3 placeholder:text-xs resize-none`}
                        />
                        {errors.description && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.description.message}
                            </p>
                        )}
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
                            {...registerField("streetAddress")}
                            aria-invalid={!!errors.streetAddress}
                            className={`${getErrorInputClass(!!errors.streetAddress)} placeholder:text-xs`}
                        />
                        {errors.streetAddress && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.streetAddress.message}
                            </p>
                        )}
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
                            {...registerField("city")}
                            aria-invalid={!!errors.city}
                            className={`${getErrorInputClass(!!errors.city)} placeholder:text-xs`}
                        />
                        {errors.city && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.city.message}
                            </p>
                        )}
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
                            {...registerField("state")}
                            aria-invalid={!!errors.state}
                            className={`${getErrorInputClass(!!errors.state)} placeholder:text-xs`}
                        />
                        {errors.state && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.state.message}
                            </p>
                        )}
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
                            {...registerField("country")}
                            aria-invalid={!!errors.country}
                            className={`${getErrorInputClass(!!errors.country)} placeholder:text-xs`}
                        />
                        {errors.country && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.country.message}
                            </p>
                        )}
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
                            {...registerField("postalCode")}
                            aria-invalid={!!errors.postalCode}
                            className={`${getErrorInputClass(!!errors.postalCode)} placeholder:text-xs`}
                        />
                        {errors.postalCode && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.postalCode.message}
                            </p>
                        )}
                    </div>

                </div>
            </div>

            {/* Hospital Location */}
            <div
                className={`p-3 relative overflow-hidden pt-4 pb-6 mb-6 lg:p-6 rounded-xl border
                            border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)] 
                            transition-all duration-1000 ease-in-out ${isMapOpen ? "h-[400px]" : "h-auto"
                    }`}
            >
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
                        onClick={handleOpenMap}
                        disabled={!isFormEditable}
                        className="w-fit flex items-center gap-2 text-[13px] font-semibold text-primary border border-primary rounded-lg px-4 py-[10px] hover:bg-primary hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Pick Hospital Location
                    </button>
                </div>
                {isMapOpen && (
                    <div className="absolute inset-0 z-50">
                        <LocationPicker
                            onLocationSelect={handleLocationSelect}
                            onClose={handleCloseMap}
                        />
                    </div>

                )}
            </div>
        </div >
    )
}

export default HospitalFormDetails