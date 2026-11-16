import { Link } from "react-router-dom";
import { IconEdit, IconEye } from "../../../../components/Icons";
import type { HospitalAdmin } from "../../types/user.type";



type HospitalTableProps = {
  hospitalAdmins: HospitalAdmin[];
  // isFetching: boolean
  // fetchError: string | null
  // pagination: Pagination | null,
  // setQuery: React.Dispatch<React.SetStateAction<UserQueryParams>>;
};
function HospitalAdminsTable({ hospitalAdmins }: HospitalTableProps) {
  return (
    <div className="w-full overflow-x-auto py-6">
      <table className="w-full min-w-[900px] text-left border-slate-300 border">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
              Admin Name
            </th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
              contact
            </th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-600">
              Assigned Hospital
            </th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
              Profile
            </th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
              Status
            </th>
            <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {hospitalAdmins.length === 0 ? (
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
            hospitalAdmins.map((hospitalAdmin) => (
              <tr
                key={hospitalAdmin.id}
                className="border-b border-slate-200 bg-white hover:bg-slate-50/70 transition-colors"
              >
                <td className="px-4 py-4 flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-800">
                    {`${hospitalAdmin.firstName ?? ""} ${hospitalAdmin.lastName ?? ""}`.trim() || "-"}
                  </span>
                  <span className="text-xs text-slate-500">
                    {hospitalAdmin.email}
                  </span>
                </td>

                <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                  {hospitalAdmin.phone || "-"}
                </td>

                <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                  {hospitalAdmin.assignedHospital || "-"}
                </td>

                <td className="px-4 py-4 text-xs text-slate-600 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${hospitalAdmin.isProfileCompleted
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-600"
                      }`}
                  >
                    {hospitalAdmin.isProfileCompleted ? "Completed" : "Not Completed"}
                  </span>
                </td>

                <td className="px-4 py-4 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${hospitalAdmin.status === "ACTIVE"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-600"
                      }`}
                  >
                    {hospitalAdmin.status === "ACTIVE"
                      ? "Active"
                      : hospitalAdmin.status === "INACTIVE"
                        ? "Inactive"
                        : "-"}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      title="View Hospital"
                      className="p-2 rounded-md text-primary hover:bg-[#e8edf4] transition-colors"
                    >
                      <IconEye className="w-3 h-3 hover:text-[#0d7490]" />
                    </button>

                    <Link
                      to={`/global-admin/hospitals/${hospitalAdmin?.id}/edit`}
                      className="p-2 rounded-md text-slate-600 hover:bg-[#e0f1f4] transition-colors"
                    >
                      <IconEdit className="w-3 h-3 hover:text-[#09596e]" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HospitalAdminsTable