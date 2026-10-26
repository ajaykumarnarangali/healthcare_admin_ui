import axios from "axios";

export function getApiErrorMessage(
    err: unknown,
    fallback = "Something went wrong. Please try again."
): string {
    if (axios.isAxiosError(err)) {
        if (!err.response) {
            return "Unable to connect to the server. Please check your connection and try again.";
        }

        return err.response.data?.message ?? fallback;
    }

    if (err instanceof Error) {
        return err.message;
    }

    return fallback;
}