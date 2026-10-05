import { Outlet } from 'react-router-dom';
import GlobalAdminSidebar from '../components/GlobalAdminSidebar';

function GlobalAdminLayout() {
    return (
        <div>
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