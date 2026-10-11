import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <form className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter">
            <div>
                <h1 className="mb-1 text-xl font-bold leading-7 text-foreground sm:text-2xl sm:leading-8">
                    Welcome back
                </h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                    Sign in to your Admin account
                </p>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-muted-foreground sm:text-[13px]">
                    Email address
                </label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 w-full rounded-lg placeholder:text-[13px] border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring sm:text-base"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                    <label className="text-xs font-semibold uppercase text-muted-foreground sm:text-[13px]">
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
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 w-full rounded-lg border placeholder:text-[13px] border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring sm:text-base"
                />
            </div>

            <button
                className="mt-1 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
                type="submit"
            >
                Sign In
            </button>

            <div className="mt-2 flex flex-wrap justify-center text-xs text-muted-foreground sm:text-sm">
                Don't have an account?
                <Link
                    className="ps-1 font-semibold text-secondary hover:underline"
                    to="/register"
                >
                    Create an account
                </Link>
            </div>
        </form>
    );
}

export default LoginForm