import { createContext } from "react";
import type { AuthContextType } from "@/shared/types/auth";

// ✅ solo contiene el createContext
export const AuthContext = createContext<AuthContextType | null>(null);
