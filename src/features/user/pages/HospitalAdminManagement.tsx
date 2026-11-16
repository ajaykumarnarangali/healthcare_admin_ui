import HospitalAdminsTable from "../components/tables/HospitalAdminsTable"
import UserFilter from "../components/UserFilter"
import UserPageHeader from "../components/UserPageHeader"
import type { HospitalAdmin, ManagedUserRole } from "../types/user.type";


function HospitalAdminManagement() {

  const title: string = 'Hospital Admins';
  const content: string = 'Manage administrators assigned to each hospital';
  const role: ManagedUserRole = 'HOSPITAL_ADMIN';

  const hospitalAdmins: HospitalAdmin[] = [
    {
      id: "ha-001",
      firstName: "Arjun",
      lastName: "Nair",
      phone: "9134034",
      assignedHospital: "City Hospital",
      email: "arjun@example.com",
      isProfileCompleted: true,
      status: "ACTIVE",
    },
    {
      id: "ha-002",
      firstName: "Anjali",
      lastName: "Menon",
      phone: "9134034",
      assignedHospital: "Sunrise Hospital",
      email: "anjali@example.com",
      isProfileCompleted: false,
      status: "ACTIVE",
    },
    {
      id: "ha-003",
      firstName: "",
      lastName: "Krishnan",
      phone: "",
      assignedHospital: "",
      email: "rahul@example.com",
      isProfileCompleted: false,
      status: "INACTIVE",
    },
    {
      id: "ha-004",
      firstName: "Meera",
      lastName: "Suresh",
      phone: "",
      assignedHospital: "Metro Medical Centre",
      email: "meera@example.com",
      isProfileCompleted: true,
      status: "ACTIVE",
    },
    {
      id: "ha-005",
      firstName: "Vishnu",
      lastName: "",
      phone: '',
      assignedHospital: "",
      email: "",
      isProfileCompleted: false,
      status: "INACTIVE",
    },
  ];

  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <UserPageHeader
        headerProps={{ title, content, role }}
      />
      <UserFilter />
      <HospitalAdminsTable {...{ hospitalAdmins }} />
    </div>
  )
}

export default HospitalAdminManagement