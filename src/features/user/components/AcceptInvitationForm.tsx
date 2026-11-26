import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminAcceptInvitationSchema, type AdminInviteAcceptFormInput, type AdminInviteAcceptFormOutput } from "../schemas/admin.invite";


function AcceptInvitationForm() {


    const {
        register: registerField,
        formState: { errors },
        handleSubmit
    } = useForm<AdminInviteAcceptFormInput, any, AdminInviteAcceptFormOutput>({
        resolver: zodResolver(adminAcceptInvitationSchema)
    });

    async function handleInvitation(data: AdminInviteAcceptFormOutput) {
        console.log(data)

    }

    return (
        <form
            onSubmit={handleSubmit((data) => handleInvitation(data))}
            className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter"
        >
            <div>
                <h1 className="mb-1 text-xl font-bold leading-7 text-foreground sm:text-2xl sm:leading-8">
                    Accept Invitation
                </h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                    Set your password to activate your account
                </p>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
                <label
                    htmlFor="password"
                    className="text-xs font-semibold uppercase text-muted-foreground sm:text-[13px]"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    {...registerField("password")}
                    placeholder="Enter your password"
                    className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring sm:text-base"
                />
                {errors.password && (
                    <p className="text-xs text-red-600" role="alert">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor="confirmPassword"
                    className="text-xs font-semibold uppercase text-muted-foreground sm:text-[13px]"
                >
                    Confirm Password
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...registerField("confirmPassword")}
                    placeholder="Confirm your password"
                    className="h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring sm:text-base"
                />
                {errors.confirmPassword && (
                    <p className="text-xs text-red-600" role="alert">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <button
                className="mt-1 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                type="submit"
            >
                Accept Invitation
            </button>
        </form>
    )
}

export default AcceptInvitationForm