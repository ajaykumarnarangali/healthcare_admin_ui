import React, { useEffect, useState } from 'react'
import { IconSearch } from '../../../components/Icons';
import type { LimitOption, ManagedUserFilterStatus, SortOrderOptions, StatusOption, UserQueryParams } from '../types/user.type';

interface UserFilterProps {
  query: UserQueryParams;
  setQuery: React.Dispatch<React.SetStateAction<UserQueryParams>>;
}
function UserFilter({ query, setQuery }: UserFilterProps) {

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setQuery(prev => {
        if (prev.search === searchTerm && prev.page === 1) {
          return prev;
        }

        return {
          ...prev,
          search: searchTerm,
          page: 1
        };
      });
    }, 500);

    return () => clearTimeout(timeoutRef);
  }, [searchTerm, setQuery]);

  const statusOptions: StatusOption[] = [
    { label: "All Status", value: "ALL" },
    { label: "Active", value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
  ];

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
        h-9 w-full px-3 max-w-28 border text-nowrap rounded-md text-[12px]
        outline-none focus:outline-none focus:ring-0 focus:border-slate-300
        bg-transparent text-black border-slate-300 cursor-pointer
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
                               text-xs bg-transparent border-slate-300 placeholder:text-[11px]"
              placeholder="Search users..."
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
                status: e.target.value as ManagedUserFilterStatus,
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
        </div>

        {/* Sorting Order and Pagination Size */}
        <div className="flex items-center gap-3 shrink-0">
          <select
            className={selectClassName}
            value={query.sortOrder}
            onChange={(e) =>
              setQuery({
                ...query,
                sortOrder: e.target.value as UserQueryParams["sortOrder"],
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
  )
}

export default UserFilter