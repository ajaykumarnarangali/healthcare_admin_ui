import { useEffect, useRef, useState } from "react";
import { IconSearch } from "../../../components/Icons";
import type {
    HospitalStatus,
    StatusOption,
    LimitOption,
    HospitalQueryParams,
    SortByOptions,
    SortOrderOptions
} from "../types/hospital.type";

interface HospitalFilterProps {
    query: HospitalQueryParams;
    setQuery: React.Dispatch<React.SetStateAction<HospitalQueryParams>>;
}

function HospitalFilter(filterData: HospitalFilterProps) {
    const { query, setQuery } = filterData;
    const [searchTerm, setSearchTerm] = useState<string>("");
    const isInitialRender = useRef<boolean>(true);

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        const timeoutRef = setTimeout(() => {
            setQuery(prev => ({
                ...prev,
                search: searchTerm,
                page: 1
            }));
        }, 500);

        return () => clearTimeout(timeoutRef);
    }, [searchTerm, setQuery]);

    const statusOptions: StatusOption[] = [
        { label: "All Status", value: "ALL" },
        { label: "Active", value: "ACTIVE" },
        { label: "Inactive", value: "INACTIVE" },
    ];

    const sortByOptions: SortByOptions[] = [
        { value: "created_at", label: "Date Created" },
        { value: "name", label: "Hospital Name" },
        { value: "city", label: "City" },
    ]

    const sortOrderOptions: SortOrderOptions[] = [
        { value: "DESC", label: "Descending" },
        { value: "ASC", label: "Ascending" },
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
            <div className="flex items-center justify-between gap-3">

                {/* Search and Filters */}
                <div className="flex items-center gap-3 flex-1">

                    {/* Search */}
                    <div className="relative w-full max-w-xs">
                        <IconSearch className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            className="h-9 w-full pl-9 pr-3 border rounded-md outline-none
                            focus:ring-0 focus:border-slate-300 text-slate-400
                            text-xs bg-transparent border-slate-300 placeholder:text-sm"
                            placeholder="Search hospitals..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Status */}
                    <select
                        className={selectClassName}
                        value={query.status}
                        onChange={(e) =>
                            setQuery({
                                ...query,
                                status: e.target.value as HospitalStatus,
                                page: 1
                            })
                        }
                    >
                        {statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    {/* Sort By */}
                    <select
                        className={selectClassName}
                        value={query.sortBy}
                        onChange={(e) =>
                            setQuery({
                                ...query,
                                sortBy: e.target.value as HospitalQueryParams["sortBy"],
                                page: 1,
                            })
                        }
                    >
                        {sortByOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}

                    </select>
                </div>

                {/* Sorting Order and Pagination Size */}
                <div className="flex items-center gap-3 shrink-0">
                    <select
                        className={selectClassName}
                        value={query.sortOrder}
                        onChange={(e) =>
                            setQuery({
                                ...query,
                                sortOrder: e.target.value as HospitalQueryParams["sortOrder"],
                                page: 1,
                            })
                        }
                    >
                        {sortOrderOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <select
                        className={selectClassName}
                        value={query.limit}
                        onChange={(e) =>
                            setQuery({
                                ...query,
                                limit: Number(e.target.value),
                                page: 1
                            })
                        }
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