import HospitalTable from "../components/HospitalTable";
import HospitalFilter from "../components/HospitalFilter";
import HospitalPageHeader from "../components/HospitalPageHeader";
import { useHospital } from "../hooks/useHospital";

function HospitalManagement() {

    const { hospitals } = useHospital();

    return (
        <div className="p-4 lg:p-6 w-full h-full">
            <HospitalPageHeader
                headerProps={{ totalCount: hospitals.length }}
            />
            <HospitalFilter />
            <HospitalTable />
        </div>
    )
}

export default HospitalManagement