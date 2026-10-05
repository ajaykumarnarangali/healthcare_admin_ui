import { Outlet } from 'react-router-dom';
import GlobalAdminHeader from '../components/GlobalAdminHeader';
import GlobalAdminSidebar from '../components/GlobalAdminSidebar';

function GlobalAdminLayout() {
    return (
        <div>
            <GlobalAdminHeader />
            <div>
                <div>
                    <GlobalAdminSidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default GlobalAdminLayout;