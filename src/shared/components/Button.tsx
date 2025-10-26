import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="w-full bg-black text-white text-sm font-medium py-2 rounded hover:bg-gray-900 transition"
            {...props}
        >
            {children}
        </button>
    );
}
