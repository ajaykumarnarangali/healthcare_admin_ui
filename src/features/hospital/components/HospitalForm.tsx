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


interface HospitalFormProps {
    mode: "create" | "edit";
    initFormData: HospitalFormInput
    handleFormSubmit: (data: any) => void;
}

function HospitalForm(props: HospitalFormProps) {

    const { mode, initFormData, handleFormSubmit } = props;
    const [isFormEditable, setFormEditable] = useState(mode === "create");

    const schema = getHospitalSchema(mode);
    const method = useForm<HospitalFormInput, any, HospitalFormOutput>({
        resolver: zodResolver(schema),
        defaultValues: initFormData,
    });

    function handleCancel() {

    }

    return (
        <div>
            <FormProvider {...method}>
                <form
                    onSubmit={method.handleSubmit(
                        (data) => handleFormSubmit(data),
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