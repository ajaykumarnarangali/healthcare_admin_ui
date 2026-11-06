import { useState } from "react";


export function useHospital() {

    const [isFetching, setFetching] = useState<boolean>(false);
    const [fetchError, setFetchError] = useState(null);
    const [hospitals, useHospitals] = useState([1, 2, 3, 4]);


    return {
        hospitals
    }
}