import HospitalFormHeader from './HospitalFormHeader'
import HospitalFormDetails from './HospitalFormDetails'
import { useState } from 'react';

interface HospitalFormProps {
    mode: "create" | "edit";
    onSubmit: () => void;
}

function HospitalForm(props: HospitalFormProps) {

    const { mode, onSubmit } = props;
    const [isFormEditable, setFormEditable] = useState(mode === "create");

    function handleCancel() {

    }


    return (
        <div>
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
        </div>
    )
}

export default HospitalForm