import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
    return (
        <input
            className="w-full border border-gray-400 rounded px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            {...props}
        />
    );
}
