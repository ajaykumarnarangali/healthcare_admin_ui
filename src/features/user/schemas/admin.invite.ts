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