export interface LoginBody {
    username: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    username: string;
    tokenType: "Bearer";
    accessToken: string;
    refreshToken: string;
}