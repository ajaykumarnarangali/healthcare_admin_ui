import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form';
import type { HospitalFormInput } from '../schemas/hospital.schema';


type HospitalFormHeaderProps = {
    formManagement: {
        mode: "edit" | "create"
        isFormEditable?: boolean;
        imageUrl?: string;
        // isSubmitting?: boolean,
        setFormEditable?: React.Dispatch<React.SetStateAction<boolean>>;
        handleCancel?: () => void;
    };
};
function HospitalFormHeader({ formManagement }: HospitalFormHeaderProps) {

    const { mode, isFormEditable, imageUrl, setFormEditable } = formManagement;
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const initialImage = imageUrl ?? "https://placehold.co/40x40";

    const {
        register: registerField,
        formState: { errors },
        control
    } = useFormContext<HospitalFormInput>();

    const hospitalImage = useWatch({
        control,
        name: "hospitalImage"
    });
    useEffect(() => {
        if (!hospitalImage?.length) return;

        const imageUrl = URL.createObjectURL(hospitalImage[0]);
        setPreviewUrl(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
    }, [hospitalImage]);


    return (
        <div
            className="p-3 pt-4 pb-6 lg:p-6 mb-4 rounded-xl border
                    border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]
                    flex flex-col gap-6 lg:flex-row lg:items-center justify-between"
        >
            <div className="flex gap-4 items-center">
                <div>
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                        <label
                            htmlFor="hospitalImage"
                            className="block w-full h-full cursor-pointer"
                        >
                            <img
                                src={previewUrl ?? initialImage}
                                alt="Hospital"
                                className="w-full h-full object-cover"
                            />
                        </label>
                        {(mode === "create" || (mode === "edit" && isFormEditable)) && (
                            <input
                                type="file"
                                id="hospitalImage"
                                accept=".jpg,.jpeg,.png,.webp"
                                {...registerField("hospitalImage")}
                                className="hidden"
                            />
                        )}
                    </div>
                    {errors.hospitalImage?.message && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.hospitalImage.message}
                        </p>
                    )}
                </div>

                <div className="min-w-0">
                    <h2 className="text-base lg:text-lg font-semibold text-slate-800">
                        Hospital Information
                    </h2>
                    <p className="text-xs lg:text-sm text-slate-500 mt-1">
                        Add hospital details, location and contact information.
                    </p>
                    <span className="inline-flex mt-2 text-[10px] lg:text-xs font-medium text-primary bg-blue-50 px-2.5 py-1 rounded-md">
                        Hospital Details
                    </span>
                </div>
            </div>

            <div className="flex gap-2">
                {
                    mode === "create" && (
                        <button
                            type="submit"
                            className="flex gap-2 text-[13px] font-semibold text-primary border
                                        rounded-lg border-primary items-center px-4 py-[10px]
                                        hover:bg-primary hover:text-white
                                        transition-colors duration-200 ease-in-out"
                        >
                            Create Hospital
                        </button>
                    )
                }
                {
                    mode === "edit" && (isFormEditable ? (
                        <>
                            <button
                                type="button"
                                className="flex gap-2 text-[13px] text-text border rounded-lg border-[#E1E5EA] items-center px-4 py-[10px]"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="flex gap-2 text-nowrap text-[13px] text-white font-bold rounded-lg items-center px-4 py-[10px] bg-primary"
                            >
                                Save Changes
                            </button>
                        </>
                    ) :
                        (
                            <button
                                type="button"
                                className="flex gap-2 text-[13px] font-semibold text-primary border rounded-lg border-primary items-center px-4 py-[10px]"
                                onClick={() => setFormEditable?.(true)}
                            >
                                Edit Profile
                            </button>
                        ))
                }
            </div>
        </div>
    )
}

export default HospitalFormHeader