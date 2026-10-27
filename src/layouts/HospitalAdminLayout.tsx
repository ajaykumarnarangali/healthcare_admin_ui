import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HospitalAdminSidebar from '../components/HospitalAdminSidebar';
import HospitalAdminHeader from '../components/HospitalAdminHeader';

function HospitalAdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen w-full">
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
            <main className="min-w-0 lg:ml-60">
                <HospitalAdminHeader
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                <Outlet />
            </main>
        </div>
    );
}

export default HospitalAdminLayout;