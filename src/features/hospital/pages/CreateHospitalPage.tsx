import { useNavigate } from "react-router-dom";
import HospitalForm from "../components/HospitalForm";
import { createFormData } from "../../../utils/formhelper";
import * as hospitaService from "../services/hospital.service";
import { hospitalInitFormData, type HospitalFormOutput } from "../schemas/hospital.schema";
import { toast } from "sonner";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";

function CreateHospitalPage() {

  const navigate = useNavigate();

  async function handleFormSubmit(data: HospitalFormOutput) {
    const formData = createFormData(
      data,
      "all",
      undefined,
      ["hospitalImage"]
    );

    try {
      const res = await hospitaService.createHospital(formData);

      if (!res.success) {
        toast.error("Unable to create hospital.");
        return;
      }

      toast.success("Hospital created successfully.");
      navigate("/global-admin/hospitals");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
      console.error("Failed to create hospital:", error);
    }

  }


  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <div className="max-w-[720px]">
        <HospitalForm
          mode="create"
          initFormData={hospitalInitFormData}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </div>
  )
}

export default CreateHospitalPage