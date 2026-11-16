import type { Patient } from "../../types/user.type";

type PatientTableProps = {
  patients: Patient[];
};

function PatientTables({ patients }: PatientTableProps) {
  return (
    <div className="w-full overflow-x-auto py-6">
      <table className="w-full min-w-[900px] table-fixed text-left border-slate-300 border">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="w-[25%] px-4 py-4 text-xs font-semibold text-slate-600">
              Patient Name
            </th>
            <th className="w-[25%] px-4 py-4 text-xs font-semibold text-slate-600 text-center">
              Account Status
            </th>
            <th className="w-[25%] px-4 py-4 text-xs font-semibold text-slate-600">
              Registration Date
            </th>
            <th className="w-[25%] px-4 py-4 text-xs font-semibold text-slate-600 text-center">
              Appointments
            </th>
          </tr>
        </thead>

        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-12 text-center">
                <p className="text-sm font-medium text-slate-600">
                  No Patients found
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Try adjusting your search or filters.
                </p>
              </td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b border-slate-200 bg-white hover:bg-slate-50/70 transition-colors"
              >
                <td className="px-4 py-4">
                  <span className="text-xs font-semibold text-slate-800">
                    {`${patient.firstName ?? ""} ${patient.lastName ?? ""}`.trim() || "-"}
                  </span>
                </td>

                <td className="px-4 py-4 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${patient.status === "ACTIVE"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-red-50 text-red-600"
                      }`}
                  >
                    {patient.status === "ACTIVE"
                      ? "Active"
                      : patient.status === "INACTIVE"
                        ? "Inactive"
                        : "-"}
                  </span>
                </td>

                <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                  {patient.registeredAt
                    ? new Date(patient.registeredAt).toLocaleDateString()
                    : "-"}
                </td>

                <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap text-center">
                  {patient.appointmentCount ?? "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTables;