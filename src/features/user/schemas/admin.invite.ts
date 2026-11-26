import { z } from 'zod';

export const adminInviteSchema = z.object({
    name: z.string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must not exceed 100 characters'),

    email: z.string()
        .min(1, 'Email is required')
        .regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ),

    confirmEmail: z.string()
        .min(1, 'Email is required')
        .regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ),

    hospital_id: z.string()
        .uuid('Please Select a hospital')
}).superRefine((data, ctx) => {
    if (data.email !== data.confirmEmail) {
        ctx.addIssue({
            code: 'custom',
            message: 'Email addresses do not match',
            path: ['confirmEmail']
        });
    }
});

export const InviteFormInitValues = {
    name: "",
    email: "",
    confirmEmail: "",
    hospital_id: "",
}

export type InviteFormInput = z.input<typeof adminInviteSchema>;
export type InviteFormOutput = z.output<typeof adminInviteSchema>;


export const adminAcceptInvitationSchema = z.object({
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(128, "Password must not exceed 128 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character"
        ),
    confirmPassword: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(128, "Password must not exceed 128 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character"
        )
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match',
            path: ['confirmPassword']
        });
    }
});

export type AdminInviteAcceptFormInput = z.input<typeof adminAcceptInvitationSchema>;
export type AdminInviteAcceptFormOutput = z.output<typeof adminAcceptInvitationSchema>;