import { useFormContext } from "react-hook-form";
import { type ProfileFormInput } from "../schemas/user.profile";
import { useAppSelector } from "../../../hooks/userAppSelector";
type ProfileHeaderProps = {
    formManagement: {
        isFormEditable: boolean;
    };
};

function ProfileDetails({ formManagement }: ProfileHeaderProps) {
    const { isFormEditable } = formManagement;

    const {
        register: registerField,
        formState: { errors },
        getValues,
    } = useFormContext<ProfileFormInput>();

    const user = useAppSelector((state) => state.user);

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

            {/* Personal Information */}
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                    Personal Information
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">

                    {/* First Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-xs uppercase font-semibold text-text-muted">
                            First Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            readOnly={!isFormEditable}
                            {...registerField("firstName")}
                            aria-invalid={!!errors.firstName}
                            className={`${getErrorInputClass(!!errors.firstName)} placeholder:text-xs`}
                        />

                        {errors.firstName && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-xs uppercase font-semibold text-text-muted">
                            Last Name
                        </label>

                        <input
                            id="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            readOnly={!isFormEditable}
                            {...registerField("lastName")}
                            aria-invalid={!!errors.lastName}
                            className={`${getErrorInputClass(!!errors.lastName)} placeholder:text-xs`}
                        />

                        {errors.lastName && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-semibold text-text-muted">
                            Email Address
                        </label>

                        <div className="bg-slate-100 h-[42px] px-3 border rounded-lg border-slate-200 flex items-center text-xs text-text-muted">
                            {user?.email ?? "Enter your email address"}
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs uppercase font-semibold text-text-muted">
                            Phone Number <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
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

                    {/* Date of Birth */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="dateOfBirth" className="text-xs uppercase font-semibold text-text-muted">
                            Date of Birth
                        </label>

                        <input
                            id="dateOfBirth"
                            type="date"
                            readOnly={!isFormEditable}
                            {...registerField("dateOfBirth")}
                            aria-invalid={!!errors.dateOfBirth}
                            className={getErrorInputClass(!!errors.dateOfBirth)}
                        />

                        {errors.dateOfBirth && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.dateOfBirth.message}
                            </p>
                        )}
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="gender" className="text-xs uppercase font-semibold text-text-muted">
                            Gender
                        </label>

                        {isFormEditable ? (
                            <select
                                id="gender"
                                {...registerField("gender")}
                                aria-invalid={!!errors.gender}
                                className={`${inputClass} cursor-pointer`}
                            >
                                <option value="">Select your gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                        ) : (
                            <div className="bg-slate-100 h-[42px] px-3 border rounded-lg border-slate-200 flex items-center text-xs text-text-muted">
                                {String(getValues("gender") || "Not specified")}
                            </div>
                        )}

                        {errors.gender && (
                            <p className="text-xs text-red-600" role="alert">
                                {errors.gender.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="p-3 pt-4 pb-6 lg:p-6 rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h2 className="mb-3 lg:mb-6 text-sm font-bold text-text">
                    Address
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">

                    {/* Street Address */}
                    <div className="flex flex-col col-span-1 lg:col-span-2 gap-2">
                        <label htmlFor="streetAddress" className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            Street Address
                            <span className="font-light normal-case">(optional)</span>
                        </label>

                        <input
                            id="streetAddress"
                            type="text"
                            placeholder="Enter your street address"
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
                        <label htmlFor="city" className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            City
                            <span className="font-light normal-case">(optional)</span>
                        </label>

                        <input
                            id="city"
                            type="text"
                            placeholder="Enter your city"
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
                        <label htmlFor="state" className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            State / Province
                            <span className="font-light normal-case">(optional)</span>
                        </label>

                        <input
                            id="state"
                            type="text"
                            placeholder="Enter your state or province"
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
                        <label htmlFor="country" className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            Country
                            <span className="font-light normal-case">(optional)</span>
                        </label>

                        <input
                            id="country"
                            type="text"
                            placeholder="Enter your country"
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
                        <label htmlFor="postalCode" className="text-xs uppercase font-semibold text-text-muted flex gap-1">
                            Postal Code
                            <span className="font-light normal-case">(optional)</span>
                        </label>

                        <input
                            id="postalCode"
                            type="text"
                            placeholder="Enter your postal code"
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
        </div>
    );
}


export default ProfileDetails;