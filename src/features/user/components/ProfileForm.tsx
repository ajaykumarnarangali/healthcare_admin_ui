import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";

import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from "../../../hooks/userAppSelector";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    type ProfileFormInput,
    type ProfileFormOutput,
    ProfileInitialValues,
    getPatientProfileSchema,
} from "../schemas/user.profile";
import { useProfileManagement } from "../hooks/useProfileManagement";
import PageStateHandler from "../../../components/PageStateHandler";
import { mapResponseToInitialState } from "../../../utils/formhelper";


function ProfileForm() {

    const isProfileExist = useAppSelector(
        (state) => state.user.name
    );
    const schema = getPatientProfileSchema(!!isProfileExist)
    const {
        isFormEditable,
        setFormEditable,
        handleFormSubmit,
        userProfile,
        fetchError,
        submitError,
        isSubmitting,
        isLoading
    } = useProfileManagement();

    const method = useForm<
        ProfileFormInput,
        any,
        ProfileFormOutput
    >({
        resolver: zodResolver(schema),
        defaultValues: ProfileInitialValues
    });

    useEffect(() => {
        if (userProfile) {
            method.reset(
                mapResponseToInitialState(
                    ProfileInitialValues,
                    userProfile,
                    ["profilePhoto"],
                    ["dateOfBirth"]
                )
            );
        }
    }, [userProfile, method.reset]);

    function handleCancel() {
        if (userProfile) {
            method.reset(
                mapResponseToInitialState(
                    ProfileInitialValues,
                    userProfile,
                    ["profilePhoto"],
                    ["dateOfBirth"]
                )
            );
        }
        setFormEditable(false);
    }


    return (
        <div className="w-full">
            <PageStateHandler isLoading={isLoading} error={fetchError}>
                <FormProvider {...method}>
                    <form
                        onSubmit={method.handleSubmit(
                            (data) => handleFormSubmit(data, method.formState.dirtyFields, method.reset),
                            (errors) => {
                                console.log("Validation errors:", errors);
                            }
                        )}
                        className="w-full">
                        <ProfileHeader
                            formManagement={{
                                isFormEditable,
                                setFormEditable,
                                isSubmitting,
                                handleCancel
                            }}
                        />
                        <ProfileDetails
                            formManagement={{ isFormEditable }}
                        />
                    </form>
                </FormProvider>
            </PageStateHandler>
        </div>
    )
}

export default ProfileForm