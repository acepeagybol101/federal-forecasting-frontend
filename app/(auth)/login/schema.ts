import { z } from "zod";

export const formSchema = z.object({
    email: z
        .string()
        .min(1, {
            message: "Email is required",
        })
        .email({
            message: "Please enter a valid email",
        }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});
