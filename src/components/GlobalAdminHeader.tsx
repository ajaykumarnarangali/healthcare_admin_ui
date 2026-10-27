import { useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/userAppSelector";
import { IconBell } from "../components/Icons";
import { getPermittedSidebarGroups } from "../utils/navigation";

const GlobalAdminHeader = () => {
    const location = useLocation();

    const currentItem = getPermittedSidebarGroups("GLOBAL_ADMIN")
        .flatMap((group) => group.items)
        .find((item) => item.path === location.pathname);

    const user = useAppSelector((state) => state.user);

    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            <h1 className="text-[17px] font-semibold text-slate-800">
                {currentItem?.label ?? "Dashboard"}
            </h1>

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative"
                >
                    <IconBell size={20} className="text-slate-600" />
                    <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white" />
                </button>

                <img
                    src={user?.profileImage ?? "https://placehold.co/34x34"}
                    alt="Profile"
                    className="h-8 w-8 cursor-pointer rounded-full object-cover"
                />
            </div>
        </header>
    );
};

export default GlobalAdminHeader;