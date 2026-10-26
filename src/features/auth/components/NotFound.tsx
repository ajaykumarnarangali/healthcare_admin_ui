import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                <p className="text-sm font-semibold text-primary">
                    ERROR 404
                </p>

                <h1 className="mt-3 text-2xl font-bold text-foreground">
                    Page Not Found
                </h1>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    The page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}
