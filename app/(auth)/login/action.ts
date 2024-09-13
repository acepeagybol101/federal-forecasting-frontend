import { redirect } from "next/navigation";
import { formSchema } from "@/app/(auth)/login/schema";

export async function login(formData: FormData) {
    const data = formSchema.safeParse({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    });

    // Return early if the form data is invalid
    if (!data.success) {
        return {
            errors: data.error.flatten().fieldErrors,
        };
    }

    const response = await fetch("http://federal.test/api/users/login", {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    // const data = await response.json();
    console.log(await response.json());

    // redirect("/home");
}
