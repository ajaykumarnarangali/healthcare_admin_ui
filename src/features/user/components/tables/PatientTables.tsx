import { IconChevronLeft, IconChevronRight } from "../../../../components/Icons";
import PageStateHandler from "../../../../components/PageStateHandler";
import { generatePageButtons } from "../../../hospital/utils/pagination.utils";
import type { Pagination, Patient, UserQueryParams } from "../../types/user.type";

type PatientTableProps = {
  patients: Patient[],
  isFetching: boolean,
  fetchError: string | null
  pagination: Pagination | null,
  setQuery: React.Dispatch<React.SetStateAction<UserQueryParams>>;
};

function PatientTables({ patients, isFetching, fetchError, pagination, setQuery }: PatientTableProps) {

  function handlePageClick(page: { page: number | string; isClickable: boolean }) {
    const currentPage = page.page;

    if (
      page.isClickable &&
      typeof currentPage === "number" &&
      currentPage >= 1 &&
      currentPage <= (pagination?.totalPages ?? 0)
    ) {
      setQuery((prev) => ({
        ...prev,
        page: currentPage
      }));
    }
  }

  function handlePageNavigation(direction: "next" | "previous") {
    setQuery((prev) => ({
      ...prev,
      page: direction === "next"
        ? Math.min(prev.page + 1, pagination?.totalPages ?? prev.page)
        : Math.max(prev.page - 1, 1)
    }));
  }
  return (
    <div className="w-full overflow-x-auto py-6">
      <PageStateHandler isLoading={isFetching} error={fetchError}>
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
        {
          pagination?.totalPages && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-4 bg-white border border-t-0 border-slate-300">
              <p className="text-xs text-slate-500">
                {pagination?.totalQueryMatchRecords === 0 ? (
                  <span>Showing 0 of 0 hospitals</span>
                ) : (
                  <span>
                    Showing
                    <span className="font-semibold mx-1  text-slate-700">
                      {((pagination?.currentPage ?? 1) - 1) *
                        (pagination?.limit ?? 10) + 1} – {(pagination?.currentPage ?? 1) * (pagination?.limit ?? 10)}
                    </span>
                    of
                    <span className="font-semibold mx-1 text-slate-700">{pagination?.totalQueryMatchRecords}</span>
                    hospitals
                  </span>
                )}
              </p>
              {
                (pagination?.totalQueryMatchRecords ?? 0) && (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handlePageNavigation("previous")}
                      disabled={(pagination?.currentPage ?? 1) === 1}
                      className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"                                        >
                      <IconChevronLeft />
                    </button>

                    {
                      generatePageButtons(pagination.totalPages ?? 1, pagination.currentPage ?? 1).map((page) => (
                        <button
                          key={page.id}
                          onClick={() => handlePageClick(page)}
                          type="button"
                          className={`w-8 h-8 flex items-center justify-center rounded-md border text-xs
                                                                                        ${page.page === pagination.currentPage
                              ? "bg-primary text-white border-primary font-semibold"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}                                                >
                          {page.page}
                        </button>
                      ))
                    }

                    <button
                      type="button"
                      onClick={() => handlePageNavigation("next")}
                      disabled={(pagination?.currentPage ?? 1) === (pagination.totalPages ?? 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"                                        >
                      <IconChevronRight />
                    </button>
                  </div>
                )
              }
            </div>
          )
        }
      </PageStateHandler>
    </div>
  );
}

export default PatientTables;