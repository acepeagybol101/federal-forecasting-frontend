"use server";

import { cookies } from "next/headers";

export async function apiFetch(url: string, options: RequestInit = {}) {
    const token = cookies().get('token')?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : '',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}
