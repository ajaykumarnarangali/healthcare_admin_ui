import { z } from 'zod';

export const profileBaseSchema = z.object({
    firstName: z.string()
        .trim()
        .transform((value) => value === "" ? undefined : value)
        .pipe(
            z.string()
                .min(2, 'First name must be at least 2 characters')
                .max(100, 'First name must not exceed 100 characters')
                .optional()
        )
        .optional(),

    lastName: z.string()
        .trim()
        .transform((value) => value === "" ? undefined : value)
        .pipe(
            z.string()
                .min(2, 'Last name must be at least 2 characters')
                .max(100, 'Last name must not exceed 100 characters')
                .optional()
        )
        .optional(),

    phone: z.string()
        .trim()
        .transform((value) => value === "" ? undefined : value)
        .pipe(
            z.string()
                .max(20, 'Phone number must not exceed 20 characters')
                .regex(/^\+?[0-9]+$/, 'Invalid phone number format')
                .optional()
        )
        .optional(),

    dateOfBirth: z.preprocess(
        (value) => value === "" ? undefined : value,
        z.coerce.date({
            error: 'Please enter a valid date of birth',
        }).optional()
    ),

    gender: z.preprocess(
        (value) => value === "" ? undefined : value,
        z.enum(['MALE', 'FEMALE', 'OTHER'], {
            error: 'Please select a valid gender',
        }).optional()
    ),

    streetAddress: z.string()
        .trim()
        .max(255, 'Street address must not exceed 255 characters')
        .optional(),

    city: z.string()
        .trim()
        .max(100, 'City must not exceed 100 characters')
        .optional(),

    state: z.string()
        .trim()
        .max(100, 'State must not exceed 100 characters')
        .optional(),

    country: z.string()
        .trim()
        .max(100, 'Country must not exceed 100 characters')
        .optional(),

    postalCode: z.string()
        .trim()
        .max(20, 'Postal code must not exceed 20 characters')
        .optional(),

    profilePhoto: z
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
            "Image must be smaller than 2 MB"
        )

}).strict();

export function getPatientProfileSchema(isProfileExist: boolean) {
    return profileBaseSchema.superRefine((data, ctx) => {
        if (!isProfileExist) {
            if (!data.firstName) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['firstName'],
                    message: 'First name is required',
                });
            }

            if (!data.phone) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['phone'],
                    message: 'Phone number is required',
                });
            }

            if (!data.dateOfBirth) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['dateOfBirth'],
                    message: 'Please enter a valid date of birth',
                });
            }

            if (!data.gender) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['gender'],
                    message: 'Please select a valid gender',
                });
            }
        }
    });
}

export const ProfileInitialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    dateOfBirth: "",
    gender: undefined,
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    profilePhoto: undefined,
}

export type ProfileFormInput = z.input<typeof profileBaseSchema>;
export type ProfileFormOutput = z.output<typeof profileBaseSchema>;

