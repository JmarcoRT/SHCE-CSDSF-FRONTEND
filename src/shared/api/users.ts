import { http } from "@/shared/api/http";

export type UserResponse = {
    id: number;
    roleName: string;
    username: string;
    email: string;
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    phone: string;
    enabled: boolean;
    createdAt: string;
    updatedAt: string;
    // si tu backend expone esto aquí, déjalo; si no, elimínalo:
    id_area?: number;
};

export async function getUserById(id: number): Promise<UserResponse> {
    const { data } = await http.get<UserResponse>(`/api/v1/users/${id}`);
    return data;
}
