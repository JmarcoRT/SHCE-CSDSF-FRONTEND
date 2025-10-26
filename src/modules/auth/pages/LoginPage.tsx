import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-[420px] p-10 text-center">
                <LoginForm />
            </div>
        </div>
    );
}
