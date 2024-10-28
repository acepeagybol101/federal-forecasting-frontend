import { z } from "zod";
import { signIn } from "next-auth/react";

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
}).refine(async (data) => {
    try {
        const signInResponse = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (signInResponse?.error) {
            throw new z.ZodError([
                {
                    code: z.ZodIssueCode.custom, 
                    path: ["password"], 
                    message: "Your Email and Password is Invalid", 
                },
            ]);
        }

        return true; 
    } catch (error) {
        return new z.ZodError([
            {
                code: z.ZodIssueCode.custom,
                path: ["password"],
                message: "An unexpected error occurred during sign-in.",
            },
        ]);
    }
}, {
    message: "Your Email and Password is Invalid", 
    path: ["password"], 
});
