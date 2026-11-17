import { IconChevronLeft, IconChevronRight } from "../../../../components/Icons";
import PageStateHandler from "../../../../components/PageStateHandler";
import { generatePageButtons } from "../../../hospital/utils/pagination.utils";
import type { Doctor, Pagination, UserQueryParams } from "../../types/user.type";


type DoctorTableProps = {
    doctors: Doctor[];
    isFetching: boolean
    fetchError: string | null
    pagination: Pagination | null,
    setQuery: React.Dispatch<React.SetStateAction<UserQueryParams>>;
};
function DoctorsTables({ doctors, isFetching, fetchError, pagination, setQuery }: DoctorTableProps) {

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
                {/* Pagination */}
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
    )
}

export default DoctorsTables