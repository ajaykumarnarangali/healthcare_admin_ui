import HospitalTable from "../components/HospitalTable";
import HospitalFilter from "../components/HospitalFilter";
import HospitalPageHeader from "../components/HospitalPageHeader";
import { useGetHospitalQuery } from "../hooks/useGetHospitalsQuery";

function HospitalManagement() {

    const {
        query,
        setQuery,
        pagination,
        hospitals,
        isFetching,
        fetchError
    } = useGetHospitalQuery();

    return (
        <div className="p-4 lg:p-6 w-full h-full">
            <HospitalPageHeader
                headerProps={{ totalCount: pagination?.totalRecords }}
            />
            <HospitalFilter {...{ query, setQuery }} />
            <HospitalTable
                {...{ hospitals, pagination, isFetching, fetchError, setQuery }}
            />
        </div>
    )
}

export default HospitalManagement