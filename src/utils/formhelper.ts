/**
 * Maps API response data to the form's initial state.
 * Excluded keys are skipped, and specified date fields are formatted as YYYY-MM-DD.
 * Missing response values fall back to their corresponding initial values.
 */
export function mapResponseToInitialState<
    T extends Record<string, unknown>,
    R extends object
>(
    initialValues: T,
    responseValues: R,
    excludedKeys: (keyof T)[] = [],
    dateKeys: (keyof T)[] = []
): T {
    const response = responseValues as Record<string, unknown>;

    return Object.keys(initialValues).reduce(
        (acc, key) => {
            const formKey = key as keyof T;

            if (excludedKeys.includes(formKey)) return acc;

            let value = response[key] ?? initialValues[formKey];

            if (dateKeys.includes(formKey) && typeof value === "string" && value) {
                value = value.slice(0, 10);
            }

            acc[formKey] = value as T[keyof T];

            return acc;
        },
        { ...initialValues }
    );
}


/**
 * Creates FormData from the provided object.
 * "all"   - Includes all valid fields.
 * "dirty" - Includes only modified fields.
 * fileKeys - Specifies fields that should be appended as files.
 */
export function createFormData<T extends Record<string, unknown>>(
    data: T,
    type: "all" | "dirty",
    dirtyFields?: Partial<Record<keyof T, boolean>>,
    fileKeys: (keyof T)[] = []
): FormData {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (type === "dirty" && !dirtyFields?.[key as keyof T]) {
            return;
        }

        if (value === undefined || value === null || value === "") return;

        if (fileKeys.includes(key as keyof T)) {
            if (value instanceof FileList && value.length > 0) {
                formData.append(key, value[0]);
            }
            return;
        }

        formData.append(key, String(value));
    });

    return formData;
}


export function isFormDataEmpty(formData: FormData): boolean {
    let isEmpty = true;

    formData.forEach(() => {
        isEmpty = false;
    });

    return isEmpty;
}