import HospitalTable from "../components/HospitalTable";
import HospitalFilter from "../components/HospitalFilter";
import HospitalPageHeader from "../components/HospitalPageHeader";
import { useGetHospitalQuery } from "../hooks/useGetHospitalsQuery";

function HospitalManagement() {

    const { query, setQuery } = useGetHospitalQuery();

    return (
        <div className="p-4 lg:p-6 w-full h-full">
            {/* <HospitalPageHeader
                headerProps={{ totalCount: hospitals.length }}
            /> */}
            <HospitalFilter {...{ query, setQuery }} />
            <HospitalTable />
        </div>
    )
}

export default HospitalManagement