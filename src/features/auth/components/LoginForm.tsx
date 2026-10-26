import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginData } from "../schemas/auth.schema";

function LoginForm() {

    const { error, isLoading, login } = useLogin();
    const {
        reset,
        handleSubmit,
        formState: { errors },
        register: registerField,
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    });

    return (
        <form
            onSubmit={handleSubmit((data) => login(data, reset))}
            className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter"
        >
            <div>
                <h1 className="mb-1 text-xl font-bold leading-7 text-foreground sm:text-2xl sm:leading-8">
                    Welcome back
                </h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                    Sign in to your Admin account
                </p>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
                <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase text-muted-foreground sm:text-[13px]"
                >
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...registerField("email")}
                    aria-invalid={!!errors.email}
                    className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring sm:text-base"
                />
                {errors.email && (
                    <p className="text-xs text-red-600" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                    <label
                        htmlFor="password"
                        className="text-xs font-semibold uppercase text-muted-foreground sm:text-[13px]"
                    >
                        Password
                    </label>
                    <Link
                        to="/forgot-password"
                        className="shrink-0 text-xs font-medium text-secondary hover:underline sm:text-[13px]"
                    >
                        Forgot password?
                    </Link>
                </div>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...registerField("password")}
                    aria-invalid={!!errors.password}
                    className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring sm:text-base"
                />
                {errors.password && (
                    <p className="text-xs text-red-600" role="alert">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {error && (
                <p className="text-sm text-red-600" role="alert">
                    {error}
                </p>
            )}

            <button
                className="mt-1 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? "Signing in..." : "Sign In"}
            </button>
            <div className="mt-2 flex flex-wrap justify-center text-xs text-text-muted sm:text-sm">
                Don't have an account?
                <Link className="ps-1 font-semibold text-[#1A5276]" to="/">
                    Create an account
                </Link>
            </div>
        </form>

    );
}

export default LoginForm