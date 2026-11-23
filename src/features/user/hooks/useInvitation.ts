import { useEffect, useRef, useState } from "react";
import type { HospitalSummaryQueryParams } from "../../hospital/types/hospital.type";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import * as HosptialService from "../../hospital/services/hospital.service";


interface HospitalSummary {
    id: string,
    name: string,
    city: string,
    state: string
}

export function useInvitation() {

    const InitialQuery = () => ({
        search: "",
        page: 1,
        limit: 10
    });

    const [query, setQuery] = useState<HospitalSummaryQueryParams>(InitialQuery);
    const [hasNextPage, setHasNextPage] = useState<boolean>(false);

    const [hospitals, setHospitals] = useState<HospitalSummary[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isHospitalListOpen, setIsHospitalListOpen] = useState<boolean>(false);
    const [selectedHospital, setSelectedHospital] = useState<HospitalSummary | null>(null);

    const controllerRef = useRef<AbortController | null>(null);

    async function fetchHospitalsSummary(query: HospitalSummaryQueryParams, signal: AbortSignal) {
        setFetchError(null);
        setIsFetching(true);
        try {
            const res = await HosptialService.getHospitalsSummaryByQuery(query, signal);
            if (signal.aborted) return;

            if (res.data?.hospitals && res.data?.pagination) {
                setHospitals(prev =>
                    query.page === 1
                        ? res.data.hospitals
                        : [...prev, ...res.data.hospitals]
                );
                setHasNextPage(res.data.pagination.hasNextPage ?? false)
            }
        } catch (error) {
            if (signal.aborted) return;
            setFetchError(getApiErrorMessage(error));
        } finally {
            if (!signal.aborted) {
                setIsFetching(false);
            }
        }
    }

    function handleFocus() {
        controllerRef.current?.abort();

        const controller = new AbortController();
        controllerRef.current = controller;

        fetchHospitalsSummary(query, controller.signal);
        setIsHospitalListOpen(true);
    }

    function handleBlur() {
        controllerRef.current?.abort();
        controllerRef.current = null;

        setQuery(InitialQuery());
        setHasNextPage(false);
        setFetchError(null);
        setIsFetching(false);
        setHospitals([]);
        setIsHospitalListOpen(false);
    }

    function handleHospitalScroll(
        hospitalListRef: React.RefObject<HTMLDivElement | null>
    ) {
        const element = hospitalListRef.current;

        if (!element || !hasNextPage || isFetching) return;

        const isNearBottom =
            element.scrollTop + element.clientHeight >=
            element.scrollHeight - 20;

        if (isNearBottom) {
            setQuery((prev) => {
                return {
                    ...prev,
                    page: prev.page + 1
                }
            })
        }
    }
    
    useEffect(() => {
        const controller = new AbortController();
        controllerRef.current = controller;

        fetchHospitalsSummary(query, controller.signal);

        return () => controller.abort();
    }, [query]);

    return {
        query,
        isFetching,
        fetchError,
        hospitals,
        handleBlur,
        handleFocus,
        hasNextPage,
        selectedHospital,
        setSelectedHospital,
        setIsHospitalListOpen,
        handleHospitalScroll,
        isHospitalListOpen
    }
}