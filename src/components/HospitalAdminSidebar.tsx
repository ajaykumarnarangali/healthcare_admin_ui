import { NavLink } from "react-router-dom";
import { IconLogout } from "../components/Icons";
import { getPermittedSidebarGroups } from "../utils/navigation";
import { useAppSelector } from "../hooks/userAppSelector";


function HospitalAdminSidebar() {

    const permittedSidebarData = getPermittedSidebarGroups("HOSPITAL_ADMIN");
    const user = useAppSelector((state) => state.user);

    return (
        <div className="flex h-full w-full flex-col bg-primary">
            {/* Sidebar Header */}
            <div className="shrink-0 flex justify-start py-5 px-4 border-b border-white/[0.12]">
                <div className="flex items-center gap-[10px]">
                    <div className="flex h w-9 h-9 items-center justify-center rounded-[10px] bg-[#3C6C8A]">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-inter font-semibold text-base text-white">
                            MediConnect
                        </div>
                        <div className="text-[11px] font-inter text-white/[0.55]">
                            Hospital Admin Portal
                        </div>
                    </div>
                </div>
            </div>

             {/* Middle - Scrollable */}
            <div className="sidebar-scrollbar min-h-0 flex-1 overflow-y-auto p-3 flex flex-col gap-5">
                {permittedSidebarData.map((group) => (
                    <div key={group.label}>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {group.label}
                        </div>

                        <div className="flex flex-col gap-0.5">
                            {(group.items ?? []).map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `relative flex items-center gap-3 rounded-md py-2.5 px-3 transition-colors ${isActive
                                            ? "bg-white/15 text-white"
                                            : "text-sky-100/75 hover:bg-white/10"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {isActive && (
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[2px] bg-sky-400 rounded-r" />
                                            )}

                                            <item.Icon
                                                size={17}
                                                className={isActive ? "text-white" : "text-sky-200/75"}
                                            />
                                            <span className="text-sm">{item.label}</span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar Footer */}
            <div className="shrink-0 border-t border-white/[0.12] pt-5 pb-3 px-3">
                <div className="flex mb-2 px-2 items-center gap-[10px]">
                    <div className="flex items-center justify-center">
                        <img
                            src="https://placehold.co/34x34"
                            alt="Profile"
                            className="h-[34px] w-[34px] rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="font-inter font-semibold text-sm text-white">
                            {user?.name ?? "Your Name"}
                        </div>
                        <div className="text-[11px] font-inter text-white/[0.55]">
                            Hospital Admin
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 hover:bg-white/15 cursor-pointer p-3  rounded-lg items-center">
                    <IconLogout size={17} className="text-white/60" />
                    <p className="text-sm text-white/60">
                        Sign Out
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HospitalAdminSidebar