import zod from "zod";

export const hospitalBaseSchema = zod.object({
    // Hospital Information
    name: zod.string()
        .trim()
        .transform((value) => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(2, "Hospital name must contain at least 2 characters")
                .max(255, "Hospital name cannot exceed 255 characters")
                .optional()
        )
        .optional()
    ,

    email: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .email("Please provide a valid email address")
                .max(255, "Email cannot exceed 255 characters")
                .optional()
        )
        .optional(),

    phone: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(7, "Phone number must contain at least 7 characters")
                .max(20, "Phone number cannot exceed 20 characters")
                .regex(/^\+?[0-9\s()-]+$/, "Please provide a valid phone number")
                .optional()
        )
        .optional(),

    website: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .max(255, "Website URL cannot exceed 255 characters")
                .regex(
                    /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\/[^\s]*)?$/,
                    "Please provide a valid website URL"
                )
                .optional()
        )
        .optional(),

    description: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(10, "Description must contain at least 10 characters")
                .max(5000, "Description cannot exceed 5000 characters")
                .optional()
        )
        .optional(),

    // Hospital Address
    streetAddress: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(3, "Street address must contain at least 3 characters")
                .max(255, "Street address cannot exceed 255 characters")
                .optional()
        )
        .optional(),

    city: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(2, "City must contain at least 2 characters")
                .max(100, "City cannot exceed 100 characters")
                .optional()
        )
        .optional(),

    state: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(2, "State must contain at least 2 characters")
                .max(100, "State cannot exceed 100 characters")
                .optional()
        )
        .optional(),

    country: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : value)
        .pipe(
            zod.string()
                .min(2, "Country must contain at least 2 characters")
                .max(100, "Country cannot exceed 100 characters")
                .optional()
        )
        .optional(),

    postalCode: zod
        .string()
        .trim()
        .max(20, "Postal code cannot exceed 20 characters")
        .optional(),

    // Hospital Location
    latitude: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : Number(value))
        .pipe(
            zod.number()
                .min(-90, "Latitude must be between -90 and 90")
                .max(90, "Latitude must be between -90 and 90")
                .optional()
        )
        .optional(),

    longitude: zod.string()
        .trim()
        .transform(value => value === "" ? undefined : Number(value))
        .pipe(
            zod.number()
                .min(-180, "Longitude must be between -180 and 180")
                .max(180, "Longitude must be between -180 and 180")
                .optional()
        )
        .optional(),

    //hospital image
    hospitalImage: zod
        .instanceof(FileList)
        .optional()
        .refine(
            files =>
                !files?.length ||
                ["image/jpeg", "image/png", "image/webp"].includes(files[0].type),
            "Only JPEG, PNG, and WebP images are allowed"
        )
        .refine(
            files =>
                !files?.length ||
                files[0].size <= 2 * 1024 * 1024,
            "Image must be smaller than 2 MB")

});

export function getHospitalSchema(mode: "create" | "edit") {
    return hospitalBaseSchema.superRefine((data, ctx) => {
        if (mode === "create") {
            const requiredFields = [
                { field: "name", label: "Hospital name" },
                { field: "email", label: "Hospital email" },
                { field: "phone", label: "Hospital phone" },
                { field: "streetAddress", label: "Street address" },
                { field: "city", label: "City" },
                { field: "state", label: "State" },
                { field: "country", label: "Country" },
            ] as const;

            for (const { field, label } of requiredFields) {
                if (!data[field]) {
                    ctx.addIssue({
                        code: "custom",
                        path: [field],
                        message: `${label} is required`,
                    });
                }
            }
        }
    });
}

export type HospitalFormInput = zod.input<typeof hospitalBaseSchema>;
export type HospitalFormOutput = zod.output<typeof hospitalBaseSchema>;

