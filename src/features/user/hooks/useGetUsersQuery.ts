import { useSearchParams } from "react-router-dom";
import type { Doctor, HospitalAdmin, ManagedUserRole, Pagination, Patient, UserQueryParams } from "../types/user.type";
import { useEffect, useState } from "react";


export function useGetUsersQuery(role: ManagedUserRole) {
    const [searchParams, setSearchParams] = useSearchParams();

    const loadInitQuery = (): UserQueryParams => {
        const initQuery: UserQueryParams = {
            page: Number(searchParams.get("page")) || 1,
            limit: Number(searchParams.get("limit")) || 10,
            search: searchParams.get("search") ?? "",
            role,
            status: "ALL",
            sortOrder: "ASC",
        };

        let status = searchParams.get("status");
        if (status === "ACTIVE" || status === "INACTIVE") {
            initQuery.status = status;
        }

        let sortOrder = searchParams.get("sortOrder");
        if (sortOrder === "ASC" || sortOrder === "DESC") {
            initQuery.sortOrder = sortOrder;
        }

        return initQuery;
    }

    const [query, setQuery] = useState<UserQueryParams>(loadInitQuery);

    useEffect(() => {
        const params = new URLSearchParams();

        params.set("page", String(query.page));
        params.set("limit", String(query.limit));
        params.set("search", query.search ?? "");
        params.set("status", query.status);
        params.set("sortOrder", query.sortOrder);

        setSearchParams(params);
    }, [query, setSearchParams]);

    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [users, setUsers] = useState<(Doctor | Patient | HospitalAdmin)[]>([]);


    return {
        query,
        setQuery,
        users,
        pagination,
        isFetching,
        fetchError
    }
}