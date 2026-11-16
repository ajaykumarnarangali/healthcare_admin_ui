import HospitalAdminsTable from "../components/tables/HospitalAdminsTable"
import UserFilter from "../components/UserFilter"
import UserPageHeader from "../components/UserPageHeader"
import { useGetUsersQuery } from "../hooks/useGetUsersQuery";
import type { HospitalAdmin, ManagedUserRole } from "../types/user.type";


function HospitalAdminManagement() {

  const title: string = 'Hospital Admins';
  const content: string = 'Manage administrators assigned to each hospital';
  const role: ManagedUserRole = 'HOSPITAL_ADMIN';

  const {
    query,
    setQuery,
    pagination,
    isFetching,
    fetchError,
    users
  } = useGetUsersQuery("HOSPITAL_ADMIN");

  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <UserPageHeader
        headerProps={{ title, content, role }}
      />
      <UserFilter {...{ query, setQuery }} />
      <HospitalAdminsTable {...{ hospitalAdmins: users as HospitalAdmin[] }} />
    </div>
  )
}

export default HospitalAdminManagement