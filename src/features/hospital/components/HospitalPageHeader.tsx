import { Link } from "react-router-dom";
import { IconPlus } from "../../../components/Icons";
import { usePermission } from "../../../hooks/usePermission";
import { GLOBAL_ADMIN_PERMISSIONS } from "../../../constants/permissions";


interface HospitalPageHeaderProps {
    headerProps: {
        totalCount: number;
    };
}
function HospitalPageHeader({ headerProps }: HospitalPageHeaderProps) {

    const { totalCount } = headerProps;
    const { hasPermission } = usePermission();
    const canManageHospital = hasPermission(GLOBAL_ADMIN_PERMISSIONS.HOSPITAL.MANAGE);

    return (
        <div className="w-full flex flex-col gap-3 md:flex-row justify-between md:items-center">
            <div>
                <h1 className="text-xl font-semibold text-foreground">Hospitals</h1>
                <p className="text-sm text-muted-foreground">{totalCount} hospitals on the platform</p>
            </div>
            <div>
                {
                    canManageHospital && (
                        <Link
                            className="bg-primary flex items-center gap-1 px-4 w-fit py-2 rounded-lg text-white text-sm"
                            to="/global-admin/hospitals/create">
                            <IconPlus className="h-4 text-white w-4" />
                            Create Hospital
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default HospitalPageHeader