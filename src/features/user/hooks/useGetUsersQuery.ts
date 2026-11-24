import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import * as userService from "../services/user.service";
import type {
    Doctor, HospitalAdmin,
    ManagedUserRole, Pagination,
    Patient, UserQueryParams
} from "../types/user.type";
import axios from "axios";


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
        if (params.toString() !== searchParams.toString()) {
            setSearchParams(params, { replace: true });
        }
    }, [query, setSearchParams]);

    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [users, setUsers] = useState<(Doctor | Patient | HospitalAdmin)[]>([]);

    async function getUsersByQuery(controller: AbortController) {
        setIsFetching(true)
        setFetchError(null);
        try {
            const res = await userService.getUsersByQuery(query, controller.signal);
            if (controller.signal.aborted) return;

            if (res.data?.users && res.data?.pagination) {
                setUsers(res.data.users);
                setPagination(res.data.pagination);
            } else {
                setUsers([]);
                setPagination(null);
                setFetchError("Unexpected response");
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                return;
            }
            setFetchError(getApiErrorMessage(error));
        } finally {
            if (!controller.signal.aborted) {
                setIsFetching(false);
            }
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        getUsersByQuery(controller);

        return () => {
            controller.abort();
        };
    }, [query]);

    return {
        query,
        setQuery,
        users,
        pagination,
        isFetching,
        fetchError
    }
}