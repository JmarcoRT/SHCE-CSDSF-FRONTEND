import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/shared/hooks/useAuthContext";

import { ROLE_PATHS } from "@/shared/utils/roles";

export default function RoleRedirect() {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login", { replace: true });
            return;
        }
        const path = ROLE_PATHS[user.roleName] || "/login";
        navigate(path, { replace: true });
    }, [user, navigate]);

    return null;
}
