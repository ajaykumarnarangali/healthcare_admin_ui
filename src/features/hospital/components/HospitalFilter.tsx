import { useState } from "react";
import { IconSearch } from "../../../components/Icons";
import type { HospitalStatus, StatusOption, LimitOption } from "../types/hospital.type";

function HospitalFilter() {
    const [status, setStatus] = useState<HospitalStatus>("ALL");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [limit, setLimit] = useState<number>(10);

    const statusOptions: StatusOption[] = [
        { label: "All Status", value: "ALL" },
        { label: "Active", value: "ACTIVE" },
        { label: "Inactive", value: "INACTIVE" },
    ];

    const limitOptions: LimitOption[] = [
        { label: "5 / page", value: 5 },
        { label: "10 / page", value: 10 },
        { label: "25 / page", value: 25 },
        { label: "50 / page", value: 50 },
    ];

    const selectClassName = `
        h-9 w-full px-3 max-w-28 border text-nowrap rounded-md
        outline-none focus:outline-none focus:ring-0 focus:border-slate-300
        text-sm bg-transparent text-slate-400 border-slate-300
    `;

    return (
        <div className="w-full py-3">
            <div className="flex gap-3 justify-between">
                <div className="relative w-full max-w-xs">
                    <IconSearch className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                        className="h-9 w-full pl-9 pr-3 border rounded-md outline-none
                        focus:outline-none focus:ring-0 focus:border-slate-300 text-slate-400 
                        text-xs bg-transparent border-slate-300 placeholder:text-sm"
                        placeholder="Search hospitals..."
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <select
                        className={selectClassName}
                        value={status}
                        onChange={(e) => setStatus(e.target.value as HospitalStatus)}
                    >
                        {statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <select
                        className={selectClassName}
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                    >
                        {limitOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default HospitalFilter;