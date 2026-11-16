import { Link } from "react-router-dom";
import { IconPlus } from "../../../components/Icons";
import type { ManagedUserRole } from "../types/user.type";
import { usePermission } from "../../../hooks/usePermission";
import { GLOBAL_ADMIN_PERMISSIONS } from "../../../constants/permissions";

interface UserPageHeaderProps {
  headerProps: {
    title: string,
    content: string,
    role: ManagedUserRole
  }
}
function UserPageHeader({ headerProps }: UserPageHeaderProps) {

  const { title, content, role } = headerProps;
  const { hasPermission } = usePermission();
  const canManageHospitalAdmin = hasPermission(GLOBAL_ADMIN_PERMISSIONS.HOSPITAL_ADMIN.MANAGE);

  return (
    <div className="w-full flex flex-col gap-3 md:flex-row justify-between md:items-center">
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        <p className="text-xs text-muted-foreground">
          {content}
        </p>
      </div>
      <div>
        {
          role == "HOSPITAL_ADMIN" && canManageHospitalAdmin && (
            <Link
              className="bg-primary flex items-center gap-1 px-4 w-fit py-2 rounded-lg text-white text-sm"
              to="/global-admin/hospitals/create">
              <IconPlus className="h-4 text-white w-4" />
              Invite Hospital Admin
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default UserPageHeader