import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import * as HospitalService from "../services/hospital.service";
import type {
    Hospital,
    HospitalQueryParams,
    Pagination
} from "../types/hospital.type";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import axios from "axios";


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
        if (params.toString() !== searchParams.toString()) {
            setSearchParams(params, { replace: true });
        }
    }, [query, setSearchParams]);

    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [hospitals, setHospitals] = useState<Hospital[]>([]);

    async function getHospitalByQuery(controller: AbortController) {
        setFetchError(null);
        setIsFetching(true);
        try {
            const res = await HospitalService.getHospitalsByQuery(query, controller.signal);
            if (controller.signal.aborted) return;

            if (res.data && res.data.hospitals && res.data.pagination) {
                const { hospitals, pagination } = res.data;
                setHospitals(hospitals);
                setPagination(pagination);
            } else {
                setFetchError("Unable to fetch hospitals");
                setHospitals([]);
                setPagination(null);
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

        getHospitalByQuery(controller);

        return () => controller.abort();
    }, [query]);

    return {
        query,
        setQuery,
        hospitals,
        pagination,
        isFetching,
        fetchError
    }
}