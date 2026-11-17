import DoctorsTables from "../components/tables/DoctorsTables"
import UserFilter from "../components/UserFilter"
import UserPageHeader from "../components/UserPageHeader"
import { useGetUsersQuery } from "../hooks/useGetUsersQuery";
import type { Doctor, ManagedUserRole } from "../types/user.type";


function DoctorManagement() {

  const title: string = 'Doctors';
  const content: string = 'Platform-wide doctor overview — read-only monitoring for Global Admin';
  const role: ManagedUserRole = 'DOCTOR';

  const {
    query,
    setQuery,
    pagination,
    isFetching,
    fetchError,
    users
  } = useGetUsersQuery(role);

  return (
    <div key={role} className="p-4 lg:p-6 w-full h-full">
      <UserPageHeader
        headerProps={{ title, content, role }}
      />
      <UserFilter {...{ query, setQuery }} />
      <DoctorsTables {...{ doctors: users as Doctor[], isFetching, fetchError, pagination, setQuery }} />
    </div>
  )
}

export default DoctorManagement