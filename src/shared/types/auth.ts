export type User = {
    id: number;
    username: string;
    roleName: string;
    id_area?: number;
};

export type AuthContextType = {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
};
