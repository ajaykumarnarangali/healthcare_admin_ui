import PatientTables from "../components/tables/PatientTables"
import UserFilter from "../components/UserFilter"
import UserPageHeader from "../components/UserPageHeader"
import type { ManagedUserRole } from "../types/user.type";


function PatientManagement() {

  const title: string = 'Patients';
  const content: string = 'Platform-level patient overview — sensitive data access is restricted';
  const role: ManagedUserRole = 'PATIENT';

  const patients: Patient[] = [
    {
      id: "pat-001",
      firstName: "Arjun",
      lastName: "Nair",
      registeredAt: "2026-10-12",
      appointmentCount: 12,
      status: "ACTIVE",
    },
    {
      id: "pat-002",
      firstName: "Anjali",
      lastName: "Menon",
      registeredAt: "2026-10-18",
      appointmentCount: 5,
      status: "ACTIVE",
    },
    {
      id: "pat-003",
      firstName: "",
      lastName: "Krishnan",
      registeredAt: "2026-10-22",
      appointmentCount: 0,
      status: "INACTIVE",
    },
    {
      id: "pat-004",
      firstName: "Meera",
      lastName: "",
      registeredAt: "",
      appointmentCount: 8,
      status: "ACTIVE",
    },
    {
      id: "pat-005",
      firstName: "Vishnu",
      lastName: "Kumar",
      registeredAt: "2026-11-05",
      appointmentCount: 0,
      status: "INACTIVE",
    },
  ];

  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <UserPageHeader
        headerProps={{ title, content, role }}
      />
      <UserFilter />
      <PatientTables {...{ patients }} />
    </div>
  )
}

export default PatientManagement