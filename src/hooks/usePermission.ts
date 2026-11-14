import { useAppSelector } from "./userAppSelector";

export function usePermission() {
    const permissions = useAppSelector(
        (state) => state.permissions.permissions
    );

    const hasPermission = (permission: string) => {
        return permissions.includes(permission);
    };

    const hasAnyPermission = (required: string[]) => {
        return required.some((permission) =>
            permissions.includes(permission)
        );
    };

    const hasAllPermissions = (required: string[]) => {
        return required.every((permission) =>
            permissions.includes(permission)
        );
    };

    return {
        hasPermission,
        hasAnyPermission,
        hasAllPermissions,
    };
}