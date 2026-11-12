import { IconEdit } from "../../../components/Icons";
import { useAppSelector } from "../../../hooks/userAppSelector";
import { useFormContext, useWatch } from "react-hook-form";
import { type ProfileFormInput } from "../schemas/user.profile";
import { useEffect, useState } from "react";

type ProfileHeaderProps = {
    formManagement: {
        isFormEditable: boolean;
        isSubmitting: boolean,
        setFormEditable: React.Dispatch<React.SetStateAction<boolean>>;
        handleCancel: () => void;
    };
};

function ProfileHeader({ formManagement }: ProfileHeaderProps) {

    const { isFormEditable, setFormEditable, handleCancel, isSubmitting } = formManagement;
    const user = useAppSelector((state) => state.user);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const {
        register: registerField,
        formState: { errors },
        control
    } = useFormContext<ProfileFormInput>();
    const profilePhoto = useWatch({
        control,
        name: "profilePhoto",
    });

    useEffect(() => {
        const file = profilePhoto?.[0];
        if (!file) {
            setPreviewUrl(null);
            return;
        }

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        return () => URL.revokeObjectURL(url);
    }, [profilePhoto]);

    return (
        <div
            className="p-3 pt-4 pb-6 lg:p-6 mb-4 rounded-xl border
             border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]
             flex flex-col gap-6 lg:flex-row lg:items-center justify-between"
        >
            <div className="flex gap-4 items-center">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="profilePhoto"
                        className={`bg-white border-[3px] border-[#E1E5EA] 
                                    w-[90px] h-[90px] rounded-full overflow-hidden block
                                    ${isFormEditable ? "cursor-pointer" : "cursor-default"}`}
                    >
                        <img
                            src={previewUrl ?? user?.profileImage ?? "/profile_image.png"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </label>
                    {isFormEditable && (
                        <input
                            id="profilePhoto"
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            aria-invalid={!!errors.profilePhoto}
                            className="hidden"
                            {...registerField("profilePhoto", {
                                setValueAs: (files: FileList) => files?.[0] || undefined,
                            })}
                        />
                    )}
                    {errors.profilePhoto && (
                        <p className="text-xs text-red-600" role="alert">
                            {errors.profilePhoto.message}
                        </p>
                    )}
                </div>

                <div>
                    <h2 className="text-base text-text lg:mb-1">{user.name ?? "Your Name"}</h2>
                    <span className="text-[13px] text-text-muted">
                        <p>{user.email ?? "your-name@email.com"}</p>
                        <p>6235447873</p>
                    </span>
                </div>
            </div>
            <div>
                {isFormEditable ? (
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex gap-2 text-[13px] text-text border rounded-lg border-[#E1E5EA] items-center px-4 py-[10px]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex gap-2 text-[13px] text-white font-bold rounded-lg items-center px-4 py-[10px] bg-primary"
                        >
                            Save Changes
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => setFormEditable(true)}
                        className="flex gap-2 text-[13px] font-semibold text-primary border rounded-lg border-primary items-center px-4 py-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <IconEdit className="w-3 h-3" />
                                Edit Profile
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProfileHeader