"use server"

import { cookies } from "next/headers";

const token = cookies().get('token');

export async function apiFetch(url: string, data: object) {

    const response = await fetch(`http://127.0.0.1:8000/api${url}`, {
        ...data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token?.value}` : '',
        },
    });

    return response?.json();
}