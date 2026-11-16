import type { Doctor, UserQueryParams } from "../../types/user.type";


type DoctorTableProps = {
    doctors: Doctor[];
    // isFetching: boolean
    // fetchError: string | null
    // pagination: Pagination | null,
    // setQuery: React.Dispatch<React.SetStateAction<UserQueryParams>>;
};
function DoctorsTables({ doctors }: DoctorTableProps) {
    return (
        <div className="w-full overflow-x-auto py-6">
            <table className="w-full min-w-[900px] text-left border-slate-300 border">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            Doctor Name
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            Speciality
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            License
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Profile
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Hospital Affiliation
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {doctors.length === 0 ? (
                        <tr>
                            <td colSpan={6} className="px-4 py-12 text-center">
                                <p className="text-sm font-medium text-slate-600">
                                    No Doctors found
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                    Try adjusting your search or filters.
                                </p>
                            </td>
                        </tr>
                    ) : (
                        doctors.map((doctor) => (
                            <tr
                                key={doctor.id}
                                className="border-b border-slate-200 bg-white hover:bg-slate-50/70 transition-colors"
                            >
                                <td className="px-4 py-4">
                                    <span className="text-xs font-semibold text-slate-800">
                                        {`${doctor.firstName ?? ""} ${doctor.lastName ?? ""}`.trim() || "-"}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                                    {doctor.speciality || "-"}
                                </td>
                                
                                <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${doctor.isLicenseVerified
                                            ? "bg-emerald-50 text-emerald-700"
                                            : "bg-red-50 text-red-600"
                                            }`}
                                    >
                                        {doctor.isLicenseVerified ? "Verified" : "Not Verified"}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-xs text-slate-600 text-center">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${doctor.isProfileCompleted
                                            ? "bg-emerald-50 text-emerald-700"
                                            : "bg-red-50 text-red-600"
                                            }`}
                                    >
                                        {doctor.isProfileCompleted ? "Completed" : "Not Completed"}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-xs text-slate-600 text-center">
                                    {doctor.hospitalAffiliations?.length
                                        ? doctor.hospitalAffiliations.join(", ")
                                        : "-"}
                                </td>

                                <td className="px-4 py-4 text-center">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${doctor.status === "ACTIVE"
                                            ? "bg-emerald-50 text-emerald-700"
                                            : "bg-red-50 text-red-600"
                                            }`}
                                    >
                                        {doctor.status === "ACTIVE"
                                            ? "Active"
                                            : doctor.status === "INACTIVE"
                                                ? "Inactive"
                                                : "-"}
                                    </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DoctorsTables