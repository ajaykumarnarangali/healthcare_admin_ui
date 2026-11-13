import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import {
    getHospitalSchema,
    type HospitalFormInput,
    type HospitalFormOutput
} from '../schemas/hospital.schema';

import HospitalFormHeader from './HospitalFormHeader';
import HospitalFormDetails from './HospitalFormDetails';


type HospitalFormProps =
    | {
        mode: "create";
        initFormData: HospitalFormInput;
        initHospitalImageUrl?: string | null;
        handleFormSubmit: (data: HospitalFormOutput) => void | Promise<void>;
    }
    | {
        mode: "edit";
        initFormData: HospitalFormInput;
        initHospitalImageUrl?: string | null;
        handleFormSubmit: (
            data: HospitalFormOutput,
            dirtyFields: Partial<Record<keyof HospitalFormOutput, boolean>>
        ) => void | Promise<void>;
    };

function HospitalForm(props: HospitalFormProps) {

    const { mode, initFormData, handleFormSubmit, initHospitalImageUrl } = props;
    const [imageUrl, setImageUrl] = useState(initHospitalImageUrl);
    const [isFormEditable, setFormEditable] = useState(mode === "create");

    const schema = getHospitalSchema(mode);
    const method = useForm<HospitalFormInput, any, HospitalFormOutput>({
        resolver: zodResolver(schema),
        defaultValues: initFormData,
    });

    function handleCancel() {
        method.reset(initFormData);
        setImageUrl(initHospitalImageUrl);
        setFormEditable(false);
    }

    const onSubmit = (data: HospitalFormOutput) => {
        if (mode === "edit") {
            return handleFormSubmit(data, method.formState.dirtyFields);
        }
        return handleFormSubmit(data);
    };

    return (
        <div>
            <FormProvider {...method}>
                <form
                    onSubmit={method.handleSubmit(onSubmit,
                        (errors) => {
                            console.log("Validation errors:", errors);
                        }
                    )}
                >
                    <HospitalFormHeader
                        formManagement={
                            mode === "edit"
                                ? {
                                    mode,
                                    imageUrl,
                                    isFormEditable,
                                    setFormEditable,
                                    handleCancel,
                                }
                                : { mode }
                        }
                    />
                    <HospitalFormDetails
                        formManagement={{ isFormEditable }}
                    />
                </form>
            </FormProvider>
        </div>
    )
}

export default HospitalForm