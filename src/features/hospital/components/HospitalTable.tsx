import type { Hospital } from "../types/hospital.type";
import { IconChevronLeft, IconChevronRight, IconEdit, IconEye } from "../../../components/Icons";
import { Link } from "react-router-dom";

const hospitals: Hospital[] = [
    {
        id: "1",
        name: "St. Mary's Medical Center",
        adminEmail: "admin@stmarys.com",
        location: "New York, NY",
        status: "ACTIVE",
        departments: 14,
        doctors: 87,
        admins: 3,
        createdAt: "2021-03-15",
    },
    {
        id: "2",
        name: "City General Hospital",
        adminEmail: "admin@citygeneral.com",
        location: "Los Angeles, CA",
        status: "ACTIVE",
        departments: 11,
        doctors: 62,
        admins: 2,
        createdAt: "2021-06-22",
    },
    {
        id: "3",
        name: "Northside Health Clinic",
        adminEmail: "admin@northside.com",
        location: "Chicago, IL",
        status: "ACTIVE",
        departments: 8,
        doctors: 34,
        admins: 1,
        createdAt: "2022-01-10",
    },
    {
        id: "4",
        name: "Lakewood Medical Institute",
        adminEmail: "admin@lakewood.com",
        location: "Houston, TX",
        status: "INACTIVE",
        departments: 6,
        doctors: 21,
        admins: 1,
        createdAt: "2022-04-05",
    },
    {
        id: "5",
        name: "Pioneer Valley Hospital",
        adminEmail: "admin@pioneer.com",
        location: "Phoenix, AZ",
        status: "ACTIVE",
        departments: 9,
        doctors: 45,
        admins: 2,
        createdAt: "2022-08-17",
    },
    {
        id: "6",
        name: "Riverside Community Hospital",
        adminEmail: "admin@riverside.com",
        location: "Philadelphia, PA",
        status: "ACTIVE",
        departments: 7,
        doctors: 28,
        admins: 1,
        createdAt: "2023-02-28",
    },
];

function HospitalTable() {
    return (
        <div className="w-full overflow-x-auto py-6">
            {/* hospital lists */}
            <table className="w-full min-w-[900px] text-left border-slate-300 border">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            Hospital Name
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            Location
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            Status
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Departments
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Doctors
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Admins
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600">
                            Created
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold text-slate-600 text-center">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {hospitals.map((hospital) => (
                        <tr
                            key={hospital.id}
                            className="border-b border-slate-200 bg-white hover:bg-slate-50/70 transition-colors"
                        >
                            <td className="px-4 py-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-semibold text-slate-800">
                                        {hospital.name}
                                    </span>
                                    <span className="text-[11px] text-slate-500">
                                        {hospital.adminEmail}
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                                {hospital.location}
                            </td>
                            <td className="px-4 py-4">
                                <span
                                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${hospital.status === "ACTIVE"
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "bg-red-50 text-red-600"
                                        }`}
                                >
                                    {hospital.status === "ACTIVE" ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="px-4 py-4 text-xs text-slate-600 text-center">
                                {hospital.departments}
                            </td>
                            <td className="px-4 py-4 text-xs text-slate-600 text-center">
                                {hospital.doctors}
                            </td>
                            <td className="px-4 py-4 text-xs text-slate-600 text-center">
                                {hospital.admins}
                            </td>
                            <td className="px-4 py-4 text-xs text-slate-600 whitespace-nowrap">
                                {hospital.createdAt}
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
                                        to={'/global-admin/hospitals/id/edit'}
                                        className="p-2 rounded-md text-slate-600 hover:bg-[#e0f1f4] transition-colors"
                                    >
                                        <IconEdit className="w-3 h-3 hover:text-[#09596e]" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-4 bg-white border border-t-0 border-slate-300">
                <p className="text-xs text-slate-500">
                    Showing <span className="font-semibold text-slate-700">1–10</span> of{" "}
                    <span className="font-semibold text-slate-700">100</span> hospitals
                </p>
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        disabled
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 disabled:opacity-50"
                    >
                        <IconChevronLeft />
                    </button>

                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-white text-xs font-semibold"
                    >
                        1
                    </button>

                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 text-xs hover:bg-slate-50"
                    >
                        2
                    </button>

                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 text-xs hover:bg-slate-50"
                    >
                        3
                    </button>

                    <span className="px-1 text-xs text-slate-400">...</span>

                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 text-xs hover:bg-slate-50"
                    >
                        10
                    </button>

                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50"
                    >
                        <IconChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HospitalTable;