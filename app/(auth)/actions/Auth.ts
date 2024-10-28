"use server";

// import { redirect } from "next/navigation";
// import { formSchema } from "@/app/(auth)/login/schema";
// import { cookies } from "next/headers";
// import { apiFetch } from "@/lib/api/fetch";

// export async function login(formData: FormData) {
//   const cookieStore = cookies();

//   const request = formSchema.safeParse({
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   });

//   // Return early if the form data is invalid
//   if (!request.success) {
//     return {
//       errors: request.error.flatten().fieldErrors,
//     };
//   }

//   const response = await apiFetch("/users/login", {
//     method: "POST",
//     body: JSON.stringify(request.data),
//   });

//   if (response.statusCode === 200) {
//     cookieStore.set("token", response.data.token);
//     cookieStore.set("user", response.data);

//     redirect("/home");
//   }

//   redirect("/login");
// }

// export async function logout() {
//     const response = await apiFetch("/users/logout", {
//       method: "POST",
//     });

//     if (response.statusCode === 200) {
//       cookies().delete("token");
//       cookies().delete("user");

//       redirect("/login");
//     }
//   }


// Auth.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

// Define the schema using Zod
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export async function login(formData: FormData) {
  const cookieStore = cookies();

  // Parse and validate formData against the schema
  const result = loginSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });


  if (!result.success) {
    return NextResponse.json({ success: false, error: result.error.flatten().fieldErrors }, { status: 400 });
  }

  // Check if it's the demo credentials
  if (result.data.email === "federal-app@demo.com" && result.data.password === "12345678") {
    // Set a simulated token and user data in cookies
    cookieStore.set("token", "demo-token");
    cookieStore.set("user", JSON.stringify({ name: "Demo User", email: "federal-app@demo.com" }));

    // Redirect to the home page
    return NextResponse.redirect("/home");
  } else {
    // Redirect to the login page if the credentials do not match the demo
    return NextResponse.redirect("/home");
  }
}

