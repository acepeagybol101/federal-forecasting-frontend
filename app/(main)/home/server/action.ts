"use server"

import { apiFetch } from "@/lib/api/fetch";

export async function load()
{
    const response =  await apiFetch('/subadmin/categories', {
        method: 'POST'
    });

    console.log(response)

    return response;
}
