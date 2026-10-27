import { Outlet } from 'react-router-dom';
import GlobalAdminSidebar from '../components/GlobalAdminSidebar';
import GlobalAdminHeader from '../components/GlobalAdminHeader';

function GlobalAdminLayout() {
    return (
        <div className="w-full min-h-screen">
            <div className="flex min-h-screen">
                <aside className="w-60 h-screen shrink-0 overflow-y-auto">
                    <GlobalAdminSidebar />
                </aside>
                <main className="flex-1 min-w-0">
                    <GlobalAdminHeader />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default GlobalAdminLayout;