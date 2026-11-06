import { useState, useEffect } from "react";
import type { UserProfileResponse } from "../types/user.type";
import { ProfileInitialValues, type ProfileFormInput } from "../schemas/user.profile";
import { useAppSelector } from "../../../hooks/userAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch ";
import { toast } from "sonner";
import { createFormData, isFormDataEmpty, mapResponseToInitialState } from "../../../utils/formhelper";
import {
    getUserProfile,
    createUserProfile,
    updateUserProfile
} from "../services/user.service";
import { setUser } from "../../../store/slices/userSlice";

import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import type { UseFormReset } from "react-hook-form";

export function useProfileManagement() {
    const [isFormEditable, setFormEditable] = useState<boolean>(false);
    const [userProfile, setUserProfile] = useState<UserProfileResponse | null>(null);

    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const isProfileExist = !!useAppSelector((state) => state.user.name);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setIsLoading(true);
                setFetchError(null);
                const response = await getUserProfile();
                if (response.success && response.data?.profile) {
                    setUserProfile(response.data.profile);
                } else {
                    setUserProfile(null);
                }
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
                setUserProfile(null);
                if (error.status === 404) {
                    setFetchError(null);
                } else {
                    setFetchError("Unable to load profile");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);


    async function handleFormSubmit(
        data: ProfileFormInput,
        dirtyFields: Partial<Record<keyof ProfileFormInput, boolean>>,
        reset: UseFormReset<ProfileFormInput>
    ) {
        const formData = isProfileExist
            ? createFormData(data, "dirty", dirtyFields, ["profilePhoto"])
            : createFormData(data, "all", dirtyFields, ["profilePhoto"]);

        if (isFormDataEmpty(formData)) {
            toast.error("No changes detected. Nothing to update.");
            return;
        }

        try {
            let response;
            setIsSubmitting(true);
            if (isProfileExist) {
                response = await updateUserProfile(formData);
            } else {
                response = await createUserProfile(formData);
            }

            if (response.success && response.data?.profile) {
                const profile = response.data.profile;
                dispatch(
                    setUser({
                        name: `${profile.firstName} ${profile.lastName}`,
                        profileImage: profile.profilePhoto,
                    })
                );
                reset(
                    mapResponseToInitialState(
                        ProfileInitialValues,
                        profile,
                        ["profilePhoto"],
                        ["dateOfBirth"]
                    )
                );
                toast.success("profile updated successfully");
                setSubmitError(null);
                setFormEditable(false);
            } else {
                setSubmitError(response.message || "Unable to save profile");
            }

        } catch (error) {
            console.error("Profile submission failed:", error);
            setSubmitError(getApiErrorMessage(error));
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        isFormEditable,
        setFormEditable,
        setIsSubmitting,
        setSubmitError,
        userProfile,
        setUserProfile,
        handleFormSubmit,
        isLoading,
        isSubmitting,
        submitError,
        fetchError
    };
}