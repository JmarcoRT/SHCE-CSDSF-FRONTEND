import { http } from "@/shared/api/http.ts";
import type { LoginBody, LoginResponse } from "../types";

export async function loginApi(body: LoginBody): Promise<LoginResponse> {
    const { data } = await http.post<LoginResponse>("/api/v1/auth/login", body);
    return data;
}
