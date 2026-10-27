import { Outlet } from 'react-router-dom';
import HospitalAdminSidebar from '../components/HospitalAdminSidebar';
import HospitalAdminHeader from '../components/HospitalAdminHeader';

function HospitalAdminLayout() {
    return (
        <div className="w-full min-h-screen">
            <div className="flex min-h-screen">
                <aside className="w-60 h-screen shrink-0 overflow-y-auto">
                    <HospitalAdminSidebar />
                </aside>
                <main className="flex-1 min-w-0">
                    <HospitalAdminHeader />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default HospitalAdminLayout;