import LoginForm from "../components/LoginForm";
import AuthHeader from "../components/AuthHeader";

function LoginPage() {
    return (
        <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-bg px-4 py-6 sm:px-6">
            <AuthHeader />
            <LoginForm />
            <p className="mt-4 text-center text-[11px] text-text-muted sm:mt-6 sm:text-xs">
                © 2026 MediConnect. All rights reserved.
            </p>
        </div>
    )
}

export default LoginPage