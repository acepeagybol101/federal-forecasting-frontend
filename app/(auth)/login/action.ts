"use server";

import { redirect } from "next/navigation";
import { formSchema } from "@/app/(auth)/login/schema";
import { cookies } from "next/headers";
import { apiFetch } from "@/lib/fetch";

export async function login(formData: FormData) {
  const cookieStore = cookies();

  const request = formSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  // Return early if the form data is invalid
  if (!request.success) {
    return {
      errors: request.error.flatten().fieldErrors,
    };
  }

  const response = await apiFetch("/users/login", {
    method: "POST",
    body: JSON.stringify(request.data),
  });

  if (response.statusCode === 200) {
    cookieStore.set("token", response.data.token);
    cookieStore.set("user", response.data);

    redirect("/home");
  }

  redirect("/login");
}
