import PatientTables from "../components/tables/PatientTables"
import UserFilter from "../components/UserFilter"
import UserPageHeader from "../components/UserPageHeader"
import { useGetUsersQuery } from "../hooks/useGetUsersQuery";
import type { ManagedUserRole, Patient } from "../types/user.type";


function PatientManagement() {

  const title: string = 'Patients';
  const content: string = 'Platform-level patient overview — sensitive data access is restricted';
  const role: ManagedUserRole = 'PATIENT';

  const {
    query,
    setQuery,
    pagination,
    isFetching,
    fetchError,
    users
  } = useGetUsersQuery("PATIENT");

  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <UserPageHeader
        headerProps={{ title, content, role }}
      />
      <UserFilter {...{ query, setQuery }} />
      <PatientTables {...{ patients: users as Patient[], isFetching, fetchError, pagination, setQuery }} />
    </div>
  )
}

export default PatientManagement