import DoctorsTables from "../components/tables/DoctorsTables"
import UserFilter from "../components/UserFilter"
import UserPageHeader from "../components/UserPageHeader"
import type { Doctor, ManagedUserRole } from "../types/user.type";



function DoctorManagement() {

  const title: string = 'Doctors';
  const content: string = 'Platform-wide doctor overview — read-only monitoring for Global Admin';
  const role: ManagedUserRole = 'DOCTOR';


  const doctors: Doctor[] = [
    {
      id: "doc-001",
      firstName: "Arjun",
      lastName: "Nair",
      speciality: "Cardiology",
      isLicenseVerified: true,
      isProfileCompleted: true,
      hospitalAffiliations: ["City Hospital"],
      status: "ACTIVE",
    },
    {
      id: "doc-002",
      firstName: "",
      lastName: "Menon",
      speciality: "",
      isLicenseVerified: false,
      isProfileCompleted: true,
      hospitalAffiliations: [],
      status: "ACTIVE",
    },
    {
      id: "doc-003",
      firstName: "Rahul",
      lastName: "",
      speciality: "Orthopedics",
      isLicenseVerified: true,
      isProfileCompleted: false,
      hospitalAffiliations: [],
      status: "INACTIVE",
    },
    {
      id: "doc-004",
      firstName: "",
      lastName: "",
      speciality: "Pediatrics",
      isLicenseVerified: false,
      isProfileCompleted: false,
      hospitalAffiliations: ["Metro Medical Centre"],
      status: "ACTIVE",
    },
    {
      id: "doc-005",
      firstName: "Vishnu",
      lastName: "Kumar",
      speciality: "",
      isLicenseVerified: false,
      isProfileCompleted: false,
      hospitalAffiliations: [],
      status: "INACTIVE",
    },
  ];


  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <UserPageHeader
        headerProps={{ title, content, role }}
      />
      <UserFilter />
      <DoctorsTables {...{ doctors }} />
    </div>
  )
}

export default DoctorManagement