import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HospitalAdminSidebar from '../components/HospitalAdminSidebar';
import HospitalAdminHeader from '../components/HospitalAdminHeader';

function HospitalAdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="h-screen w-full overflow-hidden">
            {/* Mobile overlay */}
            {isSidebarOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-60
                    overflow-y-auto transition-transform duration-300
                    lg:translate-x-0
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <HospitalAdminSidebar
                    onNavigate={() => setIsSidebarOpen(false)}
                />
            </aside>

            {/* Main content */}
            <main className="h-full min-w-0 flex flex-col lg:ml-60">
                <HospitalAdminHeader
                    onMenuClick={() => setIsSidebarOpen(true)}
                />

                <div className="flex-1 min-h-0 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default HospitalAdminLayout;