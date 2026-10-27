import { useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/userAppSelector";
import { IconBell, IconMenu } from "../components/Icons";
import { getPermittedSidebarGroups } from "../utils/navigation";

type HospitalAdminHeaderProps = {
    onMenuClick: () => void;
};

const HospitalAdminHeader = ({ onMenuClick }: HospitalAdminHeaderProps) => {
    const location = useLocation();

    const currentItem = getPermittedSidebarGroups("HOSPITAL_ADMIN")
        .flatMap((group) => group.items)
        .find((item) => item.path === location.pathname);

    const user = useAppSelector((state) => state.user);

    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
                <button
                    type="button"
                    aria-label="Open sidebar"
                    onClick={onMenuClick}
                    className="rounded-md p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                >
                    <IconMenu size={22} />
                </button>

                <h1 className="text-[17px] font-semibold text-slate-800">
                    {currentItem?.label ?? "Dashboard"}
                </h1>
            </div>

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

export default HospitalAdminHeader;