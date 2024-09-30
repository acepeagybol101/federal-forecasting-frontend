"use server";

import { apiFetch } from "@/lib/fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const response = await apiFetch("/users/logout", {
    method: "POST",
  });

  if (response.statusCode === 200) {
    cookies().delete("token");
    cookies().delete("user");

    redirect("/login");
  }
}
