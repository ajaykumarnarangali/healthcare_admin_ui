import { useEffect, useState } from "react";
import { hospitalInitFormData, type HospitalFormOutput } from "../schemas/hospital.schema";
import HospitalForm from "../components/HospitalForm";
import * as HospitalService from "../services/hospital.service";
import PageStateHandler from "../../../components/PageStateHandler";
import { useNavigate, useParams } from "react-router-dom";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import { createFormData, isFormDataEmpty, mapResponseToInitialState } from "../../../utils/formhelper";
import { toast } from "sonner";


function EditHospitalPage() {

    const { hospitalId } = useParams<string>();
    const navigate = useNavigate();

    const [initFormData, setInitFormData] = useState(hospitalInitFormData);
    const [initHospitalImageUrl, setInitHospitalImageUrl] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string | null>(null);


    async function fetchHospital(hospitalId: string) {
        setIsFetching(true);
        setFetchError(null);

        try {
            const res = await HospitalService.getHospital(hospitalId);

            if (!res.success || !res.data?.hospitalDetails) {
                setFetchError("Unable to fetch hospital details");
                return;
            }

            const hospitalData = res.data.hospitalDetails;

            const hospitalInitData = mapResponseToInitialState(
                hospitalInitFormData,
                hospitalData,
                ["hospitalImage"]
            );

            setInitFormData(hospitalInitData);
            setInitHospitalImageUrl(hospitalData.hospitalImage);
        } catch (error) {
            setFetchError(getApiErrorMessage(error));
        } finally {
            setIsFetching(false);
        }
    }


    async function handleFormSubmit(data: HospitalFormOutput,
        dirtyFields: Partial<Record<keyof HospitalFormOutput, boolean>>
    ) {
        const formData = createFormData(
            data,
            "dirty",
            dirtyFields,
            ["hospitalImage"]
        );

        const isFormEmpty = isFormDataEmpty(formData);
        if (isFormEmpty) {
            toast.error("Please make at least one change before updating.");
            return;
        }

        try {
            const res = await HospitalService.updateHospital(formData, hospitalId as string);

            if (!res.success) {
                toast.error("Unable to update hospital.");
                return;
            }

            toast.success("Hospital updated successfully.");
            navigate("/global-admin/hospitals");
        } catch (error) {
            toast.error(getApiErrorMessage(error));
            console.error("Failed to update hospital:", error);
        }
    }

    useEffect(() => {
        if (!hospitalId) {
            setIsFetching(false);
            setFetchError("Provide hospitalId");
            return;
        }
        fetchHospital(hospitalId);
    }, []);

    return (
        <div className="p-4 lg:p-6 w-full h-full">
            <div className="max-w-[720px]">
                <PageStateHandler
                    isLoading={isFetching}
                    error={fetchError}
                    onRetry={() => fetchHospital(hospitalId as string)}
                >
                    <HospitalForm
                        mode="edit"
                        initFormData={initFormData}
                        initHospitalImageUrl={initHospitalImageUrl}
                        handleFormSubmit={handleFormSubmit}
                    />
                </PageStateHandler>
            </div>
        </div>
    )
}

export default EditHospitalPage