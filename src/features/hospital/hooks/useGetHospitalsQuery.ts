import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { HospitalQueryParams } from "../types/hospital.type";


export function useGetHospitalQuery() {
    const [searchParams, setSearchParams] = useSearchParams();

    const loadInitQuery = (): HospitalQueryParams => {
        const initQuery: HospitalQueryParams = {
            page: Number(searchParams.get("page")) || 1,
            limit: Number(searchParams.get("limit")) || 10,
            search: searchParams.get("search") ?? "",
            status: "ALL",
            sortBy: "created_at",
            sortOrder: "ASC",
        };

        let status = searchParams.get("status");
        if (status === "ACTIVE" || status === "INACTIVE") {
            initQuery.status = status;
        }

        let sortBy = searchParams.get("sortBy");
        if (sortBy === "name" || sortBy === "city") {
            initQuery.sortBy = sortBy;
        }

        let sortOrder = searchParams.get("sortOrder");
        if (sortOrder === "ASC" || sortOrder === "DESC") {
            initQuery.sortOrder = sortOrder;
        }

        return initQuery;
    }

    const [query, setQuery] = useState<HospitalQueryParams>(loadInitQuery);

    useEffect(() => {
        const params = new URLSearchParams();

        params.set("page", String(query.page));
        params.set("limit", String(query.limit));
        params.set("search", query.search ?? "");
        params.set("status", query.status);
        params.set("sortBy", query.sortBy);
        params.set("sortOrder", query.sortOrder);

        setSearchParams(params);
    }, [query, setSearchParams]);



    return {
        query,
        setQuery
    }
}